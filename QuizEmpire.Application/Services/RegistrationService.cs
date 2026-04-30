using QuizEmpire.Application.DTOs;
using QuizEmpire.Application.Interfaces;
using QuizEmpire.Domain.Entities;
using QuizEmpire.Domain.Enums;
using QuizEmpire.Domain.Interfaces;

namespace QuizEmpire.Application.Services;

public interface IRegistrationService
{
    Task<RegistrationResultDto> RegisterTeamAsync(RegisterTeamDto request);
}

public class RegistrationService : IRegistrationService
{
    private readonly IGameRepository _gameRepository;
    private readonly IUserRepository _userRepository;
    private readonly IRegistrationRepository _regRepository;
    private readonly INotificationService _notificationService;

    public RegistrationService(
        IGameRepository gameRepository,
        IUserRepository userRepository,
        IRegistrationRepository regRepository,
        INotificationService notificationService)
    {
        _gameRepository = gameRepository;
        _userRepository = userRepository;
        _regRepository = regRepository;
        _notificationService = notificationService;
    }

    public async Task<RegistrationResultDto> RegisterTeamAsync(RegisterTeamDto dto)
    {
        // 1. Проверяем игру
        var game = await _gameRepository.GetGameByIdAsync(dto.GameId);
        if (game == null || game.Status != GameStatus.RegistrationOpen)
            return new RegistrationResultDto(false, "Игра не найдена или регистрация закрыта.");

        if (game.ScheduledAt < DateTime.UtcNow)
            return new RegistrationResultDto(false, "Игра уже началась или прошла.");

        if (dto.PlayerCount < game.MinPlayersPerTeam || dto.PlayerCount > game.MaxPlayersPerTeam)
            return new RegistrationResultDto(false, $"В команде должно быть от {game.MinPlayersPerTeam} до {game.MaxPlayersPerTeam} человек.");

        // 2. Проверяем лимит команд
        var currentTeams = await _regRepository.GetRegisteredTeamsCountAsync(dto.GameId);
        if (game.MaxTeams > 0 && currentTeams >= game.MaxTeams)
            return new RegistrationResultDto(false, "Мест больше нет, регистрация закрыта.");

        // 3. Ищем или создаем пользователя (Капитана)
        var user = await _userRepository.GetByVkIdAsync(dto.VkId);
        if (user == null)
        {
            // Убедись, что конструктор User в Domain принимает эти параметры
            user = new User(dto.VkId, dto.FirstName, dto.LastName, dto.Phone, 0, DateTime.UtcNow);
            await _userRepository.AddAsync(user);
        }

        // 4. Создаем регистрацию
        decimal totalPrice = dto.PlayerCount * game.Price;

        var registration = new Registration(game.Id, user.Id, dto.TeamName, dto.PlayerCount, totalPrice, RegStatus.Pending, DateTime.UtcNow, dto.AllowJoinPlayers, dto.BirthdayPersonName, dto.Comment);
        
        await _regRepository.AddAsync(registration);

        string successMessage = $"🎉 Ура! Вы успешно зарегистрировали команду «{dto.TeamName}» на игру «{game.Title}».\n\n" +
                                $"📍 Место: {game.Venue?.Name ?? "Уточняется"}\n" +
                                $"📅 Дата: {game.ScheduledAt.ToString("f")}\n" +
                                $"👥 Человек: {dto.PlayerCount}\n" +
                                $"💰 К оплате на месте: {totalPrice} руб.";

        // Отправляем в фоне, чтобы не тормозить HTTP-ответ клиенту
        _ = Task.Run(() => _notificationService.SendMessageAsync(user.VkId, successMessage));

        return new RegistrationResultDto(true, "Команда успешно зарегистрирована!", registration.Id);
    }
}
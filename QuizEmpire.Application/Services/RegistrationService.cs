using QuizEmpire.Application.DTOs;
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

    public RegistrationService(
        IGameRepository gameRepository, 
        IUserRepository userRepository, 
        IRegistrationRepository regRepository)
    {
        _gameRepository = gameRepository;
        _userRepository = userRepository;
        _regRepository = regRepository;
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
        
        // Убедись, что конструктор Registration в Domain принимает эти параметры
        var registration = new Registration(game.Id, user.Id, dto.TeamName, dto.PlayerCount, totalPrice, RegStatus.Pending, DateTime.UtcNow);
        
        await _regRepository.AddAsync(registration);

        return new RegistrationResultDto(true, "Команда успешно зарегистрирована!", registration.Id);
    }
}
using QuizEmpire.Application.DTOs;
using QuizEmpire.Domain.Entities;
using QuizEmpire.Domain.Interfaces;

namespace QuizEmpire.Application.Services;

public interface IGameService
{
    Task<IEnumerable<GameDto>> GetScheduleByCityAsync(int cityId);
    Task<int> CreateGameAsync(CreateGameDto dto);
}

public class GameService : IGameService
{
    private readonly IGameRepository _gameRepository;

    public GameService(IGameRepository gameRepository)
    {
        _gameRepository = gameRepository;
    }

    public async Task<IEnumerable<GameDto>> GetScheduleByCityAsync(int cityId)
    {
        var games = await _gameRepository.GetActiveGamesByCityAsync(cityId);

        // Маппим Entity в DTO (чтобы не отдавать наружу структуру БД)
        return games.Select(g => new GameDto(
            g.Id,
            g.Title,
            g.Description,
            g.CoverUrl,
            g.ScheduledAt,
            g.Price,
            g.Venue?.Name ?? "Неизвестно",
            g.Venue?.Address ?? "Неизвестно"
        ));
    }

    public async Task<int> CreateGameAsync(CreateGameDto dto)
    {
        var game = new Game(
            dto.CityId,
            dto.VenueId,
            dto.Title,
            dto.Description,
            dto.CoverUrl,
            dto.ScheduledAt,
            dto.Price,
            dto.MinPlayersPerTeam,
            dto.MaxPlayersPerTeam,
            dto.MaxTeams);

        // По умолчанию ставим статус Draft (Черновик)
        // game.Status = GameStatus.Draft; // (Если нужно раскомментируй/добавь сеттер)

        await _gameRepository.AddAsync(game);
        return game.Id;
    }
}
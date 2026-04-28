using QuizEmpire.Application.DTOs;
using QuizEmpire.Domain.Interfaces;

namespace QuizEmpire.Application.Services;

public interface IGameService
{
    Task<IEnumerable<GameDto>> GetScheduleByCityAsync(int cityId);
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
}
using QuizEmpire.Domain.Entities;

namespace QuizEmpire.Domain.Interfaces;

public interface IGameRepository
{
    Task<IEnumerable<Game>> GetActiveGamesByCityAsync(int cityId);
    Task<Game?> GetGameByIdAsync(int gameId);
}
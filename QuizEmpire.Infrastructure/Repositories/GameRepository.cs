using Microsoft.EntityFrameworkCore;
using QuizEmpire.Domain.Entities;
using QuizEmpire.Domain.Enums;
using QuizEmpire.Domain.Interfaces;

namespace QuizEmpire.Infrastructure.Repositories;

public class GameRepository : IGameRepository
{
    private readonly AppDbContext _context;

    public GameRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Game>> GetActiveGamesByCityAsync(int cityId)
    {
        return await _context.Games
            .Include(g => g.Venue) // Подтягиваем инфу о заведении
            .Where(g => g.CityId == cityId 
                     && g.Status == GameStatus.RegistrationOpen 
                     && g.ScheduledAt > DateTime.UtcNow)
            .OrderBy(g => g.ScheduledAt)
            .AsNoTracking()
            .ToListAsync();
    }

    public async Task<Game?> GetGameByIdAsync(int gameId)
    {
        return await _context.Games
            .Include(g => g.Venue)
            .FirstOrDefaultAsync(g => g.Id == gameId);
    }
}
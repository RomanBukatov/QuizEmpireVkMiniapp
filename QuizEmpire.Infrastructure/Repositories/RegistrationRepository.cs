using Microsoft.EntityFrameworkCore;
using QuizEmpire.Domain.Entities;
using QuizEmpire.Domain.Interfaces;

namespace QuizEmpire.Infrastructure.Repositories;

public class RegistrationRepository : IRegistrationRepository
{
    private readonly AppDbContext _context;
    public RegistrationRepository(AppDbContext context) => _context = context;

    public async Task<int> GetRegisteredTeamsCountAsync(int gameId) =>
        await _context.Registrations.CountAsync(r => r.GameId == gameId && r.Status != QuizEmpire.Domain.Enums.RegStatus.Canceled);

    public async Task<Registration> AddAsync(Registration registration)
    {
        _context.Registrations.Add(registration);
        await _context.SaveChangesAsync();
        return registration;
    }
}
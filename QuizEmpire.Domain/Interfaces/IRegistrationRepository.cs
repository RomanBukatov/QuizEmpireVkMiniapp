using QuizEmpire.Domain.Entities;

namespace QuizEmpire.Domain.Interfaces;

public interface IRegistrationRepository
{
    Task<int> GetRegisteredTeamsCountAsync(int gameId);
    Task<Registration> AddAsync(Registration registration);
}
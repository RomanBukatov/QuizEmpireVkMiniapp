using QuizEmpire.Domain.Entities;

namespace QuizEmpire.Domain.Interfaces;

public interface IUserRepository
{
    Task<User?> GetByVkIdAsync(string vkId);
    Task<User> AddAsync(User user);
}
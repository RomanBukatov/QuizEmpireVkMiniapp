namespace QuizEmpire.Application.Interfaces;

public interface IAuthService
{
    string GenerateJwtToken(string username, string role);
}
namespace QuizEmpire.Application.Interfaces;

public interface INotificationService
{
    Task SendMessageAsync(string vkUserId, string message);
}
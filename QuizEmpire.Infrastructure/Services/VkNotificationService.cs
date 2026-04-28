using System.Text;
using System.Text.Json;
using Microsoft.Extensions.Configuration;
using QuizEmpire.Application.Interfaces;

namespace QuizEmpire.Infrastructure.Services;

public class VkNotificationService : INotificationService
{
    private readonly HttpClient _httpClient;
    private readonly string _accessToken;
    private readonly string _apiVersion;

    public VkNotificationService(HttpClient httpClient, IConfiguration configuration)
    {
        _httpClient = httpClient;
        _accessToken = configuration["VkApi:AccessToken"] ?? throw new ArgumentNullException("VkApi:AccessToken is missing");
        _apiVersion = configuration["VkApi:ApiVersion"] ?? "5.199";
    }

    public async Task SendMessageAsync(string vkUserId, string message)
    {
        var randomId = new Random().Next(); // Требование VK API для защиты от дублей
        var url = $"https://api.vk.com/method/messages.send";

        // Формируем параметры как x-www-form-urlencoded
        var parameters = new Dictionary<string, string>
        {
            { "user_id", vkUserId },
            { "message", message },
            { "random_id", randomId.ToString() },
            { "v", _apiVersion },
            { "access_token", _accessToken }
        };

        var content = new FormUrlEncodedContent(parameters);

        var response = await _httpClient.PostAsync(url, content);

        // В реальном проекте тут нужно залогировать ответ, если response.IsSuccessStatusCode == false
        // или если VK вернул ошибку внутри JSON (например, юзер запретил писать ему).
        var responseString = await response.Content.ReadAsStringAsync();
    }
}
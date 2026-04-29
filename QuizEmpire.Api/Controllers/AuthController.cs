using Microsoft.AspNetCore.Mvc;
using QuizEmpire.Application.Interfaces;

namespace QuizEmpire.Api.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    // Это DTO можно положить в папку DTOs в Application
    public record LoginRequest(string Username, string Password);

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        // ВАЖНО: В реальном проекте тут нужно искать админа в БД и проверять хэш пароля (BCrypt).
        // Для MVP мы сделаем хардкод-суперадмина, чтобы Стас мог зайти.
        if (request.Username == "admin" && request.Password == "StasQuiz2026!") 
        {
            var token = _authService.GenerateJwtToken(request.Username, "SuperAdmin");
            return Ok(new { Token = token });
        }

        return Unauthorized("Неверный логин или пароль");
    }
}
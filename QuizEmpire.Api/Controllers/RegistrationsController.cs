using Microsoft.AspNetCore.Mvc;
using QuizEmpire.Application.DTOs;
using QuizEmpire.Application.Interfaces;
using QuizEmpire.Application.Services;

namespace QuizEmpire.Api.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class RegistrationsController : ControllerBase
{
    private readonly IRegistrationService _regService;
    private readonly INotificationService _notificationService;

    public RegistrationsController(IRegistrationService regService, INotificationService notificationService)
    {
        _regService = regService;
        _notificationService = notificationService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterTeamDto request)
    {
        var result = await _regService.RegisterTeamAsync(request);
        
        if (!result.IsSuccess)
            return BadRequest(new { error = result.Message });

        return Ok(result);
    }

    [HttpGet("test-vk/{userId}")]
    public async Task<IActionResult> TestVk(string userId)
    {
        await _notificationService.SendMessageAsync(userId, "Привет! Это тестовое сообщение от системы QuizEmpire.");
        return Ok("Сообщение отправлено!");
    }
}
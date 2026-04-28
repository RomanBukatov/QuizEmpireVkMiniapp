using Microsoft.AspNetCore.Mvc;
using QuizEmpire.Application.DTOs;
using QuizEmpire.Application.Services;

namespace QuizEmpire.Api.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class RegistrationsController : ControllerBase
{
    private readonly IRegistrationService _regService;

    public RegistrationsController(IRegistrationService regService)
    {
        _regService = regService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterTeamDto request)
    {
        var result = await _regService.RegisterTeamAsync(request);
        
        if (!result.IsSuccess)
            return BadRequest(new { error = result.Message });

        return Ok(result);
    }
}
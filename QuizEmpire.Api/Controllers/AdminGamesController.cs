using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using QuizEmpire.Application.DTOs;
using QuizEmpire.Application.Services;

namespace QuizEmpire.Api.Controllers;

[ApiController]
[Route("api/v1/admin/games")]
[Authorize]
public class AdminGamesController : ControllerBase
{
    private readonly IGameService _gameService;

    public AdminGamesController(IGameService gameService)
    {
        _gameService = gameService;
    }

    [HttpPost]
    public async Task<IActionResult> CreateGame([FromBody] CreateGameDto request)
    {
        var gameId = await _gameService.CreateGameAsync(request);
        return Ok(new { GameId = gameId, Message = "Игра успешно создана!" });
    }

    // Сюда потом добавим методы UpdateStatus, Delete и т.д.
}
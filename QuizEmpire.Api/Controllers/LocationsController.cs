using Microsoft.AspNetCore.Mvc;
using QuizEmpire.Application.Services;

namespace QuizEmpire.Api.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class LocationsController : ControllerBase
{
    private readonly ILocationService _locationService;

    public LocationsController(ILocationService locationService)
    {
        _locationService = locationService;
    }

    [HttpGet("cities")]
    public async Task<IActionResult> GetCities()
    {
        var cities = await _locationService.GetActiveCitiesAsync();
        return Ok(cities);
    }

    [HttpGet("cities/{cityId}/venues")]
    public async Task<IActionResult> GetVenues(int cityId)
    {
        var venues = await _locationService.GetVenuesByCityIdAsync(cityId);
        return Ok(venues);
    }
}
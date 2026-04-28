namespace QuizEmpire.Application.DTOs;

public record CreateGameDto(
    int CityId,
    int VenueId,
    string Title,
    string Description,
    string CoverUrl,
    DateTime ScheduledAt,
    decimal Price,
    int MinPlayersPerTeam,
    int MaxPlayersPerTeam,
    int? MaxTeams // Может быть null, если лимита нет
);
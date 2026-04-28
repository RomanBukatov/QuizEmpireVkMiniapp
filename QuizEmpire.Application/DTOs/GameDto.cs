namespace QuizEmpire.Application.DTOs;

public record GameDto(
    int Id,
    string Title,
    string Description,
    string CoverUrl,
    DateTime ScheduledAt,
    decimal Price,
    string VenueName,
    string VenueAddress
);
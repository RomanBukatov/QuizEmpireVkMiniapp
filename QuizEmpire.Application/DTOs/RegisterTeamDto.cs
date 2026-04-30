namespace QuizEmpire.Application.DTOs;

public record RegisterTeamDto(
    int GameId,
    string VkId,
    string FirstName,
    string LastName,
    string Phone,
    string TeamName,
    int PlayerCount,
    bool AllowJoinPlayers,
    string? BirthdayPersonName,
    string? Comment
);

public record RegistrationResultDto(
    bool IsSuccess,
    string Message,
    int? RegistrationId = null
);
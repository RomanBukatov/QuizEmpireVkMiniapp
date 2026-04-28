namespace QuizEmpire.Application.DTOs;

public record RegisterTeamDto(
    int GameId,
    string VkId,
    string FirstName,
    string LastName,
    string Phone,
    string TeamName,
    int PlayerCount
);

public record RegistrationResultDto(
    bool IsSuccess,
    string Message,
    int? RegistrationId = null
);
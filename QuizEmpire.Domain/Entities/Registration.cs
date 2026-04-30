using QuizEmpire.Domain.Enums;

namespace QuizEmpire.Domain.Entities;

public class Registration
{
    public int Id { get; private set; }
    public int GameId { get; private set; }
    public int CaptainId { get; private set; }
    public string TeamName { get; private set; }
    public int PlayerCount { get; private set; }
    public decimal TotalPrice { get; private set; }
    public RegStatus Status { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public bool AllowJoinPlayers { get; private set; }
    public string? BirthdayPersonName { get; private set; }
    public string? Comment { get; private set; }

    // Navigation properties
    public Game Game { get; private set; }
    public User Captain { get; private set; }

    private Registration() { } // For EF Core

    public Registration(int gameId, int captainId, string teamName, int playerCount, decimal totalPrice, RegStatus status, DateTime createdAt, bool allowJoinPlayers, string? birthdayPersonName, string? comment)
    {
        GameId = gameId;
        CaptainId = captainId;
        TeamName = teamName;
        PlayerCount = playerCount;
        TotalPrice = totalPrice;
        Status = status;
        CreatedAt = createdAt;
        AllowJoinPlayers = allowJoinPlayers;
        BirthdayPersonName = birthdayPersonName;
        Comment = comment;
    }
}
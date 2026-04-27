using QuizEmpire.Domain.Enums;

namespace QuizEmpire.Domain.Entities;

public class Game
{
    public int Id { get; private set; }
    public int CityId { get; private set; }
    public int VenueId { get; private set; }
    public string Title { get; private set; }
    public string Description { get; private set; }
    public string CoverUrl { get; private set; }
    public DateTime ScheduledAt { get; private set; }
    public decimal Price { get; private set; }
    public int MinPlayersPerTeam { get; private set; }
    public int MaxPlayersPerTeam { get; private set; }
    public int MaxTeams { get; private set; }
    public GameStatus Status { get; private set; }
    public DateTime CreatedAt { get; private set; }

    // Navigation properties
    public City City { get; private set; }
    public Venue Venue { get; private set; }
    public ICollection<Registration> Registrations { get; private set; } = new List<Registration>();

    private Game() { } // For EF Core

    public Game(int cityId, int venueId, string title, string description, string coverUrl, DateTime scheduledAt, decimal price, int minPlayersPerTeam, int maxPlayersPerTeam, int maxTeams, GameStatus status, DateTime createdAt)
    {
        CityId = cityId;
        VenueId = venueId;
        Title = title;
        Description = description;
        CoverUrl = coverUrl;
        ScheduledAt = scheduledAt;
        Price = price;
        MinPlayersPerTeam = minPlayersPerTeam;
        MaxPlayersPerTeam = maxPlayersPerTeam;
        MaxTeams = maxTeams;
        Status = status;
        CreatedAt = createdAt;
    }
}
namespace QuizEmpire.Domain.Entities;

public class City
{
    public int Id { get; private set; }
    public string Name { get; private set; }
    public bool IsActive { get; private set; }

    // Navigation properties
    public ICollection<Venue> Venues { get; private set; } = new List<Venue>();
    public ICollection<Game> Games { get; private set; } = new List<Game>();

    private City() { } // For EF Core

    public City(string name, bool isActive)
    {
        Name = name;
        IsActive = isActive;
    }
}
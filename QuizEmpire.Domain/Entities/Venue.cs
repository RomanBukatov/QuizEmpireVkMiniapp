namespace QuizEmpire.Domain.Entities;

public class Venue
{
    public int Id { get; private set; }
    public int CityId { get; private set; }
    public string Name { get; private set; }
    public string Address { get; private set; }
    public string MapLink { get; private set; }

    // Navigation properties
    public City City { get; private set; }
    public ICollection<Game> Games { get; private set; } = new List<Game>();

    private Venue() { } // For EF Core

    public Venue(int cityId, string name, string address, string mapLink)
    {
        CityId = cityId;
        Name = name;
        Address = address;
        MapLink = mapLink;
    }
}
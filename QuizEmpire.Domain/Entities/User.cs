namespace QuizEmpire.Domain.Entities;

public class User
{
    public int Id { get; private set; }
    public string VkId { get; private set; }
    public string FirstName { get; private set; }
    public string LastName { get; private set; }
    public string Phone { get; private set; }
    public int BonusBalance { get; private set; }
    public DateTime CreatedAt { get; private set; }

    // Navigation properties
    public ICollection<Registration> Registrations { get; private set; } = new List<Registration>();

    private User() { } // For EF Core

    public User(string vkId, string firstName, string lastName, string phone, int bonusBalance, DateTime createdAt)
    {
        VkId = vkId;
        FirstName = firstName;
        LastName = lastName;
        Phone = phone;
        BonusBalance = bonusBalance;
        CreatedAt = createdAt;
    }
}
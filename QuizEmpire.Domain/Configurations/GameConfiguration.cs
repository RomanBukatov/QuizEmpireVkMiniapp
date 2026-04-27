using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuizEmpire.Domain.Entities;

namespace QuizEmpire.Domain.Configurations;

public class GameConfiguration : IEntityTypeConfiguration<Game>
{
    public void Configure(EntityTypeBuilder<Game> builder)
    {
        builder.HasKey(g => g.Id);

        builder.Property(g => g.CityId)
            .IsRequired();

        builder.Property(g => g.VenueId)
            .IsRequired();

        builder.Property(g => g.Title)
            .HasMaxLength(200)
            .IsRequired();

        builder.Property(g => g.Description)
            .IsRequired();

        builder.Property(g => g.CoverUrl)
            .HasMaxLength(500);

        builder.Property(g => g.ScheduledAt)
            .IsRequired();

        builder.Property(g => g.Price)
            .HasPrecision(18, 2)
            .IsRequired();

        builder.Property(g => g.MinPlayersPerTeam)
            .IsRequired();

        builder.Property(g => g.MaxPlayersPerTeam)
            .IsRequired();

        builder.Property(g => g.MaxTeams)
            .IsRequired();

        builder.Property(g => g.Status)
            .IsRequired();

        builder.Property(g => g.CreatedAt)
            .IsRequired();

        builder.HasOne(g => g.City)
            .WithMany(c => c.Games)
            .HasForeignKey(g => g.CityId);

        builder.HasOne(g => g.Venue)
            .WithMany(v => v.Games)
            .HasForeignKey(g => g.VenueId);

        builder.HasMany(g => g.Registrations)
            .WithOne(r => r.Game)
            .HasForeignKey(r => r.GameId);
    }
}
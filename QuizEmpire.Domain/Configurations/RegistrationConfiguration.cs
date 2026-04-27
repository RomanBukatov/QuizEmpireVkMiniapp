using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuizEmpire.Domain.Entities;

namespace QuizEmpire.Domain.Configurations;

public class RegistrationConfiguration : IEntityTypeConfiguration<Registration>
{
    public void Configure(EntityTypeBuilder<Registration> builder)
    {
        builder.HasKey(r => r.Id);

        builder.Property(r => r.GameId)
            .IsRequired();

        builder.Property(r => r.CaptainId)
            .IsRequired();

        builder.Property(r => r.TeamName)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(r => r.PlayerCount)
            .IsRequired();

        builder.Property(r => r.TotalPrice)
            .HasPrecision(18, 2)
            .IsRequired();

        builder.Property(r => r.Status)
            .IsRequired();

        builder.Property(r => r.CreatedAt)
            .IsRequired();

        builder.HasOne(r => r.Game)
            .WithMany(g => g.Registrations)
            .HasForeignKey(r => r.GameId);

        builder.HasOne(r => r.Captain)
            .WithMany(u => u.Registrations)
            .HasForeignKey(r => r.CaptainId);
    }
}
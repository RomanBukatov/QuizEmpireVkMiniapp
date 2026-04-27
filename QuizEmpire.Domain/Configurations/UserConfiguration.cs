using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuizEmpire.Domain.Entities;

namespace QuizEmpire.Domain.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(u => u.Id);

        builder.Property(u => u.VkId)
            .HasMaxLength(50)
            .IsRequired();

        builder.Property(u => u.FirstName)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(u => u.LastName)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(u => u.Phone)
            .HasMaxLength(20);

        builder.Property(u => u.BonusBalance)
            .IsRequired();

        builder.Property(u => u.CreatedAt)
            .IsRequired();

        builder.HasMany(u => u.Registrations)
            .WithOne(r => r.Captain)
            .HasForeignKey(r => r.CaptainId);
    }
}
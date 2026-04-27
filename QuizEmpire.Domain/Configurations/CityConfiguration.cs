using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuizEmpire.Domain.Entities;

namespace QuizEmpire.Domain.Configurations;

public class CityConfiguration : IEntityTypeConfiguration<City>
{
    public void Configure(EntityTypeBuilder<City> builder)
    {
        builder.HasKey(c => c.Id);

        builder.Property(c => c.Name)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(c => c.IsActive)
            .IsRequired();

        builder.HasMany(c => c.Venues)
            .WithOne(v => v.City)
            .HasForeignKey(v => v.CityId);

        builder.HasMany(c => c.Games)
            .WithOne(g => g.City)
            .HasForeignKey(g => g.CityId);
    }
}
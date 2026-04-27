using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuizEmpire.Domain.Entities;

namespace QuizEmpire.Domain.Configurations;

public class VenueConfiguration : IEntityTypeConfiguration<Venue>
{
    public void Configure(EntityTypeBuilder<Venue> builder)
    {
        builder.HasKey(v => v.Id);

        builder.Property(v => v.CityId)
            .IsRequired();

        builder.Property(v => v.Name)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(v => v.Address)
            .HasMaxLength(200)
            .IsRequired();

        builder.Property(v => v.MapLink)
            .HasMaxLength(500);

        builder.HasOne(v => v.City)
            .WithMany(c => c.Venues)
            .HasForeignKey(v => v.CityId);

        builder.HasMany(v => v.Games)
            .WithOne(g => g.Venue)
            .HasForeignKey(g => g.VenueId);
    }
}
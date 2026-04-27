using Microsoft.EntityFrameworkCore;
using QuizEmpire.Domain.Entities;
using QuizEmpire.Domain.Configurations;

namespace QuizEmpire.Infrastructure;

public class AppDbContext : DbContext
{
    public DbSet<City> Cities { get; set; }
    public DbSet<Venue> Venues { get; set; }
    public DbSet<Game> Games { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Registration> Registrations { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(CityConfiguration).Assembly);
    }
}
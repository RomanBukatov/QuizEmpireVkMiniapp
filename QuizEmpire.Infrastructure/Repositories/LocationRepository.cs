using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using QuizEmpire.Domain.Entities;
using QuizEmpire.Domain.Interfaces;

namespace QuizEmpire.Infrastructure.Repositories
{
    public class LocationRepository : ILocationRepository
    {
        private readonly AppDbContext _context;

        public LocationRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<City>> GetActiveCitiesAsync()
        {
            return await _context.Cities
                .Where(c => c.IsActive)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<IEnumerable<Venue>> GetVenuesByCityIdAsync(int cityId)
        {
            return await _context.Venues
                .Where(v => v.CityId == cityId)
                .AsNoTracking()
                .ToListAsync();
        }
    }
}
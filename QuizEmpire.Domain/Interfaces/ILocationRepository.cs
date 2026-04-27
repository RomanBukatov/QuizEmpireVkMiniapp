using System.Collections.Generic;
using System.Threading.Tasks;
using QuizEmpire.Domain.Entities;

namespace QuizEmpire.Domain.Interfaces
{
    public interface ILocationRepository
    {
        Task<IEnumerable<City>> GetActiveCitiesAsync();
        Task<IEnumerable<Venue>> GetVenuesByCityIdAsync(int cityId);
    }
}
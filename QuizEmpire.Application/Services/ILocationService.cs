using System.Collections.Generic;
using System.Threading.Tasks;
using QuizEmpire.Application.DTOs;

namespace QuizEmpire.Application.Services
{
    public interface ILocationService
    {
        Task<IEnumerable<CityDto>> GetActiveCitiesAsync();
        Task<IEnumerable<VenueDto>> GetVenuesByCityIdAsync(int cityId);
    }
}
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuizEmpire.Application.DTOs;
using QuizEmpire.Domain.Interfaces;

namespace QuizEmpire.Application.Services
{
    public class LocationService : ILocationService
    {
        private readonly ILocationRepository _repository;

        public LocationService(ILocationRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<CityDto>> GetActiveCitiesAsync()
        {
            var cities = await _repository.GetActiveCitiesAsync();
            return cities.Select(c => new CityDto(c.Id, c.Name));
        }

        public async Task<IEnumerable<VenueDto>> GetVenuesByCityIdAsync(int cityId)
        {
            var venues = await _repository.GetVenuesByCityIdAsync(cityId);
            return venues.Select(v => new VenueDto(v.Id, v.Name, v.Address, v.MapLink));
        }
    }
}
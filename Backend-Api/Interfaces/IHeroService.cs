using Backend_Api.DTOs.Hero;

namespace Backend_Api.Interfaces
{
    public interface IHeroService
    {
        Task<IEnumerable<HeroSectionDto>> GetAllAsync();
        Task<HeroSectionDto?> GetByIdAsync(int id);
        Task<HeroSectionDto> CreateAsync(CreateHeroSectionDto dto);
        Task<HeroSectionDto?> UpdateAsync(int id, UpdateHeroSectionDto dto);
        Task<bool> DeleteAsync(int id);
    }
}

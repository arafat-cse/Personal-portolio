using Backend_Api.Data;
using Backend_Api.DTOs.Hero;
using Backend_Api.Interfaces;
using Backend_Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend_Api.Services
{
    public class HeroService : IHeroService
    {
        private readonly ApplicationDbContext _context;

        public HeroService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<HeroSectionDto>> GetAllAsync()
        {
            var heroes = await _context.HeroSections.ToListAsync();
            return heroes.Select(h => new HeroSectionDto
            {
                Id = h.Id,
                Greeting = h.Greeting,
                Name = h.Name,
                Title = h.Title,
                Description = h.Description
            });
        }

        public async Task<HeroSectionDto?> GetByIdAsync(int id)
        {
            var hero = await _context.HeroSections.FindAsync(id);
            if (hero == null) return null;

            return new HeroSectionDto
            {
                Id = hero.Id,
                Greeting = hero.Greeting,
                Name = hero.Name,
                Title = hero.Title,
                Description = hero.Description
            };
        }

        public async Task<HeroSectionDto> CreateAsync(CreateHeroSectionDto dto)
        {
            var hero = new HeroSection
            {
                Greeting = dto.Greeting,
                Name = dto.Name,
                Title = dto.Title,
                Description = dto.Description,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.HeroSections.Add(hero);
            await _context.SaveChangesAsync();

            return new HeroSectionDto
            {
                Id = hero.Id,
                Greeting = hero.Greeting,
                Name = hero.Name,
                Title = hero.Title,
                Description = hero.Description
            };
        }

        public async Task<HeroSectionDto?> UpdateAsync(int id, UpdateHeroSectionDto dto)
        {
            var hero = await _context.HeroSections.FindAsync(id);
            if (hero == null) return null;

            hero.Greeting = dto.Greeting;
            hero.Name = dto.Name;
            hero.Title = dto.Title;
            hero.Description = dto.Description;
            hero.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return new HeroSectionDto
            {
                Id = hero.Id,
                Greeting = hero.Greeting,
                Name = hero.Name,
                Title = hero.Title,
                Description = hero.Description
            };
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var hero = await _context.HeroSections.FindAsync(id);
            if (hero == null) return false;

            _context.HeroSections.Remove(hero);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}

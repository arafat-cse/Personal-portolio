using Backend_Api.Data;
using Backend_Api.DTOs.Hero;
using Backend_Api.Interfaces;
using Backend_Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;

namespace Backend_Api.Services
{
    public class HeroService : IHeroService
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _env;

        public HeroService(ApplicationDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
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
                Description = h.Description,
                ImageUrl = h.ImageUrl
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
                Description = hero.Description,
                ImageUrl = hero.ImageUrl
            };
        }

        public async Task<HeroSectionDto> CreateAsync(CreateHeroSectionDto dto)
        {
            string? imageUrl = null;
            if (dto.Image != null)
            {
                imageUrl = await SaveImage(dto.Image);
            }

            var hero = new HeroSection
            {
                Greeting = dto.Greeting,
                Name = dto.Name,
                Title = dto.Title,
                Description = dto.Description,
                ImageUrl = imageUrl,
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
                Description = hero.Description,
                ImageUrl = hero.ImageUrl
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

            if (dto.Image != null)
            {
                // Delete old image if exists? Optional, but good practice.
                if (!string.IsNullOrEmpty(hero.ImageUrl))
                {
                    var oldPath = Path.Combine(_env.WebRootPath, hero.ImageUrl.TrimStart('/'));
                    if (File.Exists(oldPath))
                    {
                        File.Delete(oldPath);
                    }
                }
                hero.ImageUrl = await SaveImage(dto.Image);
            }

            hero.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return new HeroSectionDto
            {
                Id = hero.Id,
                Greeting = hero.Greeting,
                Name = hero.Name,
                Title = hero.Title,
                Description = hero.Description,
                ImageUrl = hero.ImageUrl
            };
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var hero = await _context.HeroSections.FindAsync(id);
            if (hero == null) return false;

            if (!string.IsNullOrEmpty(hero.ImageUrl))
            {
                var oldPath = Path.Combine(_env.WebRootPath, hero.ImageUrl.TrimStart('/'));
                if (File.Exists(oldPath))
                {
                    File.Delete(oldPath);
                }
            }

            _context.HeroSections.Remove(hero);
            await _context.SaveChangesAsync();
            return true;
        }

        private async Task<string> SaveImage(IFormFile image)
        {
            var uploadsFolder = Path.Combine(_env.WebRootPath, "images", "hero");
            if (!Directory.Exists(uploadsFolder)) Directory.CreateDirectory(uploadsFolder);

            var uniqueFileName = Guid.NewGuid().ToString() + "_" + image.FileName;
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(fileStream);
            }

            return "images/hero/" + uniqueFileName;
        }
    }
}

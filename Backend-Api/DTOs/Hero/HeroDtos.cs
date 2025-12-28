using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace Backend_Api.DTOs.Hero
{
    public class HeroSectionDto
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Greeting is required")]
        [MaxLength(100)]
        public string Greeting { get; set; } = string.Empty;

        [Required(ErrorMessage = "Name is required")]
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Title is required")]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required(ErrorMessage = "Description is required")]
        [MaxLength(1000)]
        public string Description { get; set; } = string.Empty;

        public string? ImageUrl { get; set; }
    }

    public class CreateHeroSectionDto
    {
        [Required(ErrorMessage = "Greeting is required")]
        [MaxLength(100)]
        public string Greeting { get; set; } = string.Empty;

        [Required(ErrorMessage = "Name is required")]
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Title is required")]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required(ErrorMessage = "Description is required")]
        [MaxLength(1000)]
        public string Description { get; set; } = string.Empty;

        public IFormFile? Image { get; set; }
    }

    public class UpdateHeroSectionDto
    {
        [Required(ErrorMessage = "Greeting is required")]
        [MaxLength(100)]
        public string Greeting { get; set; } = string.Empty;

        [Required(ErrorMessage = "Name is required")]
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Title is required")]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required(ErrorMessage = "Description is required")]
        [MaxLength(1000)]
        public string Description { get; set; } = string.Empty;

        public IFormFile? Image { get; set; }
    }
}

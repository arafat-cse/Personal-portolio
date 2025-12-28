using System.ComponentModel.DataAnnotations;

namespace Backend_Api.Models
{
    public class HeroSection
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Greeting { get; set; } = string.Empty;

        [Required]
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MaxLength(1000)]
        public string Description { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}

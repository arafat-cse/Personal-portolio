namespace Portfolio.API.Models
{
    public class Skill
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty; // Frontend, Backend, Tools
        public int Proficiency { get; set; }
    }

    public class Project
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public List<string> Technologies { get; set; } = new List<string>();
        public string? DemoUrl { get; set; }
        public string? GithubUrl { get; set; }
    }

    public class Experience
    {
        public int Id { get; set; }
        public string Role { get; set; } = string.Empty;
        public string Company { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public List<string> Description { get; set; } = new List<string>();
        public List<string> Technologies { get; set; } = new List<string>();
    }

    public class Certificate
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Issuer { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public string CredentialUrl { get; set; } = string.Empty;
        public string? ImageUrl { get; set; }
    }

    public class ContactMessage
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
        public DateTime SentAt { get; set; } = DateTime.UtcNow;
    }
}

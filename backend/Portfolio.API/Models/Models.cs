namespace Portfolio.API.Models
{
    public class Skill
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty; // Frontend, Backend, Tools
        public int Proficiency { get; set; } // 0-100
    }

    public class Project
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public List<string> Technologies { get; set; } = new List<string>();
        public string DemoUrl { get; set; } = string.Empty;
        public string GithubUrl { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
    }

    public class Experience
    {
        public int Id { get; set; }
        public string Role { get; set; } = string.Empty;
        public string Company { get; set; } = string.Empty;
        public string Duration { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<string> Technologies { get; set; } = new List<string>();
    }

    public class Certificate
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Issuer { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public string VerifyUrl { get; set; } = string.Empty;
    }

    public class ContactMessage
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
    }

    public class Profile
    {
        public string Name { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Bio { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public string Greeting { get; set; } = string.Empty;
        public string HeroDescription { get; set; } = string.Empty;
    }
}

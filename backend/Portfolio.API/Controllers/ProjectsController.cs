using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Models;

namespace Portfolio.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private static List<Project> _projects = new List<Project>
        {
            new Project 
            { 
                Id = 1, 
                Title = "E-Commerce Platform", 
                Description = "A full-featured e-commerce solution with product management, shopping cart, and secure checkout.", 
                ImageUrl = "https://placehold.co/600x400/4F46E5/FFFFFF/png?text=E-Commerce", 
                Technologies = new List<string> { "Angular", "ASP.NET Core", "SQL Server" },
                DemoUrl = "https://ecommerce.example.com",
                GithubUrl = "https://github.com/username/ecommerce",
                Category = "Website"
            },
            new Project 
            { 
                Id = 2, 
                Title = "Task Master App", 
                Description = "A productivity mobile application for managing daily tasks and team collaboration.", 
                ImageUrl = "https://placehold.co/600x400/10B981/FFFFFF/png?text=Task+Master", 
                Technologies = new List<string> { "React Native", "Node.js", "MongoDB" },
                GithubUrl = "https://github.com/username/task-master",
                Category = "Mobile"
            },
            new Project 
            { 
                Id = 3, 
                Title = "Corporate CRM", 
                Description = "Customer Relationship Management system for tracking leads and sales pipelines.", 
                ImageUrl = "https://placehold.co/600x400/F59E0B/FFFFFF/png?text=CRM+System", 
                Technologies = new List<string> { "Laravel", "Vue.js", "MySQL" },
                DemoUrl = "https://crm.example.com",
                Category = "Website"
            },
            new Project 
            { 
                Id = 4, 
                Title = "Social Connect", 
                Description = "Real-time social networking platform with chat and media sharing capabilities.", 
                ImageUrl = "https://placehold.co/600x400/EC4899/FFFFFF/png?text=Social+App", 
                Technologies = new List<string> { "React.js", "Firebase", "Tailwind CSS" },
                GithubUrl = "https://github.com/username/social-connect",
                DemoUrl = "https://social.example.com",
                Category = "Website"
            },
            new Project 
            { 
                Id = 5, 
                Title = "Fitness Tracker", 
                Description = "Mobile app for tracking workouts, nutrition, and personal health goals.", 
                ImageUrl = "https://placehold.co/600x400/8B5CF6/FFFFFF/png?text=Fitness+App", 
                Technologies = new List<string> { "React Native", "Redux", "Express.js" },
                GithubUrl = "https://github.com/username/fitness-tracker",
                Category = "Mobile"
            },
            new Project 
            { 
                Id = 6, 
                Title = "Server Management Tool", 
                Description = "Web-based dashboard for monitoring and managing VPS instances.", 
                ImageUrl = "https://placehold.co/600x400/6366F1/FFFFFF/png?text=VPS+Manager", 
                Technologies = new List<string> { "Angular", "Node.js", "Docker" },
                GithubUrl = "https://github.com/username/vps-manager",
                Category = "Website"
            }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Project>> GetProjects()
        {
            return Ok(_projects);
        }

        [HttpGet("{id}")]
        public ActionResult<Project> GetProject(int id)
        {
            var project = _projects.FirstOrDefault(p => p.Id == id);
            if (project == null) return NotFound();
            return Ok(project);
        }

        [HttpPost]
        public ActionResult<Project> AddProject(Project project)
        {
            project.Id = _projects.Max(p => p.Id) + 1;
            _projects.Add(project);
            return CreatedAtAction(nameof(GetProject), new { id = project.Id }, project);
        }
    }
}

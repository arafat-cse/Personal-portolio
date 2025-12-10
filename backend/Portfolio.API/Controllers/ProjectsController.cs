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
                Title = "E-Commerce", 
                Description = "Online Store", 
                ImageUrl = "url", 
                Technologies = new List<string> { "Angular", ".NET" } 
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

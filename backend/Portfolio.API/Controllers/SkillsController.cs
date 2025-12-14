using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Models;

namespace Portfolio.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillsController : ControllerBase
    {
        private static List<Skill> _skills = new List<Skill>
        {
            new Skill { Id = 1, Name = "Angular", Category = "Frontend", Proficiency = 90 },
            new Skill { Id = 2, Name = "React.js", Category = "Frontend", Proficiency = 85 },
            new Skill { Id = 3, Name = "ASP.NET", Category = "Backend", Proficiency = 85 },
            new Skill { Id = 4, Name = "C#", Category = "Backend", Proficiency = 90 },
            new Skill { Id = 5, Name = "Node.js", Category = "Backend", Proficiency = 80 },
            new Skill { Id = 6, Name = "Laravel", Category = "Backend", Proficiency = 75 },
            new Skill { Id = 7, Name = "VPS Server", Category = "Tools", Proficiency = 70 }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Skill>> GetSkills()
        {
            return Ok(_skills);
        }

        [HttpPost]
        public ActionResult<Skill> AddSkill(Skill skill)
        {
            skill.Id = _skills.Max(s => s.Id) + 1;
            _skills.Add(skill);
            return CreatedAtAction(nameof(GetSkills), new { id = skill.Id }, skill);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateSkill(int id, Skill skill)
        {
            var existingSkill = _skills.FirstOrDefault(s => s.Id == id);
            if (existingSkill == null) return NotFound();

            existingSkill.Name = skill.Name;
            existingSkill.Category = skill.Category;
            existingSkill.Proficiency = skill.Proficiency;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSkill(int id)
        {
            var skill = _skills.FirstOrDefault(s => s.Id == id);
            if (skill == null) return NotFound();

            _skills.Remove(skill);
            return NoContent();
        }
    }
}

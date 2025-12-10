using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Models;

namespace Portfolio.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        // Mock data storage (replace with database)
        private static Profile _profile = new Profile
        {
            Name = "Md. Shahriar",
            Title = "Full Stack Developer",
            Bio = "Passionate developer with expertise in Angular and .NET Core.",
            Email = "shakif@admin.com",
            Location = "Dhaka, Bangladesh",
            Greeting = "Hi, I'm",
            HeroDescription = "I build scalable and high-performance web applications."
        };

        [HttpGet]
        public ActionResult<Profile> GetProfile()
        {
            return Ok(_profile);
        }

        [HttpPost]
        public ActionResult<Profile> UpdateProfile([FromBody] Profile profile)
        {
            _profile = profile;
            return Ok(_profile);
        }

        [HttpGet("hero")]
        public ActionResult<object> GetHero()
        {
            return Ok(new { 
                _profile.Greeting, 
                _profile.Name, 
                _profile.Title, 
                Description = _profile.HeroDescription 
            });
        }
        
        [HttpPost("hero")]
        public ActionResult UpdateHero([FromBody] dynamic heroData)
        {
             // In a real app, map this properly
             _profile.Greeting = heroData.GetProperty("greeting").GetString();
             _profile.Name = heroData.GetProperty("name").GetString();
             _profile.Title = heroData.GetProperty("title").GetString();
             _profile.HeroDescription = heroData.GetProperty("description").GetString();
             
             return Ok(new { message = "Hero updated successfully" });
        }
    }
}

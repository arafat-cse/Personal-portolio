using Microsoft.AspNetCore.Mvc;

namespace Portfolio.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProfile()
        {
            var profile = new
            {
                Name = "Developer Name",
                Title = "Full Stack Developer",
                Bio = "Passionate developer with expertise in Angular and .NET.",
                Email = "dev@example.com"
            };
            return Ok(profile);
        }
    }
}

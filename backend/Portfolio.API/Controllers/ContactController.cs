using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Models;

namespace Portfolio.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        [HttpPost]
        public IActionResult SendMessage(ContactMessage message)
        {
            // In a real app, save to DB and send email
            Console.WriteLine($"Message from {message.Name}: {message.Subject}");
            return Ok(new { message = "Message sent successfully" });
        }
    }
}

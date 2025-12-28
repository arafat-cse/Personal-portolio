using Backend_Api.DTOs.Hero;
using Backend_Api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeroController : ControllerBase
    {
        private readonly IHeroService _heroService;

        public HeroController(IHeroService heroService)
        {
            _heroService = heroService;
        }

        // GET: api/Hero
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HeroSectionDto>>> GetAll()
        {
            var heroes = await _heroService.GetAllAsync();
            return Ok(heroes);
        }

        // GET: api/Hero/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HeroSectionDto>> GetById(int id)
        {
            var hero = await _heroService.GetByIdAsync(id);
            if (hero == null)
            {
                return NotFound(new { Message = $"Hero section with ID {id} not found" });
            }
            return Ok(hero);
        }

        // POST: api/Hero
        [HttpPost]
        [Authorize] // Requires authentication
        public async Task<ActionResult<HeroSectionDto>> Create([FromForm] CreateHeroSectionDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var hero = await _heroService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id = hero.Id }, hero);
        }

        // PUT: api/Hero/5
        [HttpPut("{id}")]
        [Authorize] // Requires authentication
        public async Task<ActionResult<HeroSectionDto>> Update(int id, [FromForm] UpdateHeroSectionDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var hero = await _heroService.UpdateAsync(id, dto);
            if (hero == null)
            {
                return NotFound(new { Message = $"Hero section with ID {id} not found" });
            }

            return Ok(hero);
        }

        // PATCH: api/Hero/5
        [HttpPatch("{id}")]
        [Authorize] // Requires authentication
        public async Task<ActionResult<HeroSectionDto>> Patch(int id, [FromForm] UpdateHeroSectionDto dto)
        {
            // For simplicity, PATCH uses the same logic as PUT
            // In a more complex scenario, you might want to handle partial updates differently
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var hero = await _heroService.UpdateAsync(id, dto);
            if (hero == null)
            {
                return NotFound(new { Message = $"Hero section with ID {id} not found" });
            }

            return Ok(hero);
        }

        // DELETE: api/Hero/5
        [HttpDelete("{id}")]
        [Authorize] // Requires authentication
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _heroService.DeleteAsync(id);
            if (!result)
            {
                return NotFound(new { Message = $"Hero section with ID {id} not found" });
            }

            return NoContent();
        }
    }
}

using Backend_Api.DTOs.Auth;
using Microsoft.AspNetCore.Identity;

namespace Backend_Api.Interfaces
{
    public interface IAuthService
    {
        Task<string?> LoginAsync(LoginDto model);
        Task<IdentityResult> RegisterAsync(RegisterDto model);
    }
}

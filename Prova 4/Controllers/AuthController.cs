using Prova_4.Models;
using Prova_4.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Prova_4.Data;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace Prova_4.Controllers
{   
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly Settings _appSettings;
        private readonly IdDbContext _context;

        public AuthController(SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager, IOptions<Settings> appSettings, IdDbContext context)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _appSettings = appSettings.Value;
            _context = context;
        }

        [HttpPost("Registrar")]
        public async Task<ActionResult> Registrar(Auth registerUser)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState.Values.SelectMany(e => e.Errors));

            var user = new IdentityUser
            {
                UserName = registerUser.Email,
                Email = registerUser.Email,
                EmailConfirmed = true
            };

            var result = await _userManager.CreateAsync(user, registerUser.Password);

            if (!result.Succeeded) return BadRequest(result.Errors);

            await _signInManager.SignInAsync(user, false);

            var user2 = await _userManager.FindByEmailAsync(registerUser.Email);
            var user3 = new User
            {
                Email = registerUser.Email,
                Password = registerUser.Password,
                User_ = user2
            };
            _context.Users.Add(user3);
            await _context.SaveChangesAsync();

            return Ok(await GerarJwt(registerUser.Email) + "," + user3.IdUser);
        }
        [HttpPost("Login")]
        public async Task<ActionResult> Login(Auth loginUser)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState.Values.SelectMany(e => e.Errors));

            var result = await _signInManager.PasswordSignInAsync(loginUser.Email, loginUser.Password, false, true);

            if (result.Succeeded)
            {
                var user2 = await _userManager.FindByEmailAsync(loginUser.Email);
                var list = await _context.Users.ToListAsync();
                var user = new User();

                foreach (var item in list)
                {
                    if(user2 == item.User_)
                    {
                        user.IdUser = item.IdUser;
                    }
                }
                return Ok(await GerarJwt(loginUser.Email) + "," + user.IdUser);
            }

            return BadRequest("Credenciais inválidas ou não registrado");
        }
        [HttpPost("Logout")]
        public async Task<ActionResult> Logout()
        {
            try
            {
                await _signInManager.SignOutAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

            return Ok();
        }

        private async Task<string> GerarJwt(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Issuer = _appSettings.Emissor,
                Audience = _appSettings.ValidoEm,
                Expires = DateTime.UtcNow.AddHours(_appSettings.ExpirationTime),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)

            };

            return tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
        }
    }
}

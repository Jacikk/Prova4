using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Prova_4.Models
{
    public class Auth
    {
        private string email, password;
        [Required]
        [EmailAddress]
        public string Email { get => email; set => email = value; }
        [Required]
        public string Password { get => password; set => password = value; }
    }
}

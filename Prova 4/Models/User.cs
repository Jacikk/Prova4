using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Prova_4.Models
{
    public class User
    {
        private int idUser;
        private string email, password;

        private IdentityUser user_;
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdUser { get => idUser; set => idUser = value; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [EmailAddress]
        public string Email { get => email; set => email = value; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Password { get => password; set => password = value; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [Key]
        public IdentityUser User_ { get => user_; set => user_ = value; }
    }
}

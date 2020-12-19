using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Prova_4.Models
{
    public class Contact
    {
        private int idContact;
        private string name, email, cellphone;
        private User user_;

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdContact { get => idContact; set => idContact = value; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Name { get => name; set => name = value; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [EmailAddress]
        public string Email { get => email; set => email = value; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Cellphone { get => cellphone; set => cellphone = value; }
        [Required]
        public User User_idUser { get => user_; set => user_ = value; }
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Prova_4.Models;

namespace Prova_4.Data
{
    public class IdDbContext : IdentityDbContext
    {
        public IdDbContext (DbContextOptions<IdDbContext>options) : base (options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Contact> Contacts { get; set; }
    }
}

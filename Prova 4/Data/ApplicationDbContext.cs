
using Microsoft.EntityFrameworkCore;
using Prova_4.Models;

namespace Prova_4.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        
    }
}

using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Entities
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options) { }
        public DatabaseContext() { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}

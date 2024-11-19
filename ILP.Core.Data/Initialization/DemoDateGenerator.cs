using ILP.Core.Data.Entities;
using ILP.Core.Data.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Initialization
{
    public class DemoDateGenerator(DbContextOptions<DatabaseContext> dbContextOptions)
    {
        private readonly DbContextOptions<DatabaseContext> DbContextOptions = dbContextOptions;

        public void GenerateDemoData()
        {
            using var dbContext = new DatabaseContext(DbContextOptions);

            var demoUser = new User()
            {
                Id = "DemoUser",
                FirstName = "DemoName",
                LastName = "DemoSecondName",
                FatherName = "DemoFatherName",
            };

            var demoGroup = new Group()
            {
                Id = "DemoGroupId",
                Name = "DemoGroup"
            };


            dbContext.Database.EnsureDeleted();
            dbContext.Database.EnsureCreated();

            var fellow = new Fellow() { Group = demoGroup, Id = "DemoFellow", Role = Role.Admin, User = demoUser};
            demoUser.Fellows.Add(fellow);

            demoGroup.Fellows.Add(fellow);

            dbContext.Groups.Add(demoGroup);
            dbContext.Users.Add(demoUser);

            dbContext.SaveChanges();
        }
    }
}

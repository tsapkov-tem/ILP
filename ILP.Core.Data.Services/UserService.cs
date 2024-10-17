using ILP.Core.Data.Contracts.Services;
using ILP.Core.Data.Entities;
using ILP.Core.Data.Entities.Models;
using ILP.Core.Data.Repositories;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Services
{
    public class UserService : BaseService<User>, IUserService
    {
        public UserService(DbContextOptions<DatabaseContext> dbContextOptions) 
            : base(dbContextOptions, new UserRepository(new DatabaseContext(dbContextOptions)))
        {
        }
    }
}

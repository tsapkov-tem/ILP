using ILP.Core.Data.Contracts.Services;
using ILP.Core.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Services
{
    public class ServiceManager : IServiceManager
    {
        public IUserService UserService => new UserService(_dbContextOptions);
        public IGroupService GroupService => new GroupService(_dbContextOptions);

        private readonly DbContextOptions<DatabaseContext> _dbContextOptions;
        public ServiceManager(DbContextOptions<DatabaseContext> dbContextOptions)
        {
            _dbContextOptions = dbContextOptions;
        }
    }
}

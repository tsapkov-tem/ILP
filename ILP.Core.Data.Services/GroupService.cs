using ILP.Core.Data.Contracts.Services;
using ILP.Core.Data.Entities;
using ILP.Core.Data.Entities.Models;
using ILP.Core.Data.Repositories;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Services
{
    public class GroupService : BaseService<Group>, IGroupService
    {
        public GroupService(DbContextOptions<DatabaseContext> dbContextOptions) 
            : base(dbContextOptions, new GroupRepository(new DatabaseContext(dbContextOptions)))
        {
        }
    }
}

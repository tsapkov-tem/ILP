﻿using ILP.Core.Data.Contracts.Services;
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

        

        public IEnumerable<Group> GetAllByUserId(string userId)
        {
            try
            {
                using var dbContext = new DatabaseContext(DbContextOptions);
                var repository = new GroupRepository(dbContext);
                return repository.GetAllWithIncludedEntities().Where(x => x.Fellows!.Any(x => x.UserId == userId));
            }catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw new Exception($"Error on querying database: {ex.Message}");
            }
        }
    }
}

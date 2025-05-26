using ILP.Core.Data.Contracts.Repositories;
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

        public IQueryable<User> GetAllByGroupId(string groupId)
        {
            try
            {
                using var dbContext = new DatabaseContext(DbContextOptions);
                var repository = new UserRepository(dbContext);

                return repository.GetAllWithIncludedEntities().Include(x => x.Groups).Where(x => x.Groups!.Any(x => x.Id == groupId));
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw new Exception($"Error on querying database: {ex.Message}");
            }
        }

        public new User GetByIdWithIncludedEntities(string id)
        {
            try
            {
                using var dbContext = new DatabaseContext(DbContextOptions);
                var repository = new UserRepository(dbContext);

                var result = repository.GetByIdWithIncludedEntities(id);
                if (result == null)
                    throw new Exception($"{typeof(User)} not found in database");
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw new Exception($"Error on querying database: {ex.Message}");
            }
        }
    }
}

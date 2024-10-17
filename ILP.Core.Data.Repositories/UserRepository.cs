using ILP.Core.Data.Contracts.Repositories;
using ILP.Core.Data.Entities;
using ILP.Core.Data.Entities.Models;

namespace ILP.Core.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DatabaseContext DatabaseContext;

        public UserRepository(DatabaseContext databaseContext)
        {
            DatabaseContext = databaseContext;
        }

        public int Create(User entity)
        {
            DatabaseContext.Users.Add(entity);
            return DatabaseContext.SaveChanges();
        }

        public int Delete(string id)
        {
            var entity = DatabaseContext.Users.FirstOrDefault(x => x.Id == id);
            if (entity == null)
                throw new Exception($"The user with id {id} wasn't found");

            DatabaseContext.Users.Remove(entity);
            return DatabaseContext.SaveChanges();
        }

        public User? GetById(string id)
        {
            return DatabaseContext.Users.FirstOrDefault(x => x.Id == id);
        }

        public User? GetByIdWithIncludedEntities(string id)
        {
            return DatabaseContext.Users.FirstOrDefault(x => x.Id == id);
        }

        public int Update(User entity)
        {
            DatabaseContext.Users.Update(entity);
            return DatabaseContext.SaveChanges();
        }
    }
}

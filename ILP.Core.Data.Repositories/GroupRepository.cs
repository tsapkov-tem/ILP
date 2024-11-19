using ILP.Core.Data.Contracts.Repositories;
using ILP.Core.Data.Entities;
using ILP.Core.Data.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Repositories
{
    public class GroupRepository : IGroupRepository
    {
        private readonly DatabaseContext DatabaseContext;

        public GroupRepository(DatabaseContext databaseContext)
        {
            DatabaseContext = databaseContext;
        }

        public int Create(Group entity)
        {
            DatabaseContext.Groups.Add(entity);
            return DatabaseContext.SaveChanges();
        }

        public int Delete(string id)
        {
            var entity = DatabaseContext.Groups.FirstOrDefault(x => x.Id == id);
            if (entity == null)
                throw new Exception($"The user with id {id} wasn't found");

            DatabaseContext.Groups.Remove(entity);
            return DatabaseContext.SaveChanges();
        }

        public IQueryable<Group> GetAll()
        {
            return DatabaseContext.Groups.AsNoTracking();
        }

        public Group? GetById(string id)
        {
            return DatabaseContext.Groups.FirstOrDefault(x => x.Id == id);
        }

        public Group? GetByIdWithIncludedEntities(string id)
        {
            return DatabaseContext.Groups.Include(x => x.Fellows).FirstOrDefault(i => i.Id == id);
        }

        public int Update(Group entity)
        {
            DatabaseContext.Groups.Update(entity);
            return DatabaseContext.SaveChanges();
        }

        public IQueryable<Group> GetAllWithIncludedEntities()
        {
            return DatabaseContext.Groups.Include(x => x.Users).AsNoTracking();
        }
    }
}

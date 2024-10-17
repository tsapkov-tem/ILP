using ILP.Core.Data.Contracts.Repositories;
using ILP.Core.Data.Entities;
using ILP.Core.Data.Entities.Models;

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

        public Group? GetById(string id)
        {
            return DatabaseContext.Groups.FirstOrDefault(x => x.Id == id);
        }

        public Group? GetByIdWithIncludedEntities(string id)
        {
            return DatabaseContext.Groups.FirstOrDefault(x => x.Id == id);
        }

        public int Update(Group entity)
        {
            DatabaseContext.Groups.Update(entity);
            return DatabaseContext.SaveChanges();
        }
    }
}

using ILP.Core.Data.Contracts.Repositories;
using ILP.Core.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Repositories
{
    internal class TaskRepository(DatabaseContext databaseContext) : ITaskRepository
    {
        private readonly DatabaseContext DatabaseContext = databaseContext;
        public int Create(Entities.Models.Task entity)
        {
            DatabaseContext.Tasks.Add(entity);
            return DatabaseContext.SaveChanges();
        }

        public int Delete(string id)
        {
            var entity = DatabaseContext.Tasks.FirstOrDefault(x => x.Id == id);
            if (entity == null)
                throw new Exception($"The lecture with id {id} wasn't found");

            DatabaseContext.Tasks.Remove(entity);
            return DatabaseContext.SaveChanges();
        }

        public IQueryable<Entities.Models.Task> GetAll()
        {
            return DatabaseContext.Tasks.AsNoTracking();
        }

        public IQueryable<Entities.Models.Task> GetAllWithIncludedEntities() //TODO:
        {
            throw new NotImplementedException();
        }

        public Entities.Models.Task? GetById(string id)
        {
            return DatabaseContext.Tasks.FirstOrDefault(x => x.Id == id);
        }

        public Entities.Models.Task? GetByIdWithIncludedEntities(string id) //TODO:
        {
            throw new NotImplementedException();
        }

        public int Update(Entities.Models.Task entity)
        {
            DatabaseContext.Tasks.Update(entity);
            return DatabaseContext.SaveChanges();
        }
    }
}

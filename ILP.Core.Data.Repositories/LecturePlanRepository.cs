using ILP.Core.Data.Contracts.Repositories;
using ILP.Core.Data.Entities.Models;
using ILP.Core.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Repositories
{
    public class LecturePlanRepository(DatabaseContext databaseContext) : ILecturePlanRepository
    {
        private readonly DatabaseContext DatabaseContext = databaseContext;
        public int Create(LecturePlan entity)
        {
            DatabaseContext.LecturePlans.Add(entity);
            return DatabaseContext.SaveChanges();
        }

        public int Delete(string id)
        {
            var entity = DatabaseContext.LecturePlans.FirstOrDefault(x => x.Id == id);
            if (entity == null)
                throw new Exception($"The lecture plan with id {id} wasn't found");

            DatabaseContext.LecturePlans.Remove(entity);
            return DatabaseContext.SaveChanges();
        }

        public IQueryable<LecturePlan> GetAll()
        {
            return DatabaseContext.LecturePlans.AsNoTracking();
        }

        public IQueryable<LecturePlan> GetAllWithIncludedEntities() //TODO:
        {
            throw new NotImplementedException();
        }

        public LecturePlan? GetById(string id)
        {
            return DatabaseContext.LecturePlans.FirstOrDefault(x => x.Id == id);
        }

        public LecturePlan? GetByIdWithIncludedEntities(string id) //TODO:
        {
            throw new NotImplementedException();
        }

        public int Update(LecturePlan entity)
        {
            DatabaseContext.LecturePlans.Update(entity);
            return DatabaseContext.SaveChanges();
        }
    }
}

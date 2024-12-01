using ILP.Core.Data.Contracts.Repositories;
using ILP.Core.Data.Entities.Models;
using ILP.Core.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Repositories
{
    public class LectureRepository(DatabaseContext databaseContext) : ILectureRepository
    {
        private readonly DatabaseContext DatabaseContext = databaseContext;
        public int Create(Lecture entity)
        {
            DatabaseContext.Lectures.Add(entity);
            return DatabaseContext.SaveChanges();
        }

        public int Delete(string id)
        {
            var entity = DatabaseContext.Lectures.FirstOrDefault(x => x.Id == id);
            if (entity == null)
                throw new Exception($"The lecture with id {id} wasn't found");

            DatabaseContext.Lectures.Remove(entity);
            return DatabaseContext.SaveChanges();
        }

        public IQueryable<Lecture> GetAll()
        {
            return DatabaseContext.Lectures.AsNoTracking();
        }

        public IQueryable<Lecture> GetAllWithIncludedEntities() //TODO:
        {
            throw new NotImplementedException();
        }

        public Lecture? GetById(string id)
        {
            return DatabaseContext.Lectures.FirstOrDefault(x => x.Id == id);
        }

        public Lecture? GetByIdWithIncludedEntities(string id) //TODO:
        {
            throw new NotImplementedException();
        }

        public int Update(Lecture entity)
        {
            DatabaseContext.Lectures.Update(entity);
            return DatabaseContext.SaveChanges();
        }
    }
}

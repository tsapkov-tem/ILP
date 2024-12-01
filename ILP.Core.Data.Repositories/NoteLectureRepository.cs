using ILP.Core.Data.Contracts.Repositories;
using ILP.Core.Data.Entities.Models;
using ILP.Core.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Repositories
{
    internal class NoteLectureRepository(DatabaseContext databaseContext) : INoteLectureRepository
    {
        private readonly DatabaseContext DatabaseContext = databaseContext;
        public int Create(NoteLecture entity)
        {
            DatabaseContext.NoteLectures.Add(entity);
            return DatabaseContext.SaveChanges();
        }

        public int Delete(string id)
        {
            var entity = DatabaseContext.NoteLectures.FirstOrDefault(x => x.Id == id);
            if (entity == null)
                throw new Exception($"The lecture with id {id} wasn't found");

            DatabaseContext.NoteLectures.Remove(entity);
            return DatabaseContext.SaveChanges();
        }

        public IQueryable<NoteLecture> GetAll()
        {
            return DatabaseContext.NoteLectures.AsNoTracking();
        }

        public IQueryable<NoteLecture> GetAllWithIncludedEntities() //TODO:
        {
            throw new NotImplementedException();
        }

        public NoteLecture? GetById(string id)
        {
            return DatabaseContext.NoteLectures.FirstOrDefault(x => x.Id == id);
        }

        public NoteLecture? GetByIdWithIncludedEntities(string id) //TODO:
        {
            throw new NotImplementedException();
        }

        public int Update(NoteLecture entity)
        {
            DatabaseContext.NoteLectures.Update(entity);
            return DatabaseContext.SaveChanges();
        }
    }
}

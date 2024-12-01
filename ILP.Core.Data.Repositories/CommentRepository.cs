using ILP.Core.Data.Contracts.Repositories;
using ILP.Core.Data.Entities;
using ILP.Core.Data.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Repositories
{
    public class CommentRepository(DatabaseContext databaseContext) : ICommentRepository
    {
        private readonly DatabaseContext DatabaseContext = databaseContext;
        public int Create(Comment entity)
        {
            DatabaseContext.Comments.Add(entity);
            return DatabaseContext.SaveChanges();
        }

        public int Delete(string id)
        {
            var entity = DatabaseContext.Comments.FirstOrDefault(x =>  x.Id == id);
            if (entity == null)
                throw new Exception($"The comment with id {id} wasn't found");

            DatabaseContext.Comments.Remove(entity);
            return DatabaseContext.SaveChanges();
        }

        public IQueryable<Comment> GetAll()
        {
            return DatabaseContext.Comments.AsNoTracking();
        }

        public IQueryable<Comment> GetAllWithIncludedEntities() //TODO:
        {
            throw new NotImplementedException();
        }

        public Comment? GetById(string id)
        {
            return DatabaseContext.Comments.FirstOrDefault(x => x.Id == id);
        }

        public Comment? GetByIdWithIncludedEntities(string id) //TODO:
        {
            throw new NotImplementedException();
        }

        public int Update(Comment entity)
        {
            DatabaseContext.Comments.Update(entity);
            return DatabaseContext.SaveChanges();
        }
    }
}

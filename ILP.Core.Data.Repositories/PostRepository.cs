using ILP.Core.Data.Contracts.Repositories;
using ILP.Core.Data.Entities.Models;
using ILP.Core.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Repositories
{
    internal class PostRepository(DatabaseContext databaseContext) : IPostRepository
    {
        private readonly DatabaseContext DatabaseContext = databaseContext;
        public int Create(Post entity)
        {
            DatabaseContext.Posts.Add(entity);
            return DatabaseContext.SaveChanges();
        }

        public int Delete(string id)
        {
            var entity = DatabaseContext.Posts.FirstOrDefault(x => x.Id == id);
            if (entity == null)
                throw new Exception($"The lecture with id {id} wasn't found");

            DatabaseContext.Posts.Remove(entity);
            return DatabaseContext.SaveChanges();
        }

        public IQueryable<Post> GetAll()
        {
            return DatabaseContext.Posts.AsNoTracking();
        }

        public IQueryable<Post> GetAllWithIncludedEntities() //TODO:
        {
            throw new NotImplementedException();
        }

        public Post? GetById(string id)
        {
            return DatabaseContext.Posts.FirstOrDefault(x => x.Id == id);
        }

        public Post? GetByIdWithIncludedEntities(string id) //TODO:
        {
            throw new NotImplementedException();
        }

        public int Update(Post entity)
        {
            DatabaseContext.Posts.Update(entity);
            return DatabaseContext.SaveChanges();
        }
    }
}

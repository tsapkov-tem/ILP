﻿using ILP.Core.Data.Contracts.Repositories;
using ILP.Core.Data.Entities;
using ILP.Core.Data.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Repositories
{
    public class UserRepository(DatabaseContext databaseContext) : IUserRepository
    {
        private readonly DatabaseContext DatabaseContext = databaseContext;

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

        public IQueryable<User> GetAll()
        {
            return DatabaseContext.Users.AsNoTracking();
        }

        public IQueryable<User> GetAllWithIncludedEntities()
        {
            return DatabaseContext.Users.Include(x => x.Groups).AsNoTracking();
        }

        public User? GetById(string id)
        {
            return DatabaseContext.Users.FirstOrDefault(x => x.Id == id);
        }

        public User? GetByIdWithIncludedEntities(string id)
        {
            return DatabaseContext.Users.Include(x => x.Groups).FirstOrDefault(x => x.Id == id);
        }

        public int Update(User entity)
        {
            DatabaseContext.Users.Update(entity);
            return DatabaseContext.SaveChanges();
        }
    }
}

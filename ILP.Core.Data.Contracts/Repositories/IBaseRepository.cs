﻿using ILP.Core.Data.Entities.Models;

namespace ILP.Core.Data.Contracts.Repositories
{
    public interface IBaseRepository<T> where T : IEntity
    {
        public T? GetById(string id);
        public T? GetByIdWithIncludedEntities(string id);
        public int Create(T entity);
        public int Update(T entity);
        public int Delete(string id);
    }
}
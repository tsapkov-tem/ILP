using ILP.Core.Data.Contracts.Repositories;
using ILP.Core.Data.Contracts.Services;
using ILP.Core.Data.Entities;
using ILP.Core.Data.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Services
{
    public abstract class BaseService<TEntity> : IBaseService<TEntity>
        where TEntity : class, IEntity
    {
        protected readonly DbContextOptions<DatabaseContext> DbContextOptions;
        private readonly IBaseRepository<TEntity> _baseRepository;

        protected BaseService(DbContextOptions<DatabaseContext> dbContextOptions, IBaseRepository<TEntity> baseRepository)
        {
            DbContextOptions = dbContextOptions;
            _baseRepository = baseRepository;
        }

        public TEntity Create(TEntity entity)
        {
            try
            {
                using var dbContext = new DatabaseContext(DbContextOptions);

                var result = _baseRepository.Create(entity);
                if (result == 0)
                    throw new Exception($"Unable to create {typeof(TEntity)} in database.");
                return entity;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                throw new Exception($"Error during database update: {ex.Message}");
            }
        }

        public void Delete(string id)
        {
            try
            {
                using var dbContext = new DatabaseContext(DbContextOptions);

                var result = _baseRepository.Delete(id);
                if (result == 0)
                    throw new Exception($"Unable to delete {typeof(TEntity)} in database");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw new Exception($"Error during database update: {ex.Message}");
            }
        }

        public TEntity? Get(string id)
        {
            try
            {
                using var dbContext = new DbContext(DbContextOptions);

                var result = _baseRepository.GetById(id);
                if (result is null)
                    throw new Exception($"{typeof(TEntity)} not found in database with id: {id}");
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw new Exception($"Error on querying database: {ex.Message}");
            }
        }

        public TEntity? GetByIdWithIncludedEntities(string id)
        {
            try
            {
                using var dbContext = new DbContext(DbContextOptions);

                var result = _baseRepository.GetByIdWithIncludedEntities(id);
                if (result is null)
                    throw new Exception($"{typeof(TEntity)} not found in database with id: {id}");
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw new Exception($"Error during database update: {ex.Message}");
            }
        }

        public TEntity Update(TEntity entity)
        {
            try
            {
                using var dbContext = new DbContext(DbContextOptions);

                var result = _baseRepository.Update(entity);
                if (result == 0)
                    throw new Exception($"Unable to update  {typeof(TEntity)} in database");
                return entity;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw new Exception($"Error during database update: {ex.Message}");
            }
        }
    }
}

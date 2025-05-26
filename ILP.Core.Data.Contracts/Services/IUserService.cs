using ILP.Core.Data.Entities.Models;

namespace ILP.Core.Data.Contracts.Services
{
    public interface IUserService : IBaseService<User>
    {
        public IQueryable<User> GetAllByGroupId(string groupId);
    }
}

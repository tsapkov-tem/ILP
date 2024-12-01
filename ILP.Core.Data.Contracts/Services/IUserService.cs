using ILP.Core.Data.Entities.Models;

namespace ILP.Core.Data.Contracts.Services
{
    public interface IUserService : IBaseService<User>
    {
        public IEnumerable<User> GetAllByGroupId(string groupId);
    }
}

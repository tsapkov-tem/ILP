using ILP.Core.Data.Entities.Models;

namespace ILP.Core.Data.Contracts.Services
{
    public interface IGroupService : IBaseService<Group>
    {
        public IEnumerable<Group> GetAllByUserId(string userId);
    }
}

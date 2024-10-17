namespace ILP.Core.Data.Contracts.Services
{
    public interface IServiceManager
    {
        public IUserService UserService { get; }
        public IGroupService GroupService { get; }
    }
}

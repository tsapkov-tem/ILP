using Microsoft.Extensions.Configuration;

namespace ILP.Core.Data.Initialization
{
    public interface IDatabaseInitializer
    {
        public void InitializeDatabase(IConfiguration configuration);
    }
}

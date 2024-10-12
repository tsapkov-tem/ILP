using Microsoft.Extensions.Configuration;

namespace ILP.Core.Data.Initialization
{
    internal class SqliteDatabaseInitializer : IDatabaseInitializer
    {
        public void InitializeDatabase(IConfiguration configuration)
        {
            // Sqlite may not be initialized
        }
    }
}

using Microsoft.Extensions.Configuration;

namespace ILP.Core.Data.DatabaseChecker
{
    public class SqliteOnlineChecker : IDatabaseChecker
    {
        // Sqlite is always online
        public bool IsDbOnline(IConfiguration configuration)
        {
            return true;
        }
    }
}

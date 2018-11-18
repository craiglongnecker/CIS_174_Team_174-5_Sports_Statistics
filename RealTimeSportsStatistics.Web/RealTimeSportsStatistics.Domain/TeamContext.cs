using RealTimeSportsStatistics.Domain.Entities;
using System.Data.Entity;

namespace RealTimeSportsStatistics.Domain
{
    public class TeamOrchestrator : DbContext
    {
        public DbSet<Team> Teams { get; set; }
    }
}

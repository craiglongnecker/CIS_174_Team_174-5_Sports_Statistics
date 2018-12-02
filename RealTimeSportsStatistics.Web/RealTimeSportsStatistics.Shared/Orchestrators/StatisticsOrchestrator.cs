using RealTimeSportsStatistics.Domain;
using RealTimeSportsStatistics.Shared.Orchestrators.Interfaces;
using RealTimeSportsStatistics.Shared.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;

namespace RealTimeSportsStatistics.Shared.Orchestrators
{
    public class StatisticsOrchestrator : IStatisticsOrchestrator
    {
        private TeamContext _statisticsContext;

    public StatisticsOrchestrator()
    {
        _statisticsContext = new TeamContext();
    }
        public async Task<List<StatisticsViewModel>> GetAllStatistics()
        {
            var statistics = await _statisticsContext.Statistics.Select(x => new StatisticsViewModel
            {
                Team1Id = x.Team1Id,
                Team1TotalScore = x.Team1TotalScore,
                Team1TotalYards = x.Team1TotalYards,
                Team1TotalRushingYards = x.Team1TotalRushingYards,
                Team1TotalPassingYards = x.Team1TotalPassingYards,
                Team1TotalSackYardsLost = x.Team1TotalSackYardsLost,
                Team1TotalPenaltyYards = x.Team1TotalPenaltyYards,
                Team1AverageYardsPerPunt = x.Team1AverageYardsPerPunt,
                Team1TotalFirstDowns = x.Team1TotalFirstDowns,
                Team1TotalRushes = x.Team1TotalRushes,
                Team1TotalPassesAttempted = x.Team1TotalPassesAttempted,
                Team1TotalPassesCompleted = x.Team1TotalPassesCompleted,
                Team1TotalPassesIntercepted = x.Team1TotalPassesIntercepted,
                Team1TotalSacks = x.Team1TotalSacks,
                Team1TotalFumbles = x.Team1TotalFumbles,
                Team1TotalFumblesLost = x.Team1TotalFumblesLost,
                Team1TotalNumberOfPunts = x.Team1TotalNumberOfPunts,
                Team1TotalNumberOfPenalties = x.Team1TotalNumberOfPenalties,
                Team2Id = x.Team2Id,
                Team2TotalScore = x.Team2TotalScore,
                Team2TotalYards = x.Team2TotalYards,
                Team2TotalRushingYards = x.Team2TotalRushingYards,
                Team2TotalPassingYards = x.Team2TotalPassingYards,
                Team2TotalSackYardsLost = x.Team2TotalSackYardsLost,
                Team2TotalPenaltyYards = x.Team2TotalPenaltyYards,
                Team2AverageYardsPerPunt = x.Team2AverageYardsPerPunt,
                Team2TotalFirstDowns = x.Team2TotalFirstDowns,
                Team2TotalRushes = x.Team2TotalRushes,
                Team2TotalPassesAttempted = x.Team2TotalPassesAttempted,
                Team2TotalPassesCompleted = x.Team2TotalPassesCompleted,
                Team2TotalPassesIntercepted = x.Team2TotalPassesIntercepted,
                Team2TotalSacks = x.Team2TotalSacks,
                Team2TotalFumbles = x.Team2TotalFumbles,
                Team2TotalFumblesLost = x.Team2TotalFumblesLost,
                Team2TotalNumberOfPunts = x.Team2TotalNumberOfPunts,
                Team2TotalNumberOfPenalties = x.Team2TotalNumberOfPenalties
            }).ToListAsync();
            return statistics;
        }
    }
}

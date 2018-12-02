using RealTimeSportsStatistics.Shared.Orchestrators;
using RealTimeSportsStatistics.Web.Models;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace RealTimeSportsStatistics.Web.Controllers
{
    public class StatisticsController : Controller
    {
        private StatisticsOrchestrator _statisticsOrchestator = new StatisticsOrchestrator();

        // GET: Statistics
        [HandleError]
        public async Task<ActionResult> Statistics()
        {
            var statisticsDisplayModel = new StatisticsDisplayModel
            {
                Statistics = await _statisticsOrchestator.GetAllStatistics()
            };
            return View(statisticsDisplayModel);
        }
    }
}
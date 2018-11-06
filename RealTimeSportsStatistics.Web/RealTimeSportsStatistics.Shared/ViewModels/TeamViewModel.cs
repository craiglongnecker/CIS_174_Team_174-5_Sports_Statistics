using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealTimeSportsStatistics.Shared.ViewModels
{
    public class TeamViewModel {
        public int TeamID { get; set; }
        public string TeamCity { get; set; }
        public string TeamName { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }

    }
}

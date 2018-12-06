using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RealTimeSportsStatistics.Shared.ViewModels;
using System.Collections.Generic;

namespace RealTimeSportsStatistics.Web.Models
{
    public class UserDisplayModel
    {
        public List<UserViewModel> Statistics { get; set; }
    }
}
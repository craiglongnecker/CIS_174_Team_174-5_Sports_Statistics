using AutoMoq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using RealTimeSportsStatistics.Shared.Services;
using RealTimeSportsStatistics.Shared.Services.Interfaces;
using RealTimeSportsStatistics.Shared.ViewModels;

namespace RealTimeSportsStatistics.Test
{
    [TestClass]
    public class TeamServiceTests
    {
        private readonly AutoMoqer _mocker = new AutoMoqer();

        [TestInitialize]
        public void Initialize()
        {
            _mocker.GetMock<IExistingTeamService>()
                    .Setup(x => x.ExistingTeamCity())
                    .Returns("Denver");
            _mocker.GetMock<IExistingTeamService>()
                    .Setup(x => x.ExistingTeamName())
                    .Returns("Broncos");
        }

        [TestMethod]
        public void TeamCity_IfTeamCityIsDenver_ReturnsTrue()
        {

            var team = CreateTeam("Denver", "Broncos");

            var teamService = _mocker.Create<TeamService>();

            var TeamCity = teamService.IsTeamCityDenver(team);

            Assert.AreEqual("Denver", TeamCity);
        }

        [TestMethod]
        public void TeamCity_IfTeamCityIsNotDenver_ReturnsTrue()
        {

            var team = CreateTeam("Denver", "Broncos");

            var teamService = _mocker.Create<TeamService>();

            var TeamCity = teamService.IsTeamCityDenver(team);

            Assert.AreNotEqual("Minnesota", TeamCity);
        }

        [TestMethod]
        public void TeamCity_IfTeamNameIsBroncos_ReturnsTrue()
        {

            var team = CreateTeam("Denver", "Broncos");

            var teamService = _mocker.Create<TeamService>();

            var TeamName = teamService.IsTeamNameBroncos(team);

            Assert.AreEqual("Broncos", TeamName);
        }

        [TestMethod]
        public void TeamCity_IfTeamNameIsNotBroncos_ReturnsTrue()
        {

            var team = CreateTeam("Denver", "Broncos");

            var teamService = _mocker.Create<TeamService>();

            var TeamName = teamService.IsTeamNameBroncos(team);

            Assert.AreNotEqual("Vikings", TeamName);
        }

        private TeamViewModel CreateTeam(string TeamCity, string TeamName)
        {
            return new TeamViewModel
            {
                TeamID = 11,
                TeamCity = "Denver",
                TeamName = "Broncos"
            };
        }
    }
}

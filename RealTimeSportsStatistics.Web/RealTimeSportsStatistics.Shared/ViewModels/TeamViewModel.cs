namespace RealTimeSportsStatistics.Shared.ViewModels
{
    public class TeamViewModel {
        public int TeamID { get; set; }
        public string TeamCity { get; set; }
        public string TeamName { get; set; }
        public int Wins { get; set; }
        public string WinsString => Wins.ToString();
        public int Losses { get; set; }
        public string LossesString => Losses.ToString();

    }
}

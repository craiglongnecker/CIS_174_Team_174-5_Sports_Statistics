namespace RealTimeSportsStatistics.Domain.Entities
{
    public class Team
    {
        public int TeamId { get; set; }
        public string TeamCity { get; set; }
        public string TeamName { get; set; }
        public string ColorOne { get; set; }
        public string ColorTwo { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
    }
}

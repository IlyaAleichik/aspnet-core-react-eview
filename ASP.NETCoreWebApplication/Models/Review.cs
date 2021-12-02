using System;

namespace ASP.NETCoreWebApplication.Models
{
    public class Review
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
        public int View { get; set; }
        public int Likes { get; set; }
    }
}
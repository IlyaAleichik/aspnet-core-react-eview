using System;
using System.Net;

namespace ASP.NETCoreWebApplication.Models
{
    public class Review
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string Image { get; set; }
        public string Author { get; set; }
        public int Views { get; set; }
        public int Recomendations { get; set; }
        
        // public ICollection<Tag> Tags { get; set; } = new List<Tag>();
        // public ICollection<Reader> Readers { get; set; } = new List<Reader>();
        // public ICollection<Comment> Comments { get; set; } = new List<Comment>();
    }
}
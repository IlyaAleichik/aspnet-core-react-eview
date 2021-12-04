using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Models;


namespace ASP.NETCoreWebApplication
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Reviews.Any()) return;
            
            var activities = new List<Review>
            {
                new Review
                {
                    Title = "Review Image Shortalnd",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Activity 2 months ago",
                    Category = "photo",
                    Image = "link",
                    Author = "Vlad Efremov",
                    Views = 5,
                    Recomendations = 5,
                },
                new Review
                {
                    Title = "Devid Statem Ahcitecture",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Activity 1 month ago",
                    Category = "arhitecture",
                    Image = "link",
                    Author = "Devid Statem",
                    Views = 5,
                    Recomendations = 5,
                },
                new Review
                {
                    Title = "Future Activity 1",
                    Date = DateTime.Now.AddMonths(1),
                    Description = "Activity 1 month in future",
                    Category = "culture",
                    Image = "link",
                    Author = "Max Evlinsky",
                    Views = 5,
                    Recomendations = 5,
                },
                new Review
                {
                    Title = "Future Activity 2",
                    Date = DateTime.Now.AddMonths(2),
                    Description = "Activity 2 months in future",
                    Category = "music",
                    Image = "link",
                    Author = "Evgeny Goblin",
                    Views = 5,
                    Recomendations = 5,
                },
                new Review
                {
                    Title = "Future Activity 3",
                    Date = DateTime.Now.AddMonths(3),
                    Description = "Activity 3 months in future",
                    Category = "drinks",
                   Image = "link",
                   Author = "Lika Savanova",
                    Views = 5,
                    Recomendations = 5,
                },
                new Review
                {
                    Title = "Future Activity 4",
                    Date = DateTime.Now.AddMonths(4),
                    Description = "Activity 4 months in future",
                    Category = "drinks",
                    Image = "link",
                    Author = "Maxim Dmitriev",
                    Views = 5,
                    Recomendations = 5,
                },
                new Review
                {
                    Title = "Future Activity 5",
                    Date = DateTime.Now.AddMonths(5),
                    Description = "Activity 5 months in future",
                    Category = "drinks",
                   Image = "link",
                   Author = "Artem Gluhovsky",
                    Views = 5,
                    Recomendations = 5,
                },
                new Review
                {
                    Title = "Future Activity 6",
                    Date = DateTime.Now.AddMonths(6),
                    Description = "Activity 6 months in future",
                    Category = "music",
                    Image = "link",
                    Author = "Igor Savelev",
                    Views = 5,
                    Recomendations = 5,
                },
                new Review
                {
                    Title = "Future Activity 7",
                    Date = DateTime.Now.AddMonths(7),
                    Description = "Activity 2 months ago",
                    Category = "travel",
                    Image = "link",
                    Author = "Sergay Afemov",
                    Views = 5,
                    Recomendations = 5,
                },
                new Review
                {
                    Title = "Future Activity 8",
                    Date = DateTime.Now.AddMonths(8),
                    Description = "Activity 8 months in future",
                    Category = "film",
                    Image = "link",
                    Author = "Artem Elivera",
                    Views = 10,
                    Recomendations = 5,
                }
            };

            await context.Reviews.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}
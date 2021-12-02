using System;
using System.Threading;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Models;
using MediatR;

namespace ASP.NETCoreWebApplication.Applications
{
    public class Details
    {
        public class Query : IRequest<Review>
        {
            public Guid Id { get; set; }
        }
            
        public class Handler : IRequestHandler<Query, Review>
        {
            private readonly DataContext context;
            
            public Handler(DataContext context)
            {
                this.context = context;
            }
            public async Task<Review> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Reviews.FindAsync(request.Id);
            }
        }
    }
}
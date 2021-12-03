using System;
using System.Threading;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Models;
using AutoMapper;
using MediatR;

namespace ASP.NETCoreWebApplication.Applications
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var review = await context.Reviews.FindAsync(request.Id);
                context.Remove(review);
                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
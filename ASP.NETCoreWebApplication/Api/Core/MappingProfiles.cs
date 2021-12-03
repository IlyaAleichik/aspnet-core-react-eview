using ASP.NETCoreWebApplication.Models;
using AutoMapper;

namespace ASP.NETCoreWebApplication.Api.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Review, Review>();
        }

    }
}
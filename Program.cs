using ILP.Core.Data;
using ILP.Core.Data.Contracts.Services;
using ILP.Core.Data.Entities;
using ILP.Core.Data.Initialization;
using ILP.Core.Data.Services;
using Microsoft.EntityFrameworkCore;
using System.Security.Principal;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDatabase(builder.Configuration);
builder.Services.AddScoped<IServiceManager, ServiceManager>(x =>
    new ServiceManager(x.GetRequiredService<DbContextOptions<DatabaseContext>>()));

var app = builder.Build();

var generator = new DemoDateGenerator(app.Services.GetRequiredService<DbContextOptions<DatabaseContext>>());
generator.GenerateDemoData();

var serviceManager = new ServiceManager(app.Services.GetRequiredService<DbContextOptions<DatabaseContext>>());

app.MapGet("/", () => "Hello World!");

var users = app.MapGroup("/Users");
var usersService = serviceManager.UserService;

users.MapGet("/User", () => usersService.GetByIdWithIncludedEntities("DemoUser"));

var groups = app.MapGroup("/Groups");
var groupsService = serviceManager.GroupService;

groups.MapGet("/Group", () => groupsService.GetAllByUser("DemoUser"));

app.Run();

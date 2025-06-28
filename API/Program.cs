using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options=>
{
    options.AddPolicy("CorsPolicy",builder=>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

// Add services to the container.
builder.Services.AddDbContext<DataContext>(options =>
{
    var config = builder.Configuration;
    var connectionString = config.GetConnectionString("defaultConnection");
    options.UseSqlite(connectionString);
});
builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUI(options=>
    {
        options.SwaggerEndpoint("/openapi/v1.json","Demo API");
    });
}

app.UseHttpsRedirection();
app.UseCors(opt=>opt.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000"));

app.UseAuthorization();

app.MapControllers();

app.Run();

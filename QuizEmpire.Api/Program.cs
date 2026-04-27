using Microsoft.EntityFrameworkCore;
using QuizEmpire.Infrastructure;
using QuizEmpire.Domain.Interfaces;
using QuizEmpire.Infrastructure.Repositories;
using QuizEmpire.Application.Services;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi(); // Генерирует файл json
    app.MapScalarApiReference(options => 
    {
        options.Theme = ScalarTheme.Mars; // Можешь выбрать DeepSpace, Moon, Satellites
        options.Title = "Quiz Empire API";
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

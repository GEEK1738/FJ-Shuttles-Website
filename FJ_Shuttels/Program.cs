using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;


string directoryPath = @"C:\Users\lab_services_student\source\repos\FJ_Shuttels\FJ_Shuttels\wwwroot\";
if (!Directory.Exists(directoryPath))
{
    Directory.CreateDirectory(directoryPath);
}



var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();






public class UserContext : DbContext
{
    public UserContext(DbContextOptions<UserContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
}

public class User
{
    public int Id { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }
}

public class UserController : Controller
{
    private readonly UserContext _context;

    public UserController(UserContext context)
    {
        _context = context;
    }

    // GET: /signup
    public IActionResult SignUp()
    {
        return View();
    }

    // POST: /signup
    [HttpPost]
    public async Task<IActionResult> SignUp(User user)
    {
        if (ModelState.IsValid)
        {
            if (!_context.Users.Any(u => u.Email == user.Email))
            {
                // Hash the password before saving it
                // You should use a password hashing library for this
                user.Password = HashPassword(user.Password);

                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ModelState.AddModelError("Email", "This email address is already in use.");
            }
        }

        return View(user);
    }

    private string HashPassword(string password)
    {
        // Implement password hashing here (e.g., using a library like BCrypt.NET)
        // You should never store plain text passwords in your database
        return password;
    }
}



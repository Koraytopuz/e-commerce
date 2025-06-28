using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;


public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Product>().HasData(
            new List<Product>
            {
                    new Product
                    {
                        Id = 1,
                        Name = "Iphone 15",
                        Description = "Description for Product 1",
                        Price = 70000,
                        IsActive = true,
                        ImageUrl = "1.jpg",
                        Stock = 100
                    },
                    new Product
                    {
                        Id = 2,
                        Name = "Iphone 15 Pro Max",
                        Description = "Description for Product 2",
                        Price = 95000,
                        IsActive = true,
                        ImageUrl = "https://example.com/product2.jpg",
                        Stock = 50
                    },
                    new Product
                    {
                        Id = 3,
                        Name = "Samsung Galaxy S23",
                        Description = "Description for Product 3",
                        Price = 80000,
                        IsActive = true,
                        ImageUrl = "https://example.com/product3.jpg",
                        Stock = 75
                    },
                    new Product
                    {
                        Id = 4,
                        Name = "Google Pixel 8",
                        Description = "Description for Product 4",
                        Price = 60000,
                        IsActive = true,
                        ImageUrl = "https://example.com/product4.jpg",
                        Stock = 120
                    },
                    new Product
                    {
                        Id = 5,
                        Name = "OnePlus 11",
                        Description = "Description for Product 5",
                        Price = 55000,
                        IsActive = true,
                        ImageUrl = "https://example.com/product5.jpg",
                        Stock = 80
                    }
            }
        );
    }

}

        
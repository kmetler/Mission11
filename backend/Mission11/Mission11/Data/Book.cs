﻿using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Sqlite.Storage.Json.Internal;

namespace Mission11.Data
{
    public class Book
    {
        [Key]
        public int BookId { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public string Publisher { get; set; }
        [Required]
        public string ISBN { get; set; }
        [Required]
        public string Classification { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public int PageCount { get; set; }
        [Required]
        public double Price { get; set; }
    }
}

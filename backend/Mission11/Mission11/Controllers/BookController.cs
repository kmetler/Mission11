using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission11.Data;

namespace Mission11.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private BookDbContext _bookContext;

        public BookController(BookDbContext temp)
        {
            _bookContext = temp;
        }

        [HttpGet("AllBooks")]
        public IActionResult GetBooks(int pageSize = 5, int pageNum = 1, string? sortOrder = null)
        {
            var query = _bookContext.Books.AsQueryable();

            // Apply sorting only if sortOrder is specified
            if (!string.IsNullOrEmpty(sortOrder))
            {
                query = sortOrder.ToLower() == "desc"
                    ? query.OrderByDescending(b => b.Title)
                    : query.OrderBy(b => b.Title);
            }

            var books = query
                .Skip((pageNum - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            var totalNumBooks = query.Count();

            var bookObject = new
            {
                Books = books,
                TotalNumBooks = totalNumBooks
            };

            return Ok(bookObject);
        }
    }
}

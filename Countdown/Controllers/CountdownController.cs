using Microsoft.AspNetCore.Mvc;

namespace Countdown.Controllers
{
    public class CountdownController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

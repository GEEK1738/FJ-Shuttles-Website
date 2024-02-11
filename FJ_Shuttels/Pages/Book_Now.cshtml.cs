using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FJ_Shuttels.Pages
{
    public class Book_NowModel : PageModel
    {
        [BindProperty]
        public float? Distance { get; set; }

        public float? TotalCost { get; private set; }

        public void OnPost()
        {
            if (Distance.HasValue)
            {
                float costPerKilometer = 30;
                TotalCost = Distance * costPerKilometer;
            }
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;

namespace FJ_Shuttels.Pages
{
    public class PaymentModel : PageModel
    {
        // Properties for form data
        [BindProperty]
        public string CardNumber { get; set; }

        [BindProperty]
        public string ExpiryMonth { get; set; }

        [BindProperty]
        public string ExpiryYear { get; set; }

        [BindProperty]
        public string Cvc { get; set; }

        [BindProperty]
        public string CardholderName { get; set; }

        [BindProperty]
        public string MobileNumber { get; set; }

        public void OnGet()
        {
            // Initialization or processing when the page loads
        }

        public IActionResult OnPost()
        {
            // Process the form data here
            // For simplicity, let's just print the data to the console

            Console.WriteLine($"Card Number: {CardNumber}");
            Console.WriteLine($"Expiry Month: {ExpiryMonth}");
            Console.WriteLine($"Expiry Year: {ExpiryYear}");
            Console.WriteLine($"CVC: {Cvc}");
            Console.WriteLine($"Cardholder Name: {CardholderName}");
            Console.WriteLine($"Mobile Number: {MobileNumber}");

            // Redirect to a confirmation page or perform other actions
            return RedirectToPage("/ConfirmationPage");
        }
    }
}

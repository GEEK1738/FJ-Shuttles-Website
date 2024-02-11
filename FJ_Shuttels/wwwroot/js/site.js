// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// Validate the sign up form
function

    validateForm() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm_password");

    if (email.value === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (password.value === "") {
        alert("Please enter a password.");
        return false;
    }

    if (confirmPassword.value === "") {
        alert("Please confirm your password.");
        return

        false;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        return

        false;
    }

    return

    true;
}

// Submit the sign up form
function submitForm() {
    if (validateForm()) {
        document.getElementById("signup_form").submit();
    }
}

// Add an event listener to the submit button
document.getElementById("signup_button").addEventListener("click", submitForm);

// Validate the book ride form
function validateForm() {
    var pickUpDate = document.getElementById("pick_up_date");
    var pickUpTime = document.getElementById("pick_up_time");
    var pickUpLocation = document.getElementById("pick_up_location");
    var dropOffLocation = document.getElementById("drop_off_location");
    var vehicleType = document.getElementById("vehicle_type");

    if (pickUpDate.value === "") {
        alert("Please select a pick-up date.");
        return false;
    }

    if (pickUpTime.value === "") {
        alert("Please select a pick-up time.");
        return false;
    }

    if (pickUpLocation.value === "") {
        alert("Please enter a pick-up location.");
        return false;
    }

    if (dropOffLocation.value === "") {
        alert("Please enter a drop-off location.");
        return false;
    }

    if (vehicleType.value === "") {
        alert("Please select")


            < !-- ... (your existing code) ... -->

<head>
    <title>Book Your Trip!</title>
    <link rel="stylesheet" href="style.css">
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Set default values for pick-up and drop-off locations in Cape Town
            document.getElementById('pickUpLocation').value = 'Cape Town Airport';
            document.getElementById('dropOffLocation').value = 'V&A Waterfront, Cape Town';
        });
    </script>
</head>






            // Fade out the splash page after 5 seconds
setTimeout(function () {
    document.querySelector(".splash-container").classList.add("fade-out");
}, 5000);

        // Redirect the user to the home page after the splash page has faded out
        document.querySelector(".splash-container").addEventListener("transitionend", function () {
            window.location.href = "/";
        });






        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Set up the request
        xhr.open("POST", "/signup");
        xhr.setRequestHeader("Content-Type", "application/json");

        // Create a JSON object with the sign up form data
        var data = {
            Email: document.getElementById("email").value,
            Password: document.getElementById("password").value
        };

        // Send the request
        xhr.send(JSON.stringify(data));

        // Listen for the response
        xhr.onload = function () {
            if (xhr.status === 200) {
                // The user was successfully signed up
                // Redirect the user to the home page
                window.location.href = "/";
            } else {
                // An error occurred
                // Display the error message to the user
                alert(xhr.responseText);
            }
        };




        function register() {
            // Register the user
            // Redirect the user to the book now page
            location.href = '/book-now';
        }

        function signIn() {
            // Sign in the user
            // Redirect the user to the book now page
            location.href = '/book-now';
        }


        const bounds = document.querySelectorAll("[data-bound]");

        for (let i = 0; i < bounds.length; i++) {
            const targetId = bounds[i].getAttribute("data-bound");
            const defValue = bounds[i].getAttribute("data-def");
            const targetEl = document.getElementById(targetId);
            bounds[i].addEventListener(
                "blur",
                () => (targetEl.innerText = bounds[i].value || defValue)
            );
        }

        /* TOGGLE CVC DISPLAY MODE */
        const cvc_toggler = document.getElementById("cvc_toggler");

        cvc_toggler.addEventListener("click", () => {
            const target = cvc_toggler.getAttribute("data-target");
            const el = document.getElementById(target);
            el.setAttribute("type", el.type === "text" ? "password" : "text");
        });

        function onlyNumberKey(evt) {
            // Only ASCII character in that range allowed
            var ASCIICode = evt.which ? evt.which : evt.keyCode;
            if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
            return true;
        }

        $(function () {
            $("#cardNumber").on("keyup", function (e) {
                var val = $(this).val();
                var newval = "";
                val = val.replace(/\s/g, "");
                for (var i = 0; i < val.length; i++) {
                    if (i % 4 == 0 && i > 0) newval = newval.concat(" ");
                    newval = newval.concat(val[i]);
                }
                $(this).val(newval);
            });

            $(".year-own").datepicker({
                minViewMode: 2,
                format: "yyyy"
            });

            $(".month-own").datepicker({
                format: "MM",
                minViewMode: "months",
                maxViewMode: "months",
                startView: "months"
            });
        });

// This function is action when the user selects the "Compute Interest" button.
function compute()
{
    // Get loan amount (principal), interest rate, and number of years of deposit
    // from document. Parse these values as integers.
    principal = parseInt(document.getElementById("principal").value);
    
    // Validate that a positive number is entered for the principal amount.
    if (principal <= 0) {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    
    rate = parseInt(document.getElementById("rate").value);
    years = parseInt(document.getElementById("years").value);
    interest = principal * years * rate / 100;

    // Get the current date and then add the number of years to the current year.
    d = new Date();
    finalYear = d.getFullYear() + years;

    // Print result after user selects "Compute Interest" button.
    document.getElementById("result").innerHTML = "If you deposit <span style=color:blue>" + principal + "</span>, <br>at an interest rate of <span style=color:blue>" + rate + "%</span>. <br>You will receive an amount of <span style=color:blue>" + interest + "</span>, <br>in the year <span style=color:blue>" + finalYear + "</span>";
}

// This function updates the displayed interest rate when the user changes via slider.
function rateDisplay()
{
    rate = document.getElementById("rate").value;
    document.getElementById("rateval").innerHTML = rate + "%";
}


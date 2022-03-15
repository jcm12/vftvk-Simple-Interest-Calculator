function compute()
{
    var principal = document.getElementById("principal").value;

    if (principal <= 0) {

        alert("Enter a positive number.");
        document.getElementById("prinicpal").focus();
        return;

    }
    else {

        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var resultToSet = document.getElementById("result");

        var interest = principal * years * rate / 100;
        
        var year = new Date().getFullYear() + parseInt(years);

        var toDisplay = `If you deposit <mark>${principal}</mark>,<br/>`;
        toDisplay += `at an interest rate of <mark>${rate}%</mark>. <br/>`;
        toDisplay += `You will receive an amount of <mark>${interest}</mark>,<br/>`;
        toDisplay += `in the year <mark>${year}</mark>.`;

        resultToSet.innerHTML = toDisplay;
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    var rateToShow = document.getElementById("rate_val");

    rateToShow.innerText = rateval + '%';
    
}
        

window.onload = function () {
    document.getElementById("goToPay").addEventListener("click", function (e) {
        e.preventDefault();
        var name = document.getElementById('checkbox1').checked || document.getElementById('checkbox2').checked || document.getElementById('checkbox3').checked
        var number = document.getElementById('number').value >= 0
        if(name && number)
        window.location.href = window.location.pathname.split("/").shift().toString().concat("pay.html");
        else{
            document.getElementById("info").style.display = "block";
        }
    })
}
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function abatementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if(value >= 0) document.getElementById('number').value = value;
}

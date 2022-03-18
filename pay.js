window.onload = function () {
    document.getElementById("fa-solid").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = window.location.pathname.split("/").shift().toString().concat("form.html");
    })
}

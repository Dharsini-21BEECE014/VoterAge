function msg() {
    var username = document.getElementById("username").value;
    var age = document.getElementById("age").value;
    var mes = '';
    if (username.length == 0 && (age.length > 0 && age > 0)) {
        alert("Incorrect Username");
        window.location.href = 'h1.html';
    }
    else if (username.length > 0 && age.length == 0) {
        alert("Incorrect Age");
        window.location.href = 'h1.html';
    }
    else if (username.length == 0 && age.length == 0) {
        alert("Both are incorrect");
        window.location.href = 'h1.html';
    }
    else if (username.length >= 0 && age <= 0) {
        alert("Sorry to inform you");
        window.location.href = 'h1.html';
    }
    else {
        if (age >= 18) {
            mes = "Congrats " + username + " !, wow you have successfully vote";
        }
        else {
            mes = "Sorry " + username + " not eligible to vote";
        }
    }
    document.getElementById('mes').innerText = mes;

}
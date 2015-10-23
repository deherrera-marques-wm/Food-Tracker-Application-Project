function enter() {
 var food = document.getElementById("food").value;
    var newDiv = document.createElement("h2");
    var newContent = document.createTextNode(food);
    var currentDiv = document.getElementById("food1");
    document.body.insertBefore(newDiv, currentDiv);

    var description = document.getElementById("food").value;
    var newDiv = document.createElement("h2");
    var newContent = document.createTextNode(description);
    var currentDiv = document.getElementById("food1");
    document.body.insertBefore(newDiv, currentDiv);

    var purchase = document.getElementById("food").value;
    var newDiv = document.createElement("h2");
    var newContent = document.createTextNode(purchase);
    var currentDiv = document.getElementById("food1");
    document.body.insertBefore(newDiv, currentDiv);

    var expiration = document.getElementById("food").value;
    var newDiv = document.createElement("h2");
    var newContent = document.createTextNode(expiration);
    var currentDiv = document.getElementById("food1");
    document.body.insertBefore(newDiv, currentDiv);

}


function enter() {

   var table = document.getElementById("myTable");
   var row = table.insertRow(1);
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);

   var food = document.getElementById("food").value;
   var newContent = document.createTextNode(food);
   cell1.appendChild(newContent);

   var description = document.getElementById("description").value;
   var newContent2 = document.createTextNode(description);
   cell2.appendChild(newContent2);

   var purchase = document.getElementById("purchase").value;
   var newContent3 = document.createTextNode(purchase);
   cell3.appendChild(newContent3);

   var expiration = document.getElementById("expiration").value;
   var newContent4 = document.createTextNode(expiration);
   cell4.appendChild(newContent4);

if(expiration < purchase){
   row.style.backgroundColor = "red";
}
   else{
   row.style.backgroundColor = "white";
}
}








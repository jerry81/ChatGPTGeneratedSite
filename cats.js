var listItems = document.getElementsByTagName("li");

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function() {
    alert("You clicked on " + this.innerHTML);
  });
}


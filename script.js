//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  var element = document.getElementById("level");
  var level = 0;

  while (element.parentElement && element.parentElement.tagName === "UL") {
    element = element.parentElement;
    level++;
  }

  alert("The level of the element is: " + level);
});

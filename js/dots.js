var circle = document.getElementById("originCircle");
var containerDiv = document.getElementById("container");

circle.removeAttribute("id");

var columnIndex = 0;
var rowIndex = 0;

for (var i = 0, copy; i < 100 - 1; i++) {
  copy = circle.cloneNode(true);
  copy.style.animationDelay = (columnIndex - rowIndex) * 0.25 + "s";
  containerDiv.insertBefore(copy, circle);

  if (columnIndex !== 9) {
    columnIndex++;
  } else {
    columnIndex = 0;
    rowIndex++;
  }
}

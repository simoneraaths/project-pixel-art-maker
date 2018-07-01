// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const submitBtn = $('input[type="submit"]');
const table = $('#pixelCanvas');
const colorPicker = $('#colorPicker');
let colorSelected = document.getElementById('colorPicker').value;

console.log(colorSelected);

function makeGrid() {
  event.preventDefault();
  if(table.children().length) {
    table.children().remove();
  }

  let gridHeight = document.getElementById('inputHeight').value;
  let gridWidth = document.getElementById('inputWidth').value;

  for (i = 0; i < gridHeight; i++) {
    $('#pixelCanvas').append( '<tr></tr>' );
    console.log("table row");
  }
  for (x = 0; x < gridWidth; x++) {
    console.log("table column");
    $('#pixelCanvas > tr').append( '<td>hi</td>');
  }
}

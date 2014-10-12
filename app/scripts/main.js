// Programatically build Sudoku Board with jQuery
var Board = function (n) {

  // Set the size of the sudoku board
  // default at 9 if no input
  var n = n || 9;
  
  // Declare the Sudoku board variables
  var $table = $('<table>').addClass('sudokuBoard');
  var $tableData,
  $tableRow,
  $matrix = {};

  // Create the rows and prepare to make a matrix
  for (var row = 0; row < n; row++) {
    $tableRow = $('<tr>');
    $matrix[row] = {};

    // Create the columns and individual cells
    for (var col = 0; col < n; col++) {

      // Constrain the input  
      $matrix[row][col] = $('<input>')
                          .data('row', row)
                          .data('col', col)
                          .attr('pattern', '[1-9]{1}');
      $tableData = $('<td>').append($matrix[row][col]);
      
      // Assign sub-grids for design
      subGridRow = Math.floor(row / 3);
      subGridCol = Math.floor(col / 3);
      if ((subGridRow + subGridCol) % 2 === 0) {
        $tableData.addClass('evenSubGrid');
      } else {
        $tableData.addClass('oddSubGrid');
      }

      // Append the TableData to the Rows
      $tableRow.append($tableData);
    }
    $table.append($tableRow);
  }
  return $table;
};


var sudokuBoard = new Board();

$('.container').append(sudokuBoard);

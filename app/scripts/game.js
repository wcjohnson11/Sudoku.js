var sudokuSingleton = (function() {
  // Instance stores a reference to the Singleton
  var instance;

  // Private methods
  var counter = 0;
  var paused = false;

  function init() {

    // Singleton
    var sudokuGame = new Game();

    return {

      // Public methods and variables

      // Building and Manipulating the Board
      getBoard: function () {
        return sudokuGame.buildBoard();
      },
      reset: function () {

      },
      solveBoard: function () {

      },

      // Storing values
      storeValue: function (e) {
        var val = $.trim($(e.currentTarget).val()),
        row = $(e.currentTarget).data('row'),
        col = $(e.currentTarget).data('col'),
        validMove = true;
      },

      // Validation methods
      checkColumn: function (colIndex) {
      },
      checkRow: function (rowIndex) {},
      checkSubGrid: function () {}
    };
  }

    // Singleton class for the Game
    function Game(n) {

      // Set the size of the sudoku board
      // default at 9 if no input
      // Declare Sudoku Board Variables
      this.n = this.n || 9,
      this.$table = $('<table>').addClass('sudokuBoard'),
      this.$tableData,
      this.$tableRow,
      this.$matrix = {},
      this.storedMatrix = {};
    }

    // Prototype for Game Singleton

    Game.prototype = {
      buildBoard: function () {

        // Create the rows and prepare to make a matrix
        for (var row = 0; row < this.n; row++) {
          this.$tableRow = $('<tr>');
          this.$matrix[row] = {};

          // Create the columns and individual cells
          for (var col = 0; col < this.n; col++) {

            // Constrain the input and attach data  
            this.$matrix[row][col] = $('<input>')
                                .data('row', row)
                                .data('col', col)
                                .attr('pattern', '[1-9]{1}');
            this.$tableData = $('<td>').append(this.$matrix[row][col]);
            
            // Assign sub-grids for design
            subGridRow = Math.floor(row / 3);
            subGridCol = Math.floor(col / 3);
            if ((subGridRow + subGridCol) % 2 === 0) {
              this.$tableData.addClass('evenSubGrid');
            } else {
              this.$tableData.addClass('oddSubGrid');
            }

            // Append the TableData to the Rows
            this.$tableRow.append(this.$tableData);
          }
          this.$table.append(this.$tableRow);
        }
        return this.$table;
      }
    };


  return {

    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
	
});

var sudo = sudokuSingleton().getInstance();
$('.container').append(sudo.getBoard());

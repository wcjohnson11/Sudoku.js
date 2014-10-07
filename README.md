Sudoku.js
=========

functional and stylized Sudoku game with HTML, CSS, JS

###About
Sudoku is a game that I've only had a passing experience with(when on an airplane w/o a book) but it seemed like a nice little engineering challenge to do a responsive version with HTML, CSS and JS to showcase my ability to architect modular, performant Javascript code with well-structured and flexible CSS.
State will be stored directly in the browser, *'Look ma, no server!'*

[Sudoku on Wikipedia](http://en.wikipedia.org/wiki/Sudoku)

##Sudoku Basics
Sudoku is a log-based combinatorial number-placement puzzle.

Sudoku is all about permutations.
  *The total number of valid 9x9 Sudoku grids is 6,670,903,752,021,072,936,960.
  *The minimal amount of givens in an initial Sudoku that can yield a unique solution is 17 cells.

The complexity comes from applying the restriction of a single group into a two-dimensional grid.

There are 3 constraints on each cell, it must be unique to the row, column and sub-grid



###The Objective
To fill a 9x9 grid with digits so that each column, each row, and each of the nine 3x3 sub-grids that compose the greater grid(called "sub-grids" from here on) contains all digits from 1 to 9.


The puzzle's initial state provides a partially completed grid which, in a well-constructed puzzle, has a unique solution.

Completed puzzles are always a type of [Latin Square](http://en.wikipedia.org/wiki/Latin_square) with an additional constraint on the contents of the individual regions.
For instance, the same single integer may not appear twice in the same row, column or in any of the sub-grids on the 9x9 playing board.

###[Mathematics of Sudoku](http://en.wikipedia.org/wiki/Mathematics_of_Sudoku)

###[Algorithmic Sudoku](http://en.wikipedia.org/wiki/Sudoku_solving_algorithms)

##My Sudoku Roadmap
*An introductory roadmap for features*
1.MVP
  1. The design must be responsive across devices and browsers, (Android, iOS, latest Firefox, Chrome, IE10)
  2. The 9x9 grid in responsive HTML & CSS
    *Model with a Javscript Matrix(Array of Arrays)
    *Build the grid in rem
  3. A Validation tool that checks whether a number fits in a given cell
    *Vertical with Columns
    *Horizontal with Rows
    *3x3 sub-grids
    *When a valid solution has been reached
  4.Store the games state in local Storage
2.Backlog
  1. [Board Generator creates a well-constructed puzzle](http://zhangroup.aporc.org/images/files/Paper_3485.pdf)
    *With varying degrees of difficulty
  2. Board Solver or helper function(fill in 1 square)
function Solver() {

  this.solve = function(puzzle) {
    // figure it out!
  };


  this.validate_puzzle = function(puzzle) {

    var length = this.validate_length(puzzle);

    var chars = this.validate_chars(puzzle, [1,2,3,4,5,6,7,8,9,"_"]);

    return length && chars;
  };


  this.validate_solution = function(puzzle) {
    var puzzle_copy = puzzle.slice(0);

    var length = this.validate_length(puzzle_copy);

    var chars = this.validate_chars(puzzle_copy, [1,2,3,4,5,6,7,8,9]);

    var rows = this.validate_rows(puzzle_copy);

    var cols = this.validate_cols(puzzle_copy);

    console.log(rows);
    return length && chars && rows && cols;
    
  };

  this.validate_rows = function(puzzle) {
    var rows = true;

    var rowStarts = [0,9,18,27,36,45,54,63,72]

    for(var i = 0; i < 9; i++) {
      var index = i * 9;
      var row = puzzle.slice(index, index + 9);

      var sum = 0;
      row.forEach(function(x) {
        sum += x;
      });

      if (sum != 45) {
        rows = false;
      }
    }
    return rows;
  };

  this.validate_cols = function(puzzle) {
    var cols = true;

    for(var x = 0; x < 9; x++) {
      var col_sum = 0;

      for(var y = 0; y < 9; y++) {
        var index = x + (y * 9);
        col_sum += puzzle[index];
      }

      if(col_sum != 45) {
        cols = false;
      }
    }
    return cols;
  };


  this.validate_chars = function(puzzle, valid_chars) {
    var valid = true;
    puzzle.forEach(function(x) {
      if(valid_chars.indexOf(x) == -1) {
        valid = false;
      }
    });
    return valid;
  };



  this.validate_length = function(puzzle) {

    if(puzzle.length == 81) {
      return true;
    } else {
      return false;
    }

  };
};


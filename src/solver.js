function Solver() {


  this.validate_puzzle = function(puzzle) {
    var valid = true;
    console.log(puzzle);


    if(puzzle.length < 81) {
      valid = false;
    };

    var valid_chars = [1,2,3,4,5,6,7,8,9,"_"];

    puzzle.forEach(function(x) {
      if(valid_chars.indexOf(x) == -1) {
        console.log(x + "mememe");
        valid = false;
      }
    });

    return valid;
  };
};


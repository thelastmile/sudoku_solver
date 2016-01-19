var sudoku1 = [2,'_',8,1,3,'_',4,9,'_',
              '_','_',7,'_','_','_',6,'_',8,
              '_','_',4,8,'_','_','_','_',3,
              4,'_','_','_','_','_',1,'_','_',
              3,'_','_',2,'_','_','_','_','_',
              '_','_','_',9,1,'_','_',8,'_',
              5,7,'_','_',9,'_','_','_','_',
              '_','_',6,'_','_',5,'_','_','_',
              9,'_','_',6,'_','_',5,'_','_']

var sudoku1_solution = [2,5,8,1,3,6,4,9,7,
                        1,3,7,4,2,9,6,5,8,
                        6,9,4,8,5,7,2,1,3,
                        4,8,9,5,7,3,1,2,6,
                        3,1,5,2,6,8,7,4,9,
                        7,6,2,9,1,4,3,8,5,
                        5,7,1,3,9,2,8,6,4,
                        8,2,6,7,4,5,9,3,1,
                        9,4,3,6,8,1,5,7,2];


describe('validate_puzzle()', function() {
  var solver = new Solver();

  // do this so we dont modify the original
  var puzzle_copy = sudoku1.slice(0);

  it('returns false if puzzle is not 81 elements', function() {
    expect(solver.validate_puzzle(puzzle_copy.slice(70))).to.be.false;
  });

  it('returns false if puzzle contains unallowed chars', function() {
    puzzle_copy[4] = "badstuff";
    expect(solver.validate_puzzle(puzzle_copy)).to.be.false;
  });

  it('returns true when passed a valid unfinished sudoku puzzle', function() {
    expect(solver.validate_puzzle(sudoku1)).to.be.true;
  });

});

describe('validate_solution()', function() {


  it('returns false when passed an unfinished sudoku puzzle', function() {

  });


  it('returns false when passed an invalid sudoku puzzle', function(){ 

  })


});


describe('solve()', function() {

  it('returns a valid and complete sudoku puzzle', function() {

  });

  it('returns false if the sudoku is not solveable', function() {

  });

});


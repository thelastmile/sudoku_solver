var sudoku1 = [2,'_',8,1,3,'_',4,9,'_',
              '_','_',7,'_','_','_',6,'_',8,
              '_','_',4,8,'_','_','_','_',3,
              4,'_','_','_','_','_',1,'_','_',
              3,'_','_',2,'_','_','_','_','_',
              '_','_','_',9,1,'_','_',8,'_',
              5,7,'_','_',9,'_','_','_','_',
              '_','_',6,'_','_',5,'_','_','_',
              9,'_','_',6,'_','_',5,'_','_']


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


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

  var sudoku2 = [5,6,'_',1,'_','_','_',9,'_',
                 3,8,'_','_','_','_','_','_','_',
                 '_',1,'_','_',9,'_','_','_','_',
                 4,3,'_','_','_','_','_','_','_',
                 7,'_','_','_','_','_','_','_','_',
                 '_', '_','_','_',8,2,1,'_',7,
                 '_','_','_','_',7,5,'_','_',3,
                 '_','_','_','_','_','_','_',8,'_',
                 1,'_','_',3,2,'_','_','_',5];

var sudoku2_solution = [5,6,7,1,4,3,2,9,8,
                        3,8,9,2,5,6,4,7,1,
                        2,1,4,8,9,7,3,5,6,
                        4,3,8,7,6,1,5,2,9,
                        7,2,1,5,3,9,8,6,4,
                        6,9,5,4,8,2,1,3,7,
                        8,4,2,9,7,5,6,1,3,
                        9,5,3,6,1,4,7,8,2,
                        1,7,6,3,2,8,9,4,5];



describe('validate_puzzle()', function() {
  var solver = new Solver();

  // do this so we dont modify the original
  var puzzle_copy = sudoku2.slice(0);

  it('returns false if puzzle is not 81 elements', function() {
    expect(solver.validate_puzzle(puzzle_copy.slice(70))).to.be.false;
  });

  it('returns false if puzzle contains unallowed chars', function() {
    puzzle_copy[4] = "badstuff";
    expect(solver.validate_puzzle(puzzle_copy)).to.be.false;
  });

  it('returns true when passed a valid unfinished sudoku puzzle', function() {
    expect(solver.validate_puzzle(sudoku2)).to.be.true;
  });

});

describe('validate_solution() basics', function() {

  var solver = new Solver();

  // do this so we dont modify the original
  var solution_copy = sudoku2_solution.slice(0);

  it('returns false when passed an unfinished sudoku puzzle', function() {
    expect(solver.validate_solution(solution_copy.slice(70))).to.be.false;
  });

  it('returns false when passed an invalid sudoku puzzle', function(){ 
    solution_copy[4] = "badstuff";
    expect(solver.validate_solution(solution_copy)).to.be.false;
  })

  it('returns true when passed a valid finished sudoku puzzle', function() {
    expect(solver.validate_solution(sudoku1_solution)).to.be.true;
  });
});

describe('validate_solution() advanced', function() {
  var solver = new Solver();

  it('can detect rows that dont add up', function() {
    // try this twice to be sure

    var solution_copy = sudoku2_solution.slice(0);

    expect(solver.validate_solution(solution_copy)).to.be.true;
    solution_copy[15] = 3;
    expect(solver.validate_solution(solution_copy)).to.be.false;

    var solution_copy = sudoku2_solution.slice(0);
    expect(solver.validate_solution(solution_copy)).to.be.true;
    solution_copy[35] = 4;
    expect(solver.validate_solution(solution_copy)).to.be.false;
  });

  it('can detect columns that dont add up', function() {

    var solution_copy = sudoku2_solution.slice(0);
    solution_copy[18] = 7;
    solution_copy[23] = 6;
    expect(solver.validate_solution(solution_copy)).to.be.false;
  });

});


describe('solve()', function() {
  var solver = new Solver();

  it('returns a valid and complete sudoku puzzle', function() {
    expect(solver.solve(sudoku2)).to.eql(sudoku2_solution);
    expect(solver.solve(sudoku1)).to.eql(sudoku1_solution);
  });

});


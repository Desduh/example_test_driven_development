# Triangle Project

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Jest](https://img.shields.io/badge/Tested_with-Jest-green?logo=jest)
![TDD](https://img.shields.io/badge/Methodology-TDD-blue)

This project implements a program that classifies a triangle based on its sides (isosceles, scalene, equilateral) and includes a suite of tests to validate various scenarios.

## Test-Driven Development (TDD)

This project follows the **Test-Driven Development (TDD)** methodology, which is a software development process that relies on writing tests before implementing the actual functionality. The process includes the following steps:

1. **Write the test cases first**: The developer writes tests for the functionality they are about to implement. These tests are initially expected to fail.
2. **Implement the code**: After the tests are in place, the developer writes the minimum amount of code necessary to make the tests pass.
3. **Refactor the code**: Once the tests pass, the developer refactors the code to ensure it's clean and efficient while keeping all tests passing.

By following TDD, the codebase is constantly validated against the test cases, reducing the likelihood of introducing bugs and ensuring the functionality works as expected.

## How to run

### Install dependencies

1. Install Jest with `npm`:
   ```bash
    npm install
   ```

### Run tests

To run the tests, use the following command:

```bash
npm test
```

## Test Case Explanation

1. **Valid scalene triangle**: Tests a scalene triangle with sides 3, 4, and 5.
2. **Valid isosceles triangle**: Tests an isosceles triangle with sides 5, 5, and 8.
3. **Valid equilateral triangle**: Tests an equilateral triangle with sides 6, 6, and 6.
4. **Permutations of valid isosceles triangle**: Tests three permutations of the isosceles triangle with sides 5, 5, and 8.
5. **Zero value for a side**: Tests a triangle with one side equal to zero.
6. **Negative value for a side**: Tests a triangle with one side being negative.
7. **Sum of two sides equals the third**: Tests cases where the sum of two sides equals the third.
8. **Sum of two sides less than the third**: Tests cases where the sum of two sides is less than the third.
9. **All sides are zero**: Tests a triangle where all sides are zero.

## Note
This project uses **Jest** as the testing framework in **JavaScript** and covers all the scenarios required in the exercise.
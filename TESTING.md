# Tests

As a best practise, we use Test-Driven Development (TDD); any feature without a test does not exist. We accomplish this by writing tests first, and then writing the code to make the tests pass.

## Why test-driven development

Programmers that use TDD tend to write more tests, and tend to be more productive. It also forces us to focus on the requirements before we write our code, reducing unnecessary code, and giving us the confidence to move quickly. Writing tests first forces us to write testable code, which leads to more modular code and greater separation of concerns.

Using TDD results in tests that double as documentation. Every feature has a test, and every test validates a feature. Looking at the tests for a module should tell the developer what the requirements are for that module.

## How to do test-driven development

1. Add a test
  - Each new feature starts with a test
  - Write a simple test that defines the function that needs to be implemented
  - The test should capture a specific requirement
2. Run all tests and see if the new test fails
  - Because we write the tests before the code, the new test should fail
  - Running the tests makes sure that our code doesn't already cover the functionality that we are trying to add
  - We get to see why the test fails
3. Write the code
  - Write only the code necessary to make the test pass
  - The code doesn't have to be great at this point, we can improve it later
4. Run tests
  - Run the tests and make sure they pass
  - If the tests all pass, then we know that our new code meets the requirements
  - If the tests fail, we can write code to fix the problems we introduced
5. Refactor
  - As we add more features, we might need to make changes to help with maintainability and readability of the code
  - Sometimes the easiest way to make the test pass is to put code in places where it doesn't belong, or to use repeated code
  - It's important to refactor to avoid excessive duplication and to put code in its logical spot
6. Repeat
  - Do everything again for the next requirement!
  - Each unit of code written should be small, so the steps shouldn't take long

## Good practises

- Tests should describe the code being tested
- Tests should be resilient! They should only fail if the feature they are testing is broken
- Tests should be small and simple
  - Each test should only test one feature
  - Tests that cover too much are more prone to failure
- Tests should be independent
  - Mock dependencies
  - Don't rely on state set in a previous test

## Goals

### Code coverage
Our short-term goal is to get to 80% code coverage, with 100% code coverage on new code. Having 100% code coverage means that *everything* gets tested. Code without tests should either be removed if it's not required, or have a test written to validate it.

### No failing tests
Code that includes failing tests will be automatically rejected by the deploy pipeline.

### Mutation score
Mutation testing provides a valuable metric for determining how effective our tests are.

>Bugs, or mutants, are automatically inserted into your production code. Your tests are ran for each mutant. If your tests fail then the mutant is killed. If your tests passed, the mutant survived. The higher the percentage of mutants killed, the more effective your tests are.

A mutation score tells us the percentage of mutants that are killed during the mutation tests. Mutation tests are the same tests as the unit tests, and don't require us to write our tests any differently.

See the [Stryker website](https://stryker-mutator.io/) for more info.

Our initial goal is to have a mutation score of 70%.

## E2E Tests

From the [Angular documentation](https://angular.io/guide/testing#use-e2e-end-to-end-to-test-more-than-a-single-unit):

>E2E tests are great for high-level validation of the entire system. But they can't give you the comprehensive test coverage that you'd expect from unit tests.
>
> E2E tests are difficult to write and perform poorly compared to unit tests. They break easily, often due to changes or misbehavior far removed from the site of breakage.
>
> E2E tests can't easily reveal how your components behave when things go wrong, such as missing or bad data, lost connectivity, and remote service failures.
>
> E2E tests for apps that update a database, send an invoice, or charge a credit card require special tricks and back-doors to prevent accidental corruption of remote resources. It can even be hard to navigate to the component you want to test.
>
> Because of these many obstacles, you should test DOM interaction with unit testing techniques as much as possible.

We should aim to make all our tests as resilient as possible. We shouldn't be covering everything with e2e tests, and we definitely shouldn't be relying on e2e tests for code coverage.

// A simple function to test
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return 'Hello, World!';
    }
}

// A simple test case
function runTest() {
    const expected = 'Goodbye, GitHub Actions!';
    const actual = greet('GitHub Actions');

    if (actual === expected) {
        console.log('Test Passed: Greeting is correct!');
        process.exit(0); // Exit with a success code
    } else {
        console.error(`Test Failed: Expected "${expected}", but got "${actual}"`);
        process.exit(1); // Exit with a failure code
    }
}


runTest();
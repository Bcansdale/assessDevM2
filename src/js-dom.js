// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

const button = document.querySelector('button#auth');
button.addEventListener('click', () => {
    if (button.textContent === 'Log in') {
        button.textContent = 'Log out';
    } else {
        button.textContent = 'Log in';
    }
});

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

const form = document.querySelector('form#send-alert');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting and refreshing the page
        const message = form.querySelector('input[name="alert"]');
        if (message) {
            alert(message.value);
        } else {
            console.error("Element with id 'alert-message' not found");
        }
    });
} else {
    console.error("Element with id 'send-alert' not found");
}


// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

const list = document.querySelector('#list');
if (list) {
    const button = document.querySelector('#item-adder');
    if (button) {
        button.addEventListener('dblclick', () => {
            const newItem = document.createElement('li');
            newItem.textContent = 'Item';
            list.appendChild(newItem);
        });
    } else {
        console.error("Element with id 'item-adder' not found");
    }
} else {
    console.error("Element with id 'list' not found");
}

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Turn stuff red') {
            document.querySelectorAll('.changes-colors').forEach((el) => {
                el.style.color = 'red';
            });
        } else if (button.textContent === 'Turn stuff blue') {
            document.querySelectorAll('.changes-colors').forEach((el) => {
                el.style.color = 'blue';
            });
        }
    });
});

// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span
// Function to calculate the factorial of a positive integer
function factorial(number) {
    if (number === null || number === undefined || number < 0 || number % 1 !== 0) {
        return null; // Return null for invalid input
    }

    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

// Add event listener for form submission
document.getElementById('factorial-calculator').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get the number from the input field
    const numberInput = document.getElementById('factorial-input').value;
    const number = parseInt(numberInput, 10);

    // Calculate the factorial
    const result = factorial(number);

    // Display the result or an error message
    document.getElementById('result').textContent = result !== null ? result : 'Invalid input, please enter a non-negative integer';
});


// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

const form2 = document.querySelector('form#recommend-word');
if (form2) {
    form2.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const wordInput = form2.querySelector('input[name="word"]');
        const feedbackElement = form2.querySelector('p.form-feedback');

        if (wordInput && feedbackElement) {
            const word = wordInput.value.trim();

            if (word.length < 4) {
                feedbackElement.textContent = 'The word must be at least 4 characters long.';
                feedbackElement.style.color = 'red';
            } else {
                feedbackElement.textContent = 'Thanks for your submission!';
                feedbackElement.style.color = 'green';
            }
        } else {
            console.error('Word input element or feedback element not found');
        }
    });
} else {
    console.error('Form element with ID "recommend-word" not found');
}

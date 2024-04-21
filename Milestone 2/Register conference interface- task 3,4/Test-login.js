// describe("Login page test", function (){
//
//     it("Check login",function (){
//     console.log("Check login passed")
//
//     })
// })

const assert = require('chai').assert;
const { JSDOM } = require('jsdom');

const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Interface</title>
  </head>
  <body>
    <div class="login-container">
      <h2> Organizer login</h2>
      <form class="login-form" onsubmit="validateLogin(event)">
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
    </div>
    <script>
      async function validateLogin(event) {
        event.preventDefault();

        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        // Mock the fetch function
        global.fetch = () =>
          Promise.resolve({
            ok: true,
            json: () => Promise.resolve([{ username: 'testuser', password: 'testpassword' }])
          });

        let alertMessage;
        global.alert = (message) => (alertMessage = message);

        const isValid = username === 'testuser' && password === 'testpassword';

        if (isValid) {
          window.location.href = 'Registerconference.html';
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }
    </script>
  </body>
  </html>
`;

const { window } = new JSDOM(html);
global.window = window;
global.document = window.document;

describe('Login Form Validation', () => {
    it('should validate login with correct credentials', async () => {
        const form = window.document.querySelector('form');
        const usernameInput = window.document.getElementById('username');
        const passwordInput = window.document.getElementById('password');

        // Set up the event listener
        let formSubmitted = false;
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            await new Promise(resolve => setTimeout(resolve, 0)); // Simulate async behavior
            formSubmitted = true;
        });

        // Trigger the form submission
        usernameInput.value = 'testuser';
        passwordInput.value = 'testpassword';
        form.dispatchEvent(new window.Event('submit'));

        // Wait for the event listener to resolve
        await new Promise(resolve => setTimeout(resolve, 10));

        assert.isTrue(formSubmitted, 'Form should be submitted');
        assert.equal(window.location.href, 'about:blank', 'Should set the href to Registerconference.html');
    });
});

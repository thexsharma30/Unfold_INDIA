// Function to save user data to localStorage
function saveUser(email, name, password) {
  const user = {
      email,
      name,
      password
  };
  localStorage.setItem(email, JSON.stringify(user));
}

// Function to get user data from localStorage
function getUser(email) {
  return JSON.parse(localStorage.getItem(email));
}

// Registration form handling
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
      registerForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const email = document.getElementById('registerEmail').value;
          const name = document.getElementById('registerName').value;
          const password = document.getElementById('registerPassword').value;

          if (getUser(email)) {
              alert('User already exists! Please login.');
          } else {
              saveUser(email, name, password);
              alert('Registration successful! You can now log in.');
              window.location.href = 'login.html';
          }
      });
  }

  // Login form handling
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
      loginForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const email = document.getElementById('loginEmail').value;
          const password = document.getElementById('loginPassword').value;

          const user = getUser(email);
          if (user && user.password === password) {
              alert('Login successful!');
              window.location.href = 'index.html';
          } else {
              alert('Invalid email or password. Please try again.');
          }
      });
  }
});

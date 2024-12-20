document.addEventListener('DOMContentLoaded', () => {
  const authForm = document.getElementById('auth-form');
  const formTitle = document.getElementById('form-title');
  const authButton = document.getElementById('auth-btn');
  const switchLink = document.getElementById('switch-link');
  const confirmPasswordInput = document.getElementById('confirm-password');

  let isSignUp = false;

  switchLink.addEventListener('click', () => {
    isSignUp = !isSignUp;

    if (isSignUp) {
      formTitle.textContent = 'Create Your Account';
      authButton.textContent = 'Sign Up';
      confirmPasswordInput.classList.remove('hidden');
    } else {
      formTitle.textContent = 'Sign In to Your Account';
      authButton.textContent = 'Sign In';
      confirmPasswordInput.classList.add('hidden');
    }
  });

  // Redirect to chat page with random credentials
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Generate a random username
    const randomUsername = 'User' + Math.floor(Math.random() * 1000);
    
    // Redirect to chat page with random username
    window.location.href = 'chatbot/chatbot.html';
  });
});
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(signupForm);
            const username = formData.get('username');
            const password = formData.get('password');

            try {
                const response = await fetch('/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                if (response.ok) {
                    alert('User registered successfully. Please login.');
                    window.location.href = 'index.html';
                } else {
                    const error = await response.text();
                    alert('Signup error: ' + error);
                }
            } catch (error) {
                console.error('Signup error:', error);
                alert('An error occurred while signing up');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const username = formData.get('username');
            const password = formData.get('password');

            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                if (response.ok) {
                    window.location.href = 'dashboard.html';
                } else {
                    alert('Invalid username or password');
                }
            } catch (error) {
                console.error('Login error:', error);
                alert('An error occurred while logging in');
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Perform any necessary cleanup (e.g., clearing session data)
            window.location.href = '/login';
        });
    }
    
});

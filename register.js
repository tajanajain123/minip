<script type="module">
  // Import the functions you need from the SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyACVs1msy-VmYQAfkyZf-faHN6AAIBhI-c",
    authDomain: "login-example-1d023.firebaseapp.com",
    projectId: "login-example-1d023",
    storageBucket: "login-example-1d023.appspot.com",
    messagingSenderId: "956283212668",
    appId: "1:956283212668:web:0e89da91aa659e74888af9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Form Elements
  const signupForm = document.getElementById('signup-form');
  const signinForm = document.getElementById('signin-form');

  // Handle Signup
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Firebase Signup using Email and Password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('User signed up successfully!');
        // You can redirect or handle post-signup actions here.
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
  });

  // Handle Signin
  signinForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    // Firebase Signin using Email and Password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('User signed in successfully!');
        // Redirect to dashboard or homepage
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
  });
</script>

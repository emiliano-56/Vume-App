
    import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAoSe7Evs4G7kk8BQm7MYhNUi2j4Bw6G5Y",
authDomain: "vume-app.firebaseapp.com",
projectId: "vume-app",
storageBucket: "vume-app.appspot.com",
messagingSenderId: "1094619030202",
appId: "1:1094619030202:web:8c426018e29303bc9a9883",
measurementId: "G-8ML1XQJ5X0"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
  
    // Wait for authentication state changes
    onAuthStateChanged(auth, (user) => {
      if (!user && window.location.pathname.includes('main.html')) {
        // User is not authenticated and trying to access main.html, redirect to login.html
        window.location.href = "login.html";
      }
    });

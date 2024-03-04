

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  import { getFirestore, doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
  import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

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
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  // Fetch user's avatar on page load
  const fetchAvatar = async () => {
    console.log("Fetching avatar...");
    const user = auth.currentUser;
    if (user) {
      try {
        const userRef = doc(firestore, "users", user.uid);
        const userDocSnapshot = await getDoc(userRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          if (userData.avatarURL) {
            document.getElementById('avatarDropdown').src = userData.avatarURL;
          }
        }
      } catch (error) {
        console.error("Error fetching user avatar data:", error);
      }
    }
  };

  // Call fetchAvatar function on page load
  fetchAvatar();

  // Wait for authentication state changes
  onAuthStateChanged(auth, (user) => {
    // Fetch avatar upon authentication state change
    fetchAvatar();
  });

  // Handle avatar file selection
  const avatarInput = document.getElementById('avatarInput');
  avatarInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const storageRef = ref(storage, 'avatars/' + auth.currentUser.uid);
        const snapshot = await uploadBytesResumable(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);

        // Update avatar URL in Firestore
        await updateDoc(doc(firestore, "users", auth.currentUser.uid), {
          avatarURL: downloadURL
        });

        // Update displayed avatar directly to the newly uploaded one
        document.getElementById('avatarDropdown').src = downloadURL;
      } catch (error) {
        console.error("Error uploading avatar:", error);
      }
    }
  });

  // Logout button click event
  document.getElementById("logout").addEventListener("click", () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      window.location.href = "login.html"; // Redirect to login page
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  });

  // Delete avatar button click event
  document.getElementById("deleteAvatar").addEventListener("click", async () => {
    try {
      const storageRef = ref(storage, 'avatars/' + auth.currentUser.uid);
      await deleteObject(storageRef);
      // Update avatar URL in Firestore to null
      await updateDoc(doc(firestore, "users", auth.currentUser.uid), {
        avatarURL: null
      });
      document.getElementById('avatarDropdown').src = "./img/avatar-icon.jpg"; // Set default avatar
    } catch (error) {
      console.error("Error removing avatar:", error);
    }
  });


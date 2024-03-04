
  document.addEventListener("DOMContentLoaded", function() {
    showRandomGreeting();
  });

  function showRandomGreeting() {
    var greetings = [
      { text: "Hey there! Hope your day is as fabulous as you are!", image: "/toastImg/IMG-20240221-WA0037.jpg" },
      { text: "Hi! Remember to laugh today... it's the second best thing you can do with your mouth!", image: "/toastImg/IMG-20240221-WA0040.jpg" },
      { text: "Hello! Just a friendly reminder: You're awesome!", image: "/toastImg/IMG-20240221-WA0042.jpg" },
      { text: "Yo! Smile, it's the second best thing you can do with your lips!", image: "/toastImg/IMG-20240221-WA0047.jpg" },
      { text: "Hey! Hope your day is as amazing as pizza... and as relaxing as a sloth!", image: "/toastImg/IMG-20240221-WA0051.jpg" },
      { text: "What's up! Don't forget to be awesome... and to eat some chocolate!", image: "/toastImg/IMG-20240221-WA0052.jpg" },
      { text: "Greetings! Remember, life is short. Smile while you still have teeth!", image: "/toastImg/IMG-20240221-WA0054.jpg" },
      { text: "Hiya! Hope your day is filled with laughter, joy, and lots of coffee!", image: "/toastImg/IMG-20240221-WA0055.jpg" },
      { text: "Hey friend! You're one in a melon! Stay awesome!", image: "/toastImg/IMG-20240221-WA0057.jpg" },
      { text: "Greetings! Remember, life is short. Smile while you still have teeth!", image: "/toastImg/IMG-20240221-WA0066.jpg" },
      { text: "Hiya! Hope your day is filled with laughter, joy, and lots of coffee!", image: "/toastImg/IMG-20240221-WA0067.jpg" },
      { text: "Hey friend! You're one in a melon! Stay awesome!", image: "/toastImg/IMG-20240222-WA0000.jpg" }
    ];
 

    var randomIndex = Math.floor(Math.random() * greetings.length);
    var selectedGreeting = greetings[randomIndex];

    var greetingText = document.getElementById("greeting-text");
    var greetingImage = document.querySelector("#greetingModal img");

    greetingText.textContent = selectedGreeting.text;
    greetingImage.src = selectedGreeting.image;

    $('#greetingModal').modal('show');
  }

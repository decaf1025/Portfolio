// headerToggle
const headerToggleBtn = document.querySelector(".header-toggle");

headerToggleBtn.addEventListener("click", () => {
  document.querySelector("#header").classList.toggle("header-show");
  headerToggleBtn.classList.toggle("bi-x");
});

//ThemeToggle
const mode = document.getElementById("themeToggle");
const main = document.querySelector("main");
const icon = mode.querySelector("i");

mode.addEventListener("click", () => {
  if (main.classList.contains("lightMode")) {
    main.classList.replace("lightMode", "darkMode");
      mode.classList.replace("text-light", "text-dark");
      icon.classList.replace("bi-toggle-off", "bi-toggle-on");
  } else {
    main.classList.replace("darkMode", "lightMode");
      mode.classList.replace("text-dark", "text-light");
      icon.classList.replace("bi-toggle-on", "bi-toggle-off");
  }
});

// calculator
(function () {
  const display = document.getElementById("calc-display");
  const buttons = document.querySelectorAll("#calc-container .calc-btn");
  const delBtn = document.getElementById("back-space");
  const clearBtn = document.getElementById("calc-clear");
  const equalsBtn = document.getElementById("calc-equals");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      display.value += btn.dataset.value;
    });
  });

  delBtn.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
  });

  clearBtn.addEventListener("click", () => {
    display.value = "";
  });

  equalsBtn.addEventListener("click", () => {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  });
})();

// Contact Form
document.getElementById("submitBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  
  let userName = document.getElementById("userName").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phoneNumber").value.trim();
  let msg = document.getElementById("message").value.trim();

  let valid = true;

  //Reset messages
  document.getElementById("userError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("pnError").textContent = "";
  document.getElementById("msgError").textContent = "";
  document.getElementById("successMsg").textContent = "";

  if (userName === "") {
    document.getElementById("userError").textContent = "⚠ Please enter your name!";
    valid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent =
      "⚠ Please enter your email!";
    valid = false;
  }

  if (email !== "" && !email.includes("@")) {
    document.getElementById("emailError").textContent =
      "⚠ Please enter a valid email!";
    valid = false;
  }

  if (phone === "") {
    document.getElementById("pnError").textContent =
      "⚠ Please enter a phone number!";
    valid = false;
  } else if (phone.length < 11) {
    document.getElementById("pnError").textContent =
      "⚠ Phone Number must be at least 11 digits!";
    valid = false;
  }

  if (msg === "") {
    document.getElementById("msgError").textContent =
      "⚠ Please type a message!";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMsg").textContent = "Your message has been sent. Thank you!";
  }
});
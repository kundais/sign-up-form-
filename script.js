const btn = document.querySelector(".button");
const userName = document.getElementById("First-name");
const surname = document.getElementById("last-name");
const password = document.getElementById("passWord");
const email = document.getElementById("email");

const inputs = [userName, surname, password, email];

btn.addEventListener("click", function () {
  // create red border if the input boxes are empty

  for (const input of inputs) {
    if (input.value === "") {
      input.style.border = "2px solid red";
      //remove blue outline when on focus
      input.style.outline = "none";
    }
  }

  //create array to check if correct email address
  const arr = Array.from(email.value.toLowerCase().split("@"));
  if (arr[1] !== "host.tld") {
    email.placeholder = "email@host.tld";
    email.value = "";
  }
  inputs.value = "";
});

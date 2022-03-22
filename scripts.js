const containerInputs = document.querySelector(".main-container");
const inputEmail = document.querySelector("#email");
const inputMatter = document.querySelector("#asunto");
const inputMsg = document.querySelector("#mensaje");
const buttonSend = document.querySelector("#enviar");
const resetButton = document.querySelector("#resetear");
const spinner = document.querySelector(".spinner-border");
const success = document.querySelector(".success");

buttonSend.disabled = true;

function cargarEventListeners() {
  inputEmail.addEventListener("input", emailValidation);
  inputMatter.addEventListener("input", matterValidation);
  inputMsg.addEventListener("input", msgValidation);

  containerInputs.addEventListener("input", buttonToggleDisable);
  buttonSend.addEventListener("click", sendAnimation);
  resetButton.addEventListener("click", reset);
}

const emailValidation = () => {
  let emailValue = inputEmail.value;
  if (!emailValue.includes("@") || !emailValue.includes(".com")) {
    inputEmail.style.border = "solid 2px red";
  } else {
    inputEmail.style.border = "solid 2px green";
  }
};

const matterValidation = () => {
  let matterValue = inputMatter.value;
  if (matterValue == "") {
    inputMatter.style.border = "solid 2px red";
  } else {
    inputMatter.style.border = "solid 2px green";
  }
};

const msgValidation = () => {
  let msgValue = inputMsg.value;
  if (msgValue == "") {
    inputMsg.style.border = "solid 2px red";
  } else {
    inputMsg.style.border = "solid 2px green";
  }
};

const buttonToggleDisable = () => {
  if (
    inputEmail.value.includes("@") &&
    inputEmail.value.includes(".com") &&
    inputMatter.value !== "" &&
    inputMsg.value !== ""
  ) {
    buttonSend.disabled = false;
  } else {
    buttonSend.disabled = true;
  }
};

const sendAnimation = (e) => {
  e.preventDefault();
  spinner.classList.add("show");

  setInterval(function () {
    spinner.classList.remove("show");
  }, 2000);

  const myInterval = setInterval(function () {
    success.classList.add("show");
  }, 2100);

  setInterval(function () {
    clearInterval(myInterval);
  }, 2200);

};

const reset = (e) => {
  e.preventDefault();
  inputEmail.value = "";
  inputMatter.value = "";
  inputMsg.value = "";
  success.classList.remove("show");

  inputEmail.style.border = "solid 1px #e6e5e5";
  inputMatter.style.border = "solid 1px #e6e5e5";
  inputMsg.style.border = "solid 1px #e6e5e5";
};

cargarEventListeners();

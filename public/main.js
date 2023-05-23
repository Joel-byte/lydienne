/******************************  Animation Menu  **********************/
var menu = document.querySelector(".menu");
var Btn = document.querySelector(".main a img");
var header = document.querySelector(".head");
var header1 = document.querySelector(".head0");
var select = document.querySelector(".select3");
var adresse = document.querySelector(".contact-adresse");
var adresseSec = document.querySelector(".contact-adresseSec");

let width = screen.width;

// selectAgenceDeSh.addEventListener("change", function add() {
//   adresse.classList.toggle("contact-adresse1");
// });

Btn.addEventListener("click", function add() {
  var toggle = menu.classList.toggle("c1");

  if (width <= 500) {
    menu.style.marginTop = "57px";

    // header.style.marginBottom = "-89px";

    if (toggle == false) {
      // header.style.marginBottom = "-366px";
      // landingPage.style.marginTop = "0px";
    }

    //console.log(width);
  } else if (width > 500 || width <= 780) {
    header.style.height = "360px";
    header1.style.height = "119px";

    if (toggle == false) {
      header.style.height = "74px";
      header1.style.height = "110px";
    }
    //console.log(width);
  }
});

if (select) {
  select.addEventListener("change", function add() {
    if (this.value == 1) {
      adresseSec.style.display = "none";
      adresse.style.display = "block";
    } else if (this.value == 2) {
      adresse.style.display = "none";
      adresseSec.style.display = "block";
    } else {
      adresseSec.style.display = "none";
      adresse.style.display = "none";
    }
  });
}

/***************  Prestation image animation **************/

// i wanted to do it with javascript then i realise that i can do it with css.
var prestationFirstImage = document.querySelector(".prestation");

// prestationFirstImage.addEventListener('mouseover', increaseImage);
// prestationFirstImage.addEventListener("mouseout", decreaseImage);

// function increaseImage(){
//   console.log("mouseover");

// }

// function decreaseImage(){

//   console.log("mouseout");

// }

/***************  Contact page, sending Email **************/
//
// wanted to use this, but found another way that is down below
// const form = document.querySelector(".form1");
// formVerificatorStatus = document.querySelector(".formVerificator");
//
// function sendEmail() {
//
//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "username",
//     Password : "password",
//     To : 'jeanmarcjoel97@gmail.com',
//     From : document.querySelector(".contact11").value,
//     Subject : document.querySelector(".select1").value,
//     Body : "Name : " + document.querySelector(".contact01").value
//     + "<br> Email : " + document.querySelector(".contact11").value
//     + "<br> Message : " + document.querySelector(".contact32").value
// }).then(
//   message => alert("message sent successfully")
// );
//
// }

const form = document.querySelector(".form1");
formVerificatorStatus = document.querySelector(".formVerificator");

if (form) {
  form.onsubmit = (e) => {
    e.preventDefault();

    var fullname = $(".contact01");
    var entreprise = $(".contact11");
    var email = $(".contact11");
    var select1 = $(".select1");
    var select2 = $(".select2");
    var phone = $(".contact31");
    var message = $(".contact32");

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "form.php", true);

    if (
      isEmpty(fullname) &&
      isEmpty(entreprise) &&
      isEmpty(email) &&
      isEmpty(message) &&
      isEmpty(phone) &&
      isEmpty(select1) &&
      isEmpty(select2)
    ) {
      formVerificatorStatus.style.display = "block";
      xhr.responseType = "";
      xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          splited = xhr.response.split(" ");
          verificator = "";
          for (let key in splited) {
            if (splited[key] == "email") verificator += "email";
            else if (splited[key] == "address") verificator += "address";
            else if (splited[key] == "not") verificator += "not";
            if (verificator == "emailaddressnot") break;
          }

          console.log(verificator);

          if (verificator != "emailaddressnot") {
            formVerificatorStatus.innerHTML =
              "votre message a été envoyé avec succès !";
            console.log(
              "votre message a été envoyé avec succès du javascript !"
            );
            setTimeout(() => {
              form.reset();
              formVerificatorStatus.style.display = "none";
            }, 6000);
          } else {
            formVerificatorStatus.innerHTML =
              "votre message n'a pas pu être envoyé !";
            console.log("votre message n'a pas pu être envoyé du javascript !");
            setTimeout(() => {
              form.reset();
              formVerificatorStatus.style.display = "none";
            }, 6000);
          }
        }
      };
    }

    let formData = new FormData(form);
    xhr.send(formData);
  };
}

function isEmpty(caller) {
  if (caller.val() == "") {
    caller.css("border", "1px solid red");
    return false;
  }

  caller.css("border", "");

  return true;
}

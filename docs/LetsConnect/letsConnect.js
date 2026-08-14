// -------------------------
// Flatpickr
// -------------------------

flatpickr("#date", {
    enableTime: true,
    dateFormat: "d F Y, h:i K",
    minDate: "today",
    inline: true,
    time_24hr: false
});


//-------------------------
// Overlay

let popup = document.querySelector("#submitPopup");
let overlay = document.querySelector("#submitOverlay");
let xbtn = document.querySelector("#xbutton");

// -------------------------
// EmailJS
// -------------------------

emailjs.init({
    publicKey: "g8HV-03jEpvzhDv5D"
});


// -------------------------
// Form
// -------------------------

const form = document.querySelector("#leftSecForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

//     const termsAccepted = document.querySelector("#terms");

//     if (!termsAccepted.checked) {
//     // show your error popup
//    alert("Accept the T&C");
//     return;
//     }

    // Get normal fields
    const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const organization = document.querySelector("#organization").value;
    const budget = document.querySelector("#budget").value;
    const message = document.querySelector("#message").value;
    const date = document.querySelector("#date").value;
   



    // Get selected services
    const selectedServices = document.querySelectorAll(
        'input[name="services"]:checked'
    );

    const services = Array.from(selectedServices)
        .map(service => service.value)
        .join(", ");


     const termsAccepted = document.querySelector("#terms").checked
    ? "Yes"
    : "No";

    // Data we send to EmailJS
    const templateParams = {
        name: name,
        phone: phone,
        email: email,
        organization: organization,
        budget: budget,
        services: services,
        date: date,
        message: message,
        terms_accepted: termsAccepted
    };


    // Send email
    emailjs.send(
        "service_86ikhka",
        "template_1kqvwf3",
        templateParams
    )
    .then(function () {

        overlay.classList.add("show");
        popup.classList.add("show");

        form.reset();

    })
    .catch(function (error) {

        alert("Invalid");


    });

});


xbtn.addEventListener("click", ()=>{

    overlay.classList.remove("show");
    popup.classList.remove("show");

});
overlay.addEventListener("click", ()=>{
       
    overlay.classList.remove("show");
    popup.classList.remove("show");       

});
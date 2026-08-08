// -------------------------
// Flatpickr
// -------------------------

flatpickr("#date", {
    enableTime: true,
    dateFormat: "d F Y, h:i K",
    minDate: "today",
    time_24hr: false
});


// -------------------------
// EmailJS
// -------------------------

emailjs.init({
    publicKey: "g8HV-03jEpvzhDv5D"
});


// -------------------------
// Form
// -------------------------

const form = document.querySelector("#connect-form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get normal fields
    const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const organization = document.querySelector("#organization").value;
    const socialLink = document.querySelector("#social_link").value;
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


    // Data we send to EmailJS
    const templateParams = {
        name: name,
        phone: phone,
        email: email,
        organization: organization,
        social_link: socialLink,
        budget: budget,
        services: services,
        date: date,
        message: message
    };


    // Send email
    emailjs.send(
        "service_86ikhka",
        "template_1kqvwf3",
        templateParams
    )
    .then(function () {

        console.log("Email sent successfully!");

        alert("Thanks! We'll get back to you soon.");

        form.reset();

    })
    .catch(function (error) {

        console.error("Email failed:", error);

        alert("Something went wrong. Please try again.");

    });

});
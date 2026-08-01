// const container = document.querySelector("#title");
// const follower = document.querySelector("#glow");

// container.addEventListener("mousemove", (e) => {
//   const rect = container.getBoundingClientRect();

//   follower.style.left = `${e.clientX - rect.left}px`;
//   follower.style.top = `${e.clientY - rect.top}px`;
// });


//                      AI code below


// const container = document.querySelector("#title");
// const follower = document.querySelector("#glow");

// // 1. Store target mouse position & current follower position
// let mouseX = 0;
// let mouseY = 0;
// let followerX = 0;
// let followerY = 0;

// // 2. Control smoothness (0.05 = super smooth/sluggish, 0.2 = fast/snappy)
// const ease = 0.05;

// // 3. Just record the target mouse coordinates on move
// container.addEventListener("mousemove", (e) => {
//   const rect = container.getBoundingClientRect();
//   mouseX = e.clientX - rect.left;
//   mouseY = e.clientY - rect.top;
// });

// // 4. Smooth animation loop
// function animate() {
//   // Calculate distance remaining and move a fraction of it each frame
//   followerX += (mouseX - followerX) * ease;
//   followerY += (mouseY - followerY) * ease;

//   // Apply updated position
//   follower.style.left = `${followerX}px`;
//   follower.style.top = `${followerY}px`;

//   // Repeat on every browser frame (approx. 60–120fps)
//   requestAnimationFrame(animate);
// }

// // Start the loop
// animate();
window.addEventListener("load", function () {
    const loader = document.getElementById("lp-container");
    const content = document.getElementById("content");

    if (sessionStorage.getItem("loaderShown")) {
        // Skip loader
        loader.style.display = "none";
        content.style.display = "block";
    } else {
        // Show loader once
        sessionStorage.setItem("loaderShown", "true");

        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
        }, 6000); // Loader duration (2 seconds)

        
    }
});

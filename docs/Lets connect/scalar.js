function adjustZoomForScaling() {
    // Check if the device pixel ratio is exactly 1.25 (125% scaling)
    if (window.devicePixelRatio === 1.25) {
        // Apply 80% zoom to the body to counteract the 125% scale
        // (1.25 * 0.8 = 1.0, bringing it back to "100%" visual size)
        document.body.style.zoom = "80%";
    } else {
        // Ensure it remains normal for 100% or any other display scale
        document.body.style.zoom = "100%";
    }
}

// Run the function when the page initially loads
window.addEventListener('load', adjustZoomForScaling);

// Optional: Run it again if the user resizes the window or moves the browser to a different monitor with a different scale
window.addEventListener('resize', adjustZoomForScaling);
document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading time (you can remove this in a real application)
    setTimeout(function () {
        document.querySelector(".loading-screen").style.display = "none";
        document.body.style.overflow = "auto"; // Show scrollbars
    }, 2000); // Adjust the delay as needed
});

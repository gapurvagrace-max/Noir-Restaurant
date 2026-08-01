// Welcome message
console.log("Welcome to Harikesh Restaurant");

// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        alert("This section will be added soon!");
    });
});

// Reserve button
const reserveBtn = document.querySelector(".hero button");

reserveBtn.addEventListener("click", function() {
    alert("🍽️ Thank you for choosing Harikesh Restaurant!\nReservation feature coming soon.");
});

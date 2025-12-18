function goToLaunch() {
    window.location.href = "launch.html";
}

window.onload = () => {
    const left = document.querySelector(".curtain.left");
    const right = document.querySelector(".curtain.right");
    const thankYou = document.getElementById("thankYou");

    if (!left || !right) return;

    // Curtain reveal
    setTimeout(() => {
        left.classList.add("open");
        right.classList.add("open");
    }, 500);

    // Show Thank You
    setTimeout(() => {
        thankYou.classList.remove("hidden");

        // Hide after 1 min
        setTimeout(() => {
            thankYou.style.display = "none";
        }, 60000);
    }, 2500);
};

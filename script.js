window.onscroll = function() {
    var backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block"; // Zeigt den Button an
    } else {
        backToTopButton.style.display = "none"; // Versteckt den Button
    }
};

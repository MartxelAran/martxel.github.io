document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const sections = document.querySelectorAll(".section");
            sections.forEach(section => {
                section.classList.remove("active");
            });
            targetElement.classList.add("active");
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });
});
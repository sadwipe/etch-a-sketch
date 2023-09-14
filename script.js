const colors = document.querySelectorAll(".color");

colors.forEach(color => {
    color.style.cssText = `background-color: ${color.getAttribute("value")}`;
})
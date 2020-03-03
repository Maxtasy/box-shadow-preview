document.querySelectorAll("input").forEach(element => {
    element.addEventListener("input", inputChanged);
});

function inputChanged(e) {
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value);
}
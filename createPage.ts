(function() {
    const smallCard = document.getElementById("smallCardID")!;
    const arrowDown = document.getElementById("arrowDownID")!;

    arrowDown.addEventListener("click", () => {
        smallCard.classList.toggle("hidden");
    })
})();
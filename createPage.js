(function () {
    var smallCard = document.getElementById("smallCardID");
    var arrowDown = document.getElementById("arrowDownID");
    arrowDown.addEventListener("click", function () {
        smallCard.classList.toggle("hidden");
    });
})();

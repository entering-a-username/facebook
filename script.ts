(function() {
    const card = document.getElementById("cardID")!;
    const addAccount = document.getElementById("addAccountID")!;
    const cancelAdding = document.getElementById("cancelAddingID")!;


    addAccount.addEventListener("click", function() {
        card.classList.remove("hidden");
    })

    cancelAdding.addEventListener("click", function() {
        card.classList.add("hidden");
    })

    

    
})();
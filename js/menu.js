(() => {
    const refs = {
        moveMenuBtn: document.querySelector("[data-menu-move]"),
        menu: document.querySelector("[data-menu]"),
        body: document.querySelector("body"),
        navList: document.querySelector(".nav__list"),
    };

    refs.moveMenuBtn.addEventListener("click", toggleMenu);
    refs.navList.addEventListener("click", removeMenu);

    function toggleMenu() {
        refs.menu.classList.toggle("is-hidden");
        refs.body.classList.toggle("no-scroll");
    }
    function removeMenu() {
        refs.menu.classList.add("is-hidden");
        refs.body.classList.toggle("no-scroll");
    }
})();

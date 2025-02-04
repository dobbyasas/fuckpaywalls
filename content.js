const elementsToRemove = [
    "#showroom_panel", 
    "#Redesign2024_ListPages_ATF_leaderboard_728x90",
    "#menu-plus",
    "#showroom",
    "#Redesign_ATF_tab_page_728x90",
    "#text-showroom",
    ".rq25k",
    "#hide-layer-overlay",
    ".Cip2pk",
    ".Cuqdk",
    ".Cto1rx",
    ".D5an6"
];

function removeElements() {
    elementsToRemove.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });
}

removeElements();

const observer = new MutationObserver(removeElements);
observer.observe(document.body, { childList: true, subtree: true });

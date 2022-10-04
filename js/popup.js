// Initialize button with user's preferred color
let options_btn = document.getElementById("options_btn");

// When the button is clicked, inject setPageBackgroundColor into current page
options_btn.addEventListener("click", async () => {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
});
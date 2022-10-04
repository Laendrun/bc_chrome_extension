// Initialize button with user's preferred color
let options_btn = document.getElementById("options_btn");
let password_lnk = document.getElementById("change_password_lnk");

chrome.storage.sync.get(["is_active_pass_change"], function(items) {
    let is_active = items.is_active_pass_change;
    if (is_active)
    {
        password_lnk.removeAttribute("hidden");
    }
});

options_btn.addEventListener("click", async () => {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
});
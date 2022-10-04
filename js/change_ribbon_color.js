let ribbonColor;
let isActive;

chrome.storage.sync.get(['ribbonColor', 'colorizationIsActive'], function(items) {
    ribbonColor = items.ribbonColor;
    isActive = items.colorizationIsActive;
    if (isActive)
    {
        setTimeout(function () {
            let ribbon = document.getElementById("product-menu-bar");
            ribbon.style.backgroundColor = ribbonColor;
        }, 5000);
    }
});


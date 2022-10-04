// Saves options to chrome.storage
function save_options() {
    let color = document.getElementById('color').value;
    let isActive = document.getElementById('ribbon_color_option').checked;
    let status = document.getElementById('status');
    chrome.storage.sync.set({
      ribbonColor: color,
      colorizationIsActive: isActive,
    }, function() {
      // Update status to let user know options were saved.
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 1000);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      ribbonColor: 'Red',
      colorizationIsActive: false
    }, function(items) {
      console.log(items.colorizationIsActive);
      document.getElementById('color').value = items.ribbonColor;
      document.getElementById('ribbon_color_option').checked = items.colorizationIsActive;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click', save_options);
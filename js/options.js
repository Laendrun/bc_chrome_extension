// Saves options to chrome.storage
function save_options() {
    // Activated functions
    let is_active_ribbon_col = document.getElementById('func_ribbon_col').checked;
    let is_active_pass_change = document.getElementById('func_pass_change').checked;
    let is_active_sales_infos = document.getElementById('func_sales_infos').checked;
    let is_active_purch_infos = document.getElementById('func_purch_infos').checked;
    // Ribbon Color options
    let ribbon_col_color = document.getElementById('ribbon_col_color').value;
    // Sales infos options
    
    // Purch infos options

    let status = document.getElementById('status');
    chrome.storage.sync.set({
      ribbon_col_color: ribbon_col_color,
      is_active_ribbon_col: is_active_ribbon_col,
      is_active_pass_change: is_active_pass_change,
      is_active_sales_infos: is_active_sales_infos,
      is_active_purch_infos: is_active_purch_infos,
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
    // Use default values.
    chrome.storage.sync.get({
      ribbon_col_color: 'Red',
      is_active_ribbon_col: false,
      is_active_pass_change: false,
      is_active_sales_infos: false,
      is_active_purch_infos: false,
    }, function(items) {
      document.getElementById('ribbon_col_color').value = items.ribbon_col_color;

      document.getElementById('func_ribbon_col').checked = items.is_active_ribbon_col;
      document.getElementById('func_pass_change').checked = items.is_active_pass_change;
      document.getElementById('func_sales_infos').checked = items.is_active_sales_infos;
      document.getElementById('func_purch_infos').checked = items.is_active_purch_infos;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click', save_options);
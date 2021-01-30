function mean(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

/** 
 * Finds the percent difference between two cells
 * 
 * @param {number} cell1 The first number
 * @param {number} cell2 The second number
 * @customfunction
*/
function PERCENTDIFFERENCE(cell1, cell2) {
  return Math.abs(cell1 - cell2) / mean([cell1, cell2]);
}

/** 
 * Finds the percent error between two cells
 * 
 * @param {number} actual The actual (excepted) value
 * @param {number} experimental The experimental value
 * @customfunction
*/
function PERCENTERROR(actual, experimental) {
  return Math.abs(actual - experimental) / actual;
}

/**
 * Creates a new UI element from `Sidebar.html` and shows it.
 */
function showSidebar() {
  /**
   * Create UI from `Sidebar.html` and set the sidebar title.
   */
  var ui = HtmlService.createHtmlOutputFromFile('Sidebar').setTitle('Helpful Functions Addon');
  /**
   * Show UI as part of the application sidebar.
   */
  SpreadsheetApp.getUi().showSidebar(ui);
}

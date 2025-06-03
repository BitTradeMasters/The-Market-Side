// Placeholder JS file (for future interaction)
console.log("Investment site loaded.");
// Initial counts
let registered = 348;
let total = 1265;

function updateCounts() {
  const increment = Math.floor(Math.random() * 2) + 1; // 1 or 2
  registered += increment;
  total += increment;

  document.getElementById("registeredCount").textContent = registered;
  document.getElementById("totalCount").textContent = total;
}

// First update after 30 sec, then every 30 sec
setInterval(updateCounts, 30000);

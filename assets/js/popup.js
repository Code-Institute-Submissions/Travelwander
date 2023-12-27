

setTimeout(function() {
    document.getElementById("popup-container").style.display = "block";
  }, 7000);  // Show the popup after 7 seconds
  
  document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("popup-container").style.display = "none";
  });
 
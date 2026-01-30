function sendSOS() {
  document.getElementById("status").innerHTML =
    "🚨 SOS Sent to Emergency Contacts with Location!";
}

function callPolice() {
  window.location.href = "tel:100";
}

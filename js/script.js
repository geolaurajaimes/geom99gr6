/* https://www.w3schools.com/bootstrap/bootstrap_ref_js_dropdown.asp */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dropdownBtn").addEventListener("click", toggleDropdown);
});

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

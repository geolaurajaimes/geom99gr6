/* https://www.w3schools.com/bootstrap/bootstrap_ref_js_dropdown.asp */
function toggleDropdown(className) {
    var dropdowns = document.getElementsByClassName(className);
    for (var i = 0; i < dropdowns.length; i++) {
        var dropdown = dropdowns[i];
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    }
}

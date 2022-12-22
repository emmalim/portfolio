/* FILE NAME: portfolio.js
js file for Emma's portfolio
*/

/*clicking on the button will toggle btwn hiding/showing the  nav menu*/
function toggleNav() {
    document.getElementbyId("dropdownMenu").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('navButton')) {
        var dropdown = document.getElementById("dropdownMenu");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




























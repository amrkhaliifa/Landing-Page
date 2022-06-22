/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const allSection = Array.from(document.querySelectorAll("section"));
const navigationBar = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
// function to create Nav Bur 
function createListNav() {
    for (section of allSection) {
        sName = section.getAttribute("data-nav");
        sLink = section.getAttribute("id");
        // create list 
        let createList = document.createElement("li");
        createList.innerHTML = `<li><a class="menu__link" href="#${sLink}" ${sName}>${section.dataset.nav}</a></li>`;
        navigationBar.appendChild(createList);

    }
}




/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

createListNav();

// Add class 'active' to section when near top of viewport
window.onscroll = function() {
    document.querySelectorAll("section").forEach(function(active) {
        if (
            // Set sections as active
            active.getBoundingClientRect().top >= -200 && active.getBoundingClientRect().top <= 200
        ) {
            // add clas active
            active.classList.add("your-active-class");
        } else {
            // remove clas active
            active.classList.remove("your-active-class");
        }

    });
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */



// Scroll to section on link click
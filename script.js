/*==========================================================
    SECTION 1 - INITIALIZATION & DOM ELEMENTS
==========================================================*/

"use strict";

/*--------------------------
    DOM ELEMENTS
---------------------------*/

const body = document.body;

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

const themeToggle = document.querySelector(".theme-toggle");

const searchInput = document.querySelector(".search-box input");

const searchButton = document.querySelector(".search-box button");

const cartCounter = document.querySelector(".cart-count");

const buyButtons = document.querySelectorAll(".buy-btn");

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

const newsletterForm = document.querySelector(".newsletter-form");

const heroSection = document.querySelector(".hero");

const prevSlide = document.querySelector(".prev-slide");

const nextSlide = document.querySelector(".next-slide");

const whatsappButton = document.querySelector(".whatsapp-button");

/*--------------------------
    GLOBAL VARIABLES
---------------------------*/

let cartItems = 0;

let currentSlide = 0;

let darkMode = false;

/*--------------------------
    HELPER FUNCTIONS
---------------------------*/

// Update cart counter

function updateCartCounter(){

    if(cartCounter){

        cartCounter.textContent = cartItems;

    }

}

// Display notifications

function showMessage(message){

    alert(message);

}

/*--------------------------
    INITIALIZE WEBSITE
---------------------------*/

document.addEventListener("DOMContentLoaded", () => {

    updateCartCounter();

    console.log("Greby Website Loaded Successfully!");

});/*==========================================================
    SECTION 2 - NAVIGATION, MOBILE MENU & SEARCH
==========================================================*/

/*--------------------------
    MOBILE MENU
---------------------------*/

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/*--------------------------
    SEARCH FUNCTION
---------------------------*/

function performSearch(){

    const query = searchInput.value.trim();

    if(query === ""){

        showMessage("Please enter something to search.");

        return;

    }

    console.log(`Searching for: ${query}`);

    showMessage(`Searching for "${query}"`);

}

if(searchButton){

    searchButton.addEventListener("click", performSearch);

}

if(searchInput){

    searchInput.addEventListener("keypress", (event) => {

        if(event.key === "Enter"){

            performSearch();

        }

    });

}

/*--------------------------
    CATEGORIES BUTTON
---------------------------*/

const categoriesButton = document.querySelector(".categories-btn");

if(categoriesButton){

    categoriesButton.addEventListener("click", () => {

        showMessage("Categories menu will open here.");

    });

}

/*--------------------------
    NAVIGATION LINK HIGHLIGHT
---------------------------*/

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigationLinks.forEach(item => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});

/*--------------------------
    CLOSE MOBILE MENU
---------------------------*/

document.addEventListener("click", (event) => {

    if(
        navLinks &&
        menuToggle &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ){

        navLinks.classList.remove("active");

    }

});
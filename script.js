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

});/*==========================================================
    SECTION 3 - HERO SLIDER
==========================================================*/

/*--------------------------
    HERO SLIDES
---------------------------*/

const heroSlides = [

    {
        title: "Shop Smarter.<br>Save More.",
        text: "Discover amazing products at unbeatable prices. Fast delivery, secure payments and quality you can trust.",
        image: "images/hero.png"
    },

    {
        title: "New Arrivals Every Week",
        text: "Explore the latest products added to our collection.",
        image: "images/hero2.png"
    },

    {
        title: "Big Discounts Await",
        text: "Save more with exclusive deals and limited-time offers.",
        image: "images/hero3.png"
    }

];

/*--------------------------
    HERO ELEMENTS
---------------------------*/

const heroTitle = document.querySelector(".hero-text h1");

const heroDescription = document.querySelector(".hero-text p");

const heroImage = document.querySelector(".hero-image img");

/*--------------------------
    UPDATE HERO
---------------------------*/

function updateHero(){

    if(!heroTitle || !heroDescription || !heroImage){

        return;

    }

    heroTitle.innerHTML = heroSlides[currentSlide].title;

    heroDescription.textContent = heroSlides[currentSlide].text;

    heroImage.src = heroSlides[currentSlide].image;

}

/*--------------------------
    NEXT SLIDE
---------------------------*/

function nextHeroSlide(){

    currentSlide++;

    if(currentSlide >= heroSlides.length){

        currentSlide = 0;

    }

    updateHero();

}

/*--------------------------
    PREVIOUS SLIDE
---------------------------*/

function previousHeroSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = heroSlides.length - 1;

    }

    updateHero();

}

/*--------------------------
    BUTTON EVENTS
---------------------------*/

if(nextSlide){

    nextSlide.addEventListener("click", nextHeroSlide);

}

if(prevSlide){

    prevSlide.addEventListener("click", previousHeroSlide);

}

/*--------------------------
    AUTO PLAY
---------------------------*/

setInterval(() => {

    nextHeroSlide();

}, 5000);

/*--------------------------
    LOAD FIRST SLIDE
---------------------------*/

updateHero();/*==========================================================
    SECTION 4 - DARK MODE, SHOPPING CART & WISHLIST
==========================================================*/

/*--------------------------
    DARK MODE
---------------------------*/

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        darkMode = !darkMode;

        body.classList.toggle("dark-mode");

        const icon = themeToggle.querySelector("i");

        if(icon){

            if(darkMode){

                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");

            }else{

                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");

            }

        }

    });

}

/*--------------------------
    SHOPPING CART
---------------------------*/

buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartItems++;

        updateCartCounter();

        showMessage("Product added to cart!");

    });

});

/*--------------------------
    WISHLIST
---------------------------*/

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const icon = button.querySelector("i");

        if(icon){

            if(button.classList.contains("active")){

                icon.classList.remove("fa-regular");

                icon.classList.add("fa-solid");

                showMessage("Added to wishlist!");

            }else{

                icon.classList.remove("fa-solid");

                icon.classList.add("fa-regular");

                showMessage("Removed from wishlist!");

            }

        }

    });

});

/*--------------------------
    BUY BUTTON ANIMATION
---------------------------*/

buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.textContent = "Added ✓";

        button.disabled = true;

        setTimeout(() => {

            button.textContent = "Buy Now";

            button.disabled = false;

        }, 2000);

    });

});

/*--------------------------
    RESET CART
---------------------------*/

function resetCart(){

    cartItems = 0;

    updateCartCounter();

}

window.resetCart = resetCart;/*==========================================================
    SECTION 5 - NEWSLETTER, SCROLL EFFECTS & FINAL SETUP
==========================================================*/

/*--------------------------
    NEWSLETTER FORM
---------------------------*/

if(newsletterForm){

    newsletterForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const email = newsletterForm.querySelector("input").value.trim();

        if(email === ""){

            showMessage("Please enter your email address.");

            return;

        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email)){

            showMessage("Please enter a valid email address.");

            return;

        }

        showMessage("Thank you for subscribing!");

        newsletterForm.reset();

    });

}

/*--------------------------
    BACK TO TOP BUTTON
---------------------------*/

const backToTop = document.createElement("button");

backToTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);

backToTop.style.display = "none";

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.style.display = "flex";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*--------------------------
    HEADER SHADOW ON SCROLL
---------------------------*/

const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {

    if(header){

        if(window.scrollY > 50){

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

        }else{

            header.style.boxShadow = "";

        }

    }

});

/*--------------------------
    PAGE LOADED
---------------------------*/

window.addEventListener("load", () => {

    console.log("Greby Website Ready!");

});

/*--------------------------
    FINAL INITIALIZATION
---------------------------*/

updateCartCounter();

updateHero();
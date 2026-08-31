// ===============================
// PLACES DATA
// ===============================

const places = [
    {
        name: "Archaeological Museum Ropar",
        category: "Heritage",
        description: "A beautiful heritage museum showcasing the history of Ropar.",
        details: "The Archaeological Museum Ropar is a must-visit destination for history enthusiasts. It houses artifacts, sculptures and exhibits that provide insights into the rich cultural heritage of the region.",
        location: "Ropar, Punjab, India",
        rating: 4.8,
        photos: [
            "museum1.jpg",
            "museum2.jpg",
            "museum3.jpg",
            "museum4.jpg"
        ],
        image: "place1.jpg"
    },

    {
        name: "Satluj River",
        category: "Nature",
        description: "A beautiful river destination with peaceful surroundings.",
        details: "The Satluj River is a serene and picturesque destination. Visitors can enjoy peaceful walks, beautiful views, photography and relaxing moments near the river.",
        location: "Ropar, Punjab, India",
        rating: 4.7,
        photos: [
            "satluj1.jpg",
            "satluj2.jpg",
            "satluj3.jpg",
            "satluj4.jpg"
        ],
        image: "place2.jpg"
    },

    {
        name: "Gurudwara Bhatha Sahib",
        category: "Historical",
        description: "A famous historical and spiritual destination of Punjab.",
        details: "Gurudwara Bhatha Sahib is a revered historical and spiritual site known for its peaceful atmosphere, beautiful architecture and rich Sikh heritage.",
        location: "Ropar, Punjab, India",
        rating: 4.9,
        photos: [
            "bhatha1.jpg",
            "bhatha2.jpg",
            "bhatha3.jpg",
            "bhatha4.jpg"
        ],
        image: "place3.jpg"
    }
];


// ===============================
// DISPLAY PLACES
// ===============================

const container = document.getElementById("placesContainer");

function displayPlaces(list = places) {

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No places found 😔</h3>
                <p>Try another place or category.</p>
            </div>
        `;
        return;
    }

    list.forEach(function(place) {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <div class="card-image"
                 style="background-image: url('${place.image}')">
            </div>

            <div class="card-content">

                <span class="category">
                    ${place.category}
                </span>

                <h3>${place.name}</h3>

                <p>${place.description}</p>

                <button onclick="showDetails('${place.name}')">
                    View Details →
                </button>

                <button onclick="openPlaceGallery('${place.name}')">
                    📸 More Photos
                </button>

            </div>
        `;

        container.appendChild(card);
    });
}


// Show places when page loads
displayPlaces();


// ===============================
// SEARCH & FILTER
// ===============================

function filterPlaces(category) {

    const searchBox =
        document.getElementById("searchPlace");

    const searchText = searchBox
        ? searchBox.value.toLowerCase().trim()
        : "";

    const filteredPlaces = places.filter(function(place) {

        const matchesCategory =
            category === "All" ||
            place.category.toLowerCase() ===
            category.toLowerCase();

        const matchesSearch =
            place.name.toLowerCase().includes(searchText) ||
            place.category.toLowerCase().includes(searchText) ||
            place.description.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    displayPlaces(filteredPlaces);
}


// Live search
const searchPlace =
    document.getElementById("searchPlace");

if (searchPlace) {

    searchPlace.addEventListener("input", function() {

        filterPlaces("All");

    });
}


// ===============================
// PLACE DETAILS POPUP
// ===============================

function showDetails(placeName) {

    const place = places.find(function(p) {
        return p.name === placeName;
    });

    if (!place) return;

    const popup = document.createElement("div");

    popup.className = "details-popup";

    popup.innerHTML = `
        <div class="details-box">

            <button
                class="details-close"
                onclick="this.closest('.details-popup').remove()">
                ×
            </button>

            <img src="${place.image}"
                 alt="${place.name}">

            <span class="category">
                ${place.category}
            </span>

            <h2>${place.name}</h2>

            <p>
                ${place.details}
            </p>

            <div class="rating">
                ⭐ ${place.rating} / 5
            </div>

            <p>
                📍 <strong>Location:</strong>
                ${place.location}
            </p>

            <a
                class="map-button"
                href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + " " + place.location)}"
                target="_blank">
                📍 View on Google Maps
            </a>

            <h3>📸 More Photos</h3>

            <div class="more-photos">

                ${place.photos.map(function(photo) {
                    return `
                        <img
                            src="${photo}"
                            alt="${place.name}"
                            onclick="openPhotoViewer('${photo}')">
                    `;
                }).join("")}

            </div>

        </div>
    `;

    document.body.appendChild(popup);
}


// ===============================
// PLACE GALLERY
// ===============================

function openPlaceGallery(placeName) {

    const place = places.find(function(p) {
        return p.name === placeName;
    });

    if (!place) return;

    const gallery =
        document.getElementById("placeGallery");

    const title =
        document.getElementById("galleryTitle");

    const images =
        document.getElementById("galleryImages");

    if (!gallery || !title || !images) return;

    title.textContent = place.name;

    images.innerHTML = "";

    place.photos.forEach(function(photo) {

        const img = document.createElement("img");

        img.src = photo;
        img.alt = place.name;

        img.onclick = function() {
            openPhotoViewer(photo);
        };

        images.appendChild(img);
    });

    gallery.classList.add("show");
}


// Close gallery
function closePlaceGallery() {

    const gallery =
        document.getElementById("placeGallery");

    if (gallery) {
        gallery.classList.remove("show");
    }
}


// ===============================
// PHOTO VIEWER
// ===============================

function openPhotoViewer(photo) {

    const viewer = document.createElement("div");

    viewer.className = "photo-viewer";

    viewer.innerHTML = `
        <button
            class="photo-close"
            onclick="this.parentElement.remove()">
            ×
        </button>

        <img src="${photo}" alt="Place Photo">
    `;

    document.body.appendChild(viewer);
}


// ===============================
// ESC KEY
// ===============================

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {

        const gallery =
            document.getElementById("placeGallery");

        if (gallery) {
            gallery.classList.remove("show");
        }

        const popup =
            document.querySelector(".details-popup");

        if (popup) {
            popup.remove();
        }

        const viewer =
            document.querySelector(".photo-viewer");

        if (viewer) {
            viewer.remove();
        }
    }

});
// ===============================
// HOME IMAGE SLIDER
// ===============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    if (slides.length === 0) return;

    // Loop slides
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Remove active
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active-dot");
    });

    // Add active
    slides[currentSlide].classList.add("active");

    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active-dot");
    }
}


// NEXT BUTTON
const nextButton = document.querySelector(".next-slide");

if (nextButton) {
    nextButton.addEventListener("click", function() {
        showSlide(currentSlide + 1);
    });
}


// PREVIOUS BUTTON
const prevButton = document.querySelector(".prev-slide");

if (prevButton) {
    prevButton.addEventListener("click", function() {
        showSlide(currentSlide - 1);
    });
}


// DOTS
dots.forEach(function(dot, index) {

    dot.addEventListener("click", function() {
        showSlide(index);
    });

});


// AUTO SLIDE
setInterval(function() {
    showSlide(currentSlide + 1);
}, 5000);


// START
showSlide(0);
// ===============================
// WEBSITE CREDIT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const footer = document.querySelector("footer");

    if (footer) {

        const credit = document.createElement("p");

        credit.className = "developer-credit";

        credit.innerHTML =
            "Designed & Developed by <strong>Rupinder Kaur</strong> ❤️";

        footer.appendChild(credit);
    }

});

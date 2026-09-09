// ===============================
// PLACES DATA
// ===============================

const places = [ 
    {
        name:"District Hospitals Roper",
        category:"Hospitals",
        description:"Government hospital providing healthcare services in roper.",
        details: "District Hospital rupnagar is located near Bela Chowk ,Rupnagar.",
        location:"Bela Chowk, Rupnagar, Punjab, India",
        rating:4.5,
        photos:[
            "images/hospital1.jpg",
            "images/hospital2.jpg",
            "images/hospital3.jpg",
            "images/hospital4.jpg",
            "images/hospital5.jpg",
            "images/hospital6.jpg",
            "images/hospital7.jpg",
            "images/hospital8.jpg",
            "images/hospital9.jpg",
            "images/hospital10.jpg"
        ],
        image: "images/hospital5.jpg"
    },
    {
    name: "Civil Hospital Rupnagar",
    category: "Hospitals",
    description: "Government hospital serving the people of Rupnagar.",
    details: "Civil Hospital Rupnagar is a government healthcare facility located in Ali Mohalla, Rupnagar.",
    location: "Ali Mohalla, Rupnagar, Punjab, India",
    rating: 3.2,
    photos: [
        "images/civil1.jpg",
        "images/civil2.jpg",
        "images/civil3.jpg",
        "images/civil4.jpg"
    ],
    image: "images/civil1.jpg"
},

{
    name: "Sangha Multispeciality Hospital",
    category: "Hospitals",
    description: "A multispeciality hospital providing healthcare services in Rupnagar.",
    details: "Sangha Multispeciality Hospital is located in Giani Zail Singh Nagar, Rupnagar.",
    location: "Giani Zail Singh Nagar, Rupnagar, Punjab, India",
    rating: 4.6,
    photos: [
        "images/sangha1.jpg",
        "images/sangha2.jpg",
        "images/sangha3.jpg",
        "images/sangha4.jpg"
    ],
    image: "images/sangha1.jpg"
},

{
    name: "Baweja Multispeciality Hospital",
    category: "Hospitals",
    description: "A private multispeciality hospital in Rupnagar.",
    details: "Baweja Multispeciality Hospital is located opposite Civil Hospital in Preet Colony, Rupnagar.",
    location: "Preet Colony, Rupnagar, Punjab, India",
    rating: 4.3,
    photos: [
        "images/baweja1.jpg",
        "images/baweja2.jpg",
        "images/baweja3.jpg",
        "images/baweja4.jpg"
    ],
    image: "images/baweja1.jpg"
},

{
    name: "Pannu Eye and Gynae Hospital",
    category: "Hospitals",
    description: "Specialized hospital for eye and women's healthcare.",
    details: "Pannu Eye and Gynae Hospital is located on College Road, Rupnagar.",
    location: "3141 College Road, Rupnagar, Punjab, India",
    rating: 4.9,
    photos: [
        "images/pannu1.jpg",
        "images/pannu2.jpg",
        "images/pannu3.jpg",
        "images/pannu4.jpg"
    ],
    image: "images/pannu1.jpg"
},

{
    name: "Parmar Hospital",
    category: "Hospitals",
    description: "A healthcare facility located on Bela Road, Rupnagar.",
    details: "Parmar Hospital provides medical services in Rupnagar and is located on Bela Road.",
    location: "Bela Road, Rupnagar, Punjab, India",
    rating: 4.6,
    photos: [
        "images/parmar1.jpg",
        "images/parmar2.jpg",
        "images/parmar3.jpg",
        "images/parmar4.jpg"
    ],
    image: "images/parmar1.jpg"
},
{
    name: "Aggarwal Hospital",
    category: "Hospitals",
    description: "A hospital providing healthcare services in Rupnagar.",
    details: "Aggarwal Hospital is located in Giani Zail Singh Nagar, near Markfed Market, Rupnagar.",
    location: "Giani Zail Singh Nagar, Rupnagar, Punjab, India",
    phone: "+91 98777 00827",
    rating: 4.9,
    photos: [
        "images/aggarwal1.jpg",
        "images/aggarwal2.jpg",
        "images/aggarwal3.jpg",
        "images/aggarwal4.jpg"
    ],
    image: "images/aggarwal1.jpg"
},

{
    name: "Bijendra Multispeciality Hospital",
    category: "Hospitals",
    description: "A multispeciality hospital and trauma care facility in Rupnagar.",
    details: "Bijendra Multispeciality Hospital is located at Railon Kalan Chowk, Bypass Road, Rupnagar.",
    location: "Railon Kalan Chowk, Bypass Road, Rupnagar, Punjab, India",
    phone: "+91 1881 500921",
    rating: 4.2,
    photos: [
        "images/bijendra1.jpg",
        "images/bijendra2.jpg",
        "images/bijendra3.jpg",
        "images/bijendra4.jpg"
    ],
    image: "images/bijendra1.jpg"
},

{
    name: "Simran Hospital",
    category: "Hospitals",
    description: "A hospital located near Bhatha Sahib Chowk, Rupnagar.",
    details: "Simran Hospital is located on Chandigarh Road near Gurudwara Bhatha Sahib Chowk.",
    location: "Chandigarh Road, Rupnagar, Punjab, India",
    phone: "+91 82880 00738",
    rating: 5.0,
    photos: [
        "images/simran1.jpg",
        "images/simran2.jpg",
        "images/simran3.jpg",
        "images/simran4.jpg"
    ],
    image: "images/simran1.jpg"
},

{
    name: "SND Foundation Hospital",
    category: "Hospitals",
    description: "A multispeciality hospital on Bela Road, Rupnagar.",
    details: "SND Foundation Hospital is located opposite HP Petrol Pump on Bela Road, Rupnagar.",
    location: "Bela Road, Rupnagar, Punjab, India",
    phone: "01881-222102",
    rating: 4.3,
    photos: [
        "images/snd1.jpg",
        "images/snd2.jpg",
        "images/snd3.jpg",
        "images/snd4.jpg"
    ],
    image: "images/snd1.jpg"
},

{
    name: "Choudhary Hospital",
    category: "Hospitals",
    description: "A hospital located on Bela Road in Rupnagar.",
    details: "Choudhary Hospital is located near Vishal Mega Mart on Bela Road, Rupnagar.",
    location: "Bela Road, Rupnagar, Punjab, India",
    phone: "+91 98883 72166",
    rating: 4.9,
    photos: [
        "images/choudhary1.jpg",
        "images/choudhary2.jpg",
        "images/choudhary3.jpg",
        "images/choudhary4.jpg"
    ],
    image: "images/choudhary1.jpg"
},
{
   
    name: "Hungry Point",
    category: "Food",
    description: "A popular food point serving fast food and snacks.",
    details: "Hungry Point is a popular food point in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.5,
    photos: [
        
        "images/hungry1.jpg",
        "images/hungry2.jpg",
        "images/hungry3.jpg",
        "images/hungry4.jpg"
    ],
    image: "images/hungry.jpg"

},

{
    
    name: "Kafla Point",
    category: "Food",
    description: "A popular food point in Chamkaur Sahib.",
    details: "Kafla Point is a food point located in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.5,
    photos: [
        "images/kafla1.jpg",
        "images/kafla2.jpg",
        "images/kafla3.jpg",
        "images/kafla4.jpg"
    ],
    image: "images/kafla.jpg"

},

{
    
    name: "Farmer Pizza Point",
    category: "Food",
    description: "A popular pizza and fast food point.",
    details: "Farmer Pizza Point is located in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.5,
    photos: [
        "images/farmer1.jpg",
        "images/farmer2.jpg",
        "images/farmer3.jpg",
        "images/farmer4.jpg"
    ],
    image: "images/farmer.jpg"

},

{
   
    name: "Sip Point",
    category: "Food",
    description: "A food and beverages point in Chamkaur Sahib.",
    details: "Sip Point is located in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.3,
    photos: [
        "images/sip1.jpg",
        "images/sip2.jpg",
        "images/sip3.jpg",
        "images/sip4.jpg"
    ],
    image: "images/sip.jpg"

},

{
    
    name: "21 Cafeteria",
    category: "Food",
    description: "A popular cafeteria in Chamkaur Sahib.",
    details: "21 Cafeteria is a food and cafe point in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.3,
    photos: [
        "images/cafe211.jpg",
        "images/cafe212.jpg",
        "images/cafe213.jpg",
        "images/cafe214.jpg"
    ],
    image: "images/cafe21.jpg"

},

{
    
    name: "Dana Pani Restaurant",
    category: "Food",
    description: "A popular restaurant in Chamkaur Sahib.",
    details: "Dana Pani Restaurant is located in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.3,
    photos: [
        "images/danapani1.jpg",
        "images/danapani2.jpg",
        "images/danapani3.jpg",
        "images/danapani4.jpg"
    ],
    image: "images/danapani.jpg"

},

{
   
    name: "Pizza Country",
    category: "Food",
    description: "A popular fast food point in Chamkaur Sahib.",
    details: "Punjab Fast Food is located in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.3,
    photos: [
        "images/country1.jpg",
        "images/country2.jpg",
        "images/country3.jpg",
        "images/country4.jpg"
    ],
    image: "images/country.jpg"

},
{
    name: "Gurdwara Tibbi Sahib",
    category: "Historical",
    description: "A historic Sikh shrine associated with the Sikh history of Rupnagar.",
    details: "Gurdwara Tibbi Sahib is associated with the historic events of Guru Gobind Singh Ji's time and the Sikh resistance during the Anandpur Sahib period. The site is remembered as an important part of the Sikh historical heritage of the Rupnagar region.",
    location: "Rupnagar, Punjab, India",
    rating: 4.8,
    photos: [],
    image: " images/gts.jpg",
photos: [
    "images/gts1.jpg",
    "images/gts2.jpg",
    "images/gts3.jpg"
    
],
},

{
    name: "Gurudwara Guru Ke Mehal Ucha Khera",
    category: "Historical",
    description: "A historic Sikh site at Ucha Khera, Rupnagar.",
    details: "Etihasak Gurudwara Guru Ke Mehal Ucha Khera is remembered as part of the Sikh historical heritage of the Rupnagar region. The site reflects the area's deep connection with Sikh history and tradition.",
    location: "Ucha Khera, Rupnagar, Punjab, India",
    rating: 4.5,
    image: "images/gkm.jpg",
    photos: [
        "images/gkm1.jpg",
        "images/gkm2.jpg",
        "images/gkm3.jpg",
        "images/gkm4.jpg"
    ]
},

{
    name: "Gurudwara Singh Sabha",
    category: "Historical",
    description: "A respected Sikh place of worship and community heritage in Rupnagar.",
    details: "Gurudwara Singh Sabha represents the spiritual, cultural and community heritage of Sikhism in the Rupnagar region. It serves as a place of worship and community gathering.",
    location: "Haveli Kalan, Rupnagar, Punjab, India",
    rating: 4.5,

    image: "images/gss.jpg",

    photos: [
        "images/gss1.jpg",
        "images/gss2.jpg",
        "images/gss3.jpg",
        "images/gss4.jpg"
    ]
},

{
    name: "Gurudwara Sahib Phool Khurd Ropar",
    category: "Historical",
    description: "A peaceful Sikh place of worship and an important part of the local heritage.",
    details: "Gurudwara Sahib Phool Khurd Ropar represents the spiritual and cultural heritage of the local Sikh community. The site is a place of worship, remembrance and community gathering.",
    location: "Phool Khurd, Rupnagar, Punjab, India",
    rating: 4.2,

    image: "images/gspk1.jpg",

    photos: [
        "images/gspk1.jpg",
        "images/gspk2.jpg",
        "images/gspk3.jpg"
    
    ]
},
{
    name: "Gurudwara Shri Guru Nanak Darbar Sahib",
    category: "Historical",
    description: "A peaceful Sikh religious and cultural site in Rupnagar.",
    details: "Gurudwara Shri Guru Nanak Darbar Sahib is an important place of Sikh faith and community life in the Rupnagar region. The site reflects the rich spiritual and cultural heritage of the area.",
    location: "Haveli Kalan, Rupnagar, Punjab, India",
    rating: 4.7,

    image: "images/guru nanak darbar.jpg",

    photos: [
        "images/guru nanak darbar1.jpg",
        "images/guru nanak darbar2.jpg",
        "images/guru nanak darbar3.jpg",
        "images/guru nanak darbar4.jpg",
        "images/guru nanak darbar5.jpg",
        "images/guru nanak darbar6.jpg",
        "images/guru nanak darbar7.jpg"
    ]
},

{
    name: "Gurudwara Head Darbar Kot Puran Sahib Ji",
    category: "Historical",
    description: "A revered Sikh religious and cultural site in the Rupnagar region.",
    details: "Gurudwara Head Darbar Kot Puran Sahib Ji is an important place of Sikh faith and local heritage. The site represents the spiritual traditions and rich Sikh cultural heritage of the Rupnagar region.",
    location: "Kot Puran, Rupnagar, Punjab, India",
    rating: 4.9,

    image: "images/ghdkp.jpg",

    photos: [
        "images/ghdkp1.jpg",
        "images/ghdkp2.jpg",
        "images/ghdkp3.jpg",
        "images/ghdkp4.jpg"
    ]
},
{
    name: "Archaeological Museum Ropar",

 category: "Heritage", 
        description: "A beautiful heritage museum showcasing the history of Ropar.",
        details: "The Archaeological Museum Ropar is a must-visit destination for history enthusiasts. It houses artifacts, sculptures and exhibits that provide insights into the rich cultural heritage of the region.",
        location: "Ropar, Punjab, India",
        rating: 4.8,
        photos: [
            "images/museum1.jpg",
            "images/museum2.jpg",
            "images/museum3.jpg",
            "images/museum4.jpg"
        ],
        image: "images/place1.jpg"
    },

    {
        name: "Satluj River",
        category: "Nature",
        description: "A beautiful river destination with peaceful surroundings.",
        details: "The Satluj River is a serene and picturesque destination. Visitors can enjoy peaceful walks, beautiful views, photography and relaxing moments near the river.",
        location: "Ropar, Punjab, India",
        phone:"o1881-228102",
        rating: 4.7,
        photos: [
            "images/satluj1.jpg",
            "images/satluj2.jpg",
            "images/satluj3.jpg",
            "images/satluj4.jpg"
        ],
        image: "images/place2.jpg"
    },

    {
        name: "Gurudwara Bhatha Sahib",
        category: "Historical",
        description: "A famous historical and spiritual destination of Punjab.",
        details: "Gurudwara Bhatha Sahib is a revered historical and spiritual site known for its peaceful atmosphere, beautiful architecture and rich Sikh heritage.",
        location: "Ropar, Punjab, India",
        rating: 4.9,
        photos: [
            "images/bhatha1.jpg",
            "images/bhatha2.jpg",
            "images/bhatha3.jpg",
            "images/bhatha4.jpg"
        ],
        image: "images/place3.jpg"
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
            ${place.category === "Hospitals" && place.phone ? `
    <a
        class="call-button"
        href="tel:${place.phone}">
        📞 Call Now
    </a>
` : ""}

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
// =====================================
// LANGUAGE SWITCHER - ALL PAGES
// =====================================

function toggleLanguageMenu() {
    const menu = document.getElementById("languageMenu");

    if (menu) {
        menu.classList.toggle("show");
    }
}


// CHANGE LANGUAGE
function setLanguage(language) {

    // Save language for ALL pages
    localStorage.setItem("selectedLanguage", language);

    const menu = document.getElementById("languageMenu");

    if (menu) {
        menu.classList.remove("show");
    }

    updateLanguageButton(language);

    translatePage(language);
}


// TRANSLATE CURRENT PAGE
function translatePage(language) {

    let attempts = 0;

    const timer = setInterval(function () {

        const select = document.querySelector(".goog-te-combo");

        if (select) {

            select.value = language;

            select.dispatchEvent(new Event("change"));

            clearInterval(timer);
        }

        attempts++;

        if (attempts >= 20) {
            clearInterval(timer);
        }

    }, 500);
}


// UPDATE BUTTON
function updateLanguageButton(language) {

    const button =
        document.querySelector(".language-switch > button");

    const menuButton =
        document.querySelector(".language-menu button");

    if (!button || !menuButton) return;


    if (language === "pa") {

        button.innerHTML = "ਪੰਜਾਬੀ ▾";

        menuButton.innerHTML = "English";

        menuButton.setAttribute(
            "onclick",
            "setLanguage('en')"
        );

    } else {

        button.innerHTML = "English ▾";

        menuButton.innerHTML = "ਪੰਜਾਬੀ";

        menuButton.setAttribute(
            "onclick",
            "setLanguage('pa')"
        );
    }
}


// LOAD SAVED LANGUAGE ON EVERY PAGE
function loadSavedLanguage() {

    const savedLanguage =
        localStorage.getItem("selectedLanguage");

    if (!savedLanguage) return;

    updateLanguageButton(savedLanguage);

    translatePage(savedLanguage);
}


// RUN WHEN PAGE LOADS
window.addEventListener("load", function () {

    setTimeout(function () {

        loadSavedLanguage();

    }, 1500);

});
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
            "hospital1.jpg",
            "hospital2.jpg",
            "hospital3.jpg",
            "hospital4.jpg",
            "hospital5.jpg",
            "hospital6.jpg",
            "hospital7.jpg",
            "hospital8.jpg",
            "hospital9.jpg",
            "hospital10.jpg"
        ],
        image: "hospital5.jpg"
    },
    {
    name: "Civil Hospital Rupnagar",
    category: "Hospitals",
    description: "Government hospital serving the people of Rupnagar.",
    details: "Civil Hospital Rupnagar is a government healthcare facility located in Ali Mohalla, Rupnagar.",
    location: "Ali Mohalla, Rupnagar, Punjab, India",
    rating: 3.2,
    photos: [
        "civil1.jpg",
        "civil2.jpg",
        "civil3.jpg",
        "civil4.jpg"
    ],
    image: "civil1.jpg"
},

{
    name: "Sangha Multispeciality Hospital",
    category: "Hospitals",
    description: "A multispeciality hospital providing healthcare services in Rupnagar.",
    details: "Sangha Multispeciality Hospital is located in Giani Zail Singh Nagar, Rupnagar.",
    location: "Giani Zail Singh Nagar, Rupnagar, Punjab, India",
    rating: 4.6,
    photos: [
        "sangha1.jpg",
        "sangha2.jpg",
        "sangha3.jpg",
        "sangha4.jpg"
    ],
    image: "sangha1.jpg"
},

{
    name: "Baweja Multispeciality Hospital",
    category: "Hospitals",
    description: "A private multispeciality hospital in Rupnagar.",
    details: "Baweja Multispeciality Hospital is located opposite Civil Hospital in Preet Colony, Rupnagar.",
    location: "Preet Colony, Rupnagar, Punjab, India",
    rating: 4.3,
    photos: [
        "baweja1.jpg",
        "baweja2.jpg",
        "baweja3.jpg",
        "baweja4.jpg"
    ],
    image: "baweja1.jpg"
},

{
    name: "Pannu Eye and Gynae Hospital",
    category: "Hospitals",
    description: "Specialized hospital for eye and women's healthcare.",
    details: "Pannu Eye and Gynae Hospital is located on College Road, Rupnagar.",
    location: "3141 College Road, Rupnagar, Punjab, India",
    rating: 4.9,
    photos: [
        "pannu1.jpg",
        "pannu2.jpg",
        "pannu3.jpg",
        "pannu4.jpg"
    ],
    image: "pannu1.jpg"
},

{
    name: "Parmar Hospital",
    category: "Hospitals",
    description: "A healthcare facility located on Bela Road, Rupnagar.",
    details: "Parmar Hospital provides medical services in Rupnagar and is located on Bela Road.",
    location: "Bela Road, Rupnagar, Punjab, India",
    rating: 4.6,
    photos: [
        "parmar1.jpg",
        "parmar2.jpg",
        "parmar3.jpg",
        "parmar4.jpg"
    ],
    image: "parmar1.jpg"
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
        "aggarwal1.jpg",
        "aggarwal2.jpg",
        "aggarwal3.jpg",
        "aggarwal4.jpg"
    ],
    image: "aggarwal1.jpg"
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
        "bijendra1.jpg",
        "bijendra2.jpg",
        "bijendra3.jpg",
        "bijendra4.jpg"
    ],
    image: "bijendra1.jpg"
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
        "simran1.jpg",
        "simran2.jpg",
        "simran3.jpg",
        "simran4.jpg"
    ],
    image: "simran1.jpg"
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
        "snd1.jpg",
        "snd2.jpg",
        "snd3.jpg",
        "snd4.jpg"
    ],
    image: "snd1.jpg"
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
        "choudhary1.jpg",
        "choudhary2.jpg",
        "choudhary3.jpg",
        "choudhary4.jpg"
    ],
    image: "choudhary1.jpg"
},
{
   
    name: "Hungry Point",
    category: "Food",
    description: "A popular food point serving fast food and snacks.",
    details: "Hungry Point is a popular food point in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.5,
    photos: [
        
        "hungry1.jpg",
        "hungry2.jpg",
        "hungry3.jpg",
        "hungry4.jpg"
    ],
    image: "hungry.jpg"

},

{
    
    name: "Kafla Point",
    category: "Food",
    description: "A popular food point in Chamkaur Sahib.",
    details: "Kafla Point is a food point located in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.5,
    photos: [
        "kafla1.jpg",
        "kafla2.jpg",
        "kafla3.jpg",
        "kafla4.jpg"
    ],
    image: "kafla.jpg"

},

{
    
    name: "Farmer Pizza Point",
    category: "Food",
    description: "A popular pizza and fast food point.",
    details: "Farmer Pizza Point is located in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.5,
    photos: [
        "farmer1.jpg",
        "farmer2.jpg",
        "farmer3.jpg",
        "farmer4.jpg"
    ],
    image: "farmer.jpg"

},

{
   
    name: "Sip Point",
    category: "Food",
    description: "A food and beverages point in Chamkaur Sahib.",
    details: "Sip Point is located in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.3,
    photos: [
        "sip1.jpg",
        "sip2.jpg",
        "sip3.jpg",
        "sip4.jpg"
    ],
    image: "sip.jpg"

},

{
    
    name: "21 Cafeteria",
    category: "Food",
    description: "A popular cafeteria in Chamkaur Sahib.",
    details: "21 Cafeteria is a food and cafe point in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.3,
    photos: [
        "cafe211.jpg",
        "cafe212.jpg",
        "cafe213.jpg",
        "cafe214.jpg"
    ],
    image: "cafe21.jpg"

},

{
    
    name: "Dana Pani Restaurant",
    category: "Food",
    description: "A popular restaurant in Chamkaur Sahib.",
    details: "Dana Pani Restaurant is located in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.3,
    photos: [
        "danapani1.jpg",
        "danapani2.jpg",
        "danapani3.jpg",
        "danapani4.jpg"
    ],
    image: "danapani.jpg"

},

{
   
    name: "Pizza Country",
    category: "Food",
    description: "A popular fast food point in Chamkaur Sahib.",
    details: "Punjab Fast Food is located in Chamkaur Sahib.",
    location: "Chamkaur Sahib, Punjab, India",
    rating: 4.3,
    photos: [
        "country1.jpg",
        "country2.jpg",
        "country3.jpg",
        "country4.jpg"
    ],
    image: "country.jpg"

},
{
    name: "Gurdwara Tibbi Sahib",
    category: "Historical",
    description: "A historic Sikh shrine associated with the Sikh history of Rupnagar.",
    details: "Gurdwara Tibbi Sahib is associated with the historic events of Guru Gobind Singh Ji's time and the Sikh resistance during the Anandpur Sahib period. The site is remembered as an important part of the Sikh historical heritage of the Rupnagar region.",
    location: "Rupnagar, Punjab, India",
    rating: 4.8,
    photos: [],
    image: " gts.jpg",
photos: [
    "gts1.jpg",
    "gts2.jpg",
    "gts3.jpg"
    
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
        "gkm1.jpg",
        "gkm2.jpg",
        "gkm3.jpg",
        "gkm4.jpg"
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
        "gss1.jpg",
        "gss2.jpg",
        "gss3.jpg",
        "gss4.jpg"
    ]
},

{
    name: "Gurudwara Sahib Phool Khurd Ropar",
    category: "Historical",
    description: "A peaceful Sikh place of worship and an important part of the local heritage.",
    details: "Gurudwara Sahib Phool Khurd Ropar represents the spiritual and cultural heritage of the local Sikh community. The site is a place of worship, remembrance and community gathering.",
    location: "Phool Khurd, Rupnagar, Punjab, India",
    rating: 4.2,

    image: "gspk1.jpg",

    photos: [
        "gspk1.jpg",
        "gspk2.jpg",
        "gspk3.jpg"
    
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
        "guru nanak darbar1.jpg",
        "guru nanak darbar2.jpg",
        "guru nanak darbar3.jpg",
        "guru nanak darbar4.jpg",
        "guru nanak darbar5.jpg",
        "guru nanak darbar6.jpg",
        "guru nanak darbar7.jpg"
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
        "ghdkp1.jpg",
        "ghdkp2.jpg",
        "ghdkp3.jpg",
        "ghdkp4.jpg"
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
        phone:"o1881-228102",
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

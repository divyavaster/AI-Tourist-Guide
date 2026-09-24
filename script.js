// =====================================================
// BAGALKOTE AI TOURIST GUIDE
// =====================================================


// =====================================================
// HERO SLIDER
// =====================================================

const heroPhotos = [

    "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072842-1-rssv6h2c9rk9o1851rcm3pxsygd8lq2hcg21avyl56.jpg",

    "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072889-1-rssv6ol1sfuk8wx7tulmno1hpjc6bawc1h9x53nfre.jpg",

    "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072869-rssv6lrj7xqpa31babdqy6r3xdq2o7l513bgp9rma2.jpg",

    "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018080336-rssv6v5x4a3ki6nnrfg0n4dpv8fqt6mgedubi1doju.jpg"

];

let heroIndex = 0;

function changeHeroPhoto() {

    const hero = document.querySelector(".hero-photo");

    if (!hero) return;

    hero.style.backgroundImage =
        `url("${heroPhotos[heroIndex]}")`;

    heroIndex++;

    if (heroIndex >= heroPhotos.length) {
        heroIndex = 0;
    }
}

changeHeroPhoto();

setInterval(changeHeroPhoto, 4000);


// =====================================================
// SUB PLACE DATA
// =====================================================

const subPlaces = {

    // =================================================
    // BADAMI
    // =================================================

    "Badami Cave Temples": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072842-1-rssv6h2c9rk9o1851rcm3pxsygd8lq2hcg21avyl56.jpg",

        history:
        "Badami is famous for its four rock-cut cave temples. The caves represent Hindu, Jain and other religious traditions. Cave I is associated with Shiva, Cave II with Vishnu, Cave III is the largest and contains an inscription dated to 578 AD, while Cave IV is associated with Jainism. The caves are carved into the sandstone cliffs overlooking Agasthya Tirtha.",

        location:
        "Badami Cave Temples, Badami, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 6:00 PM",

        visitor:
        "Timings shown here are approximate visitor timings for this project. Please verify current timings locally before visiting.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Badami+Cave+Temples+Karnataka"
    },


    "Agasthya Lake": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072821-rssv6e8tp9gep7c8i84qe8nf6ar4ymrac23kv22rnu.jpg",

        history:
        "Agasthya Lake, also known as Agasthya Tirtha, lies below the sandstone cliffs of Badami. The lake forms an important part of the historic landscape and provides a striking view of the cave temples and surrounding monuments.",

        location:
        "Agasthya Lake, Badami, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 6:00 PM",

        visitor:
        "Approximate outdoor visiting timings are shown for the project.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Agasthya+Lake+Badami"
    },


    "Badami Fort": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072859-2-rssv6jvuu9o4mv41lakht786qlzc8tdocu0hqpuemi.jpg",

        history:
        "Badami Fort stands on the hill above the historic town. The fort area provides panoramic views of Badami, the lake and surrounding sandstone formations. The hill fort forms an important part of the historic landscape of the Early Chalukyan capital.",

        location:
        "Badami Fort, Badami, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 6:00 PM",

        visitor:
        "Fort access and walking conditions may vary. Check local access information before visiting.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Badami+Fort+Karnataka"
    },


    "Bhoothnath Temple": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072839-3-rssv6h2c9rk9o1851rcm3pxsygd8lq2hcg21avyl56.jpg",

        history:
        "Bhoothnath Temple is situated near Agasthya Lake and forms a distinctive part of the Badami landscape. The temple complex is known for its stone architecture and its setting beside the water and sandstone cliffs.",

        location:
        "Bhoothnath Temple, Badami, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 6:00 PM",

        visitor:
        "Approximate visiting timings are displayed for the project.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Bhoothnath+Temple+Badami"
    },


    // =================================================
    // PATTADAKAL
    // =================================================

    "Virupaksha Temple": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072889-1-rssv6ol1sfuk8wx7tulmno1hpjc6bawc1h9x53nfre.jpg",

        history:
        "Virupaksha Temple is one of the most prominent monuments at Pattadakal. It represents the sophisticated temple architecture developed under the Chalukyas and is richly decorated with sculptural panels and architectural details.",

        location:
        "Virupaksha Temple, Pattadakal, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 6:00 PM",

        visitor:
        "Approximate visitor timings are displayed for the project.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Virupaksha+Temple+Pattadakal"
    },


    "Mallikarjuna Temple": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072850-1-rssv6iy0nfmub95eqs5v8pgq583z149y0pd09fvssq.jpg",

        history:
        "Mallikarjuna Temple is part of the important group of Chalukyan monuments at Pattadakal. Its architecture and sculptural details contribute to the site's importance as a centre of early medieval temple design.",

        location:
        "Mallikarjuna Temple, Pattadakal, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 6:00 PM",

        visitor:
        "Approximate visitor timings are displayed for the project.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Mallikarjuna+Temple+Pattadakal"
    },


    "Sangameshwara Temple": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072850-1-rssv6iy0nfmub95eqs5v8pgq583z149y0pd09fvssq.jpg",

        history:
        "Sangameshwara Temple is one of the important monuments within the Pattadakal temple complex. It forms part of the remarkable group of monuments that demonstrate the architectural development of the Chalukyan period.",

        location:
        "Sangameshwara Temple, Pattadakal, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 6:00 PM",

        visitor:
        "Approximate visitor timings are displayed for the project.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Sangameshwara+Temple+Pattadakal"
    },


    "Pattadakal River View": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072866-rssv6lrj7xqpa31babdqy6r3xdq2o7l513bgp9rma2.jpg",

        history:
        "The Malaprabha River forms an important natural setting around Pattadakal. The combination of the river landscape and historic temples creates one of the distinctive visual experiences of the heritage site.",

        location:
        "Pattadakal and Malaprabha River, Bagalkote District, Karnataka",

        opening:
        "Daylight hours",

        closing:
        "Before dark",

        visitor:
        "River-view access can depend on the specific viewpoint and local conditions.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Pattadakal+Malaprabha+River"
    },


    // =================================================
    // AIHOLE
    // =================================================

    "Durga Temple": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072869-rssv6lrj7xqpa31babdqy6r3xdq2o7l513bgp9rma2.jpg",

        history:
        "The Durga Temple is one of the best-known monuments at Aihole. Its apsidal form and surrounding corridor demonstrate the experimentation and development of early temple architecture. The official district description notes that the temple is dedicated to Vishnu and appears to reflect adaptation of a Buddhist chaitya form.",

        location:
        "Durga Temple, Aihole, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 6:00 PM",

        visitor:
        "Approximate visitor timings are shown for the project.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Durga+Temple+Aihole"
    },


    "Lad Khan Temple": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072829-rssv6f6nw3hp0tavcqjcyqevromi6bv0o6r2cc1dhm.jpg",

        history:
        "Lad Khan Temple is one of Aihole's notable early monuments. Its simple but distinctive arrangement provides an important example of experimentation in temple design during the early Chalukyan period.",

        location:
        "Lad Khan Temple, Aihole, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 6:00 PM",

        visitor:
        "Approximate visitor timings are shown for the project.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Lad+Khan+Temple+Aihole"
    },


    "Ravanaphadi Cave": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018072817-rssv6daziff4dldlnpq3tqvykwvrqxnjzxg3ds45u2.jpg",

        history:
        "Ravanaphadi is a rock-cut cave temple at Aihole. Its sculptures and carved interiors are important examples of the early development of rock-cut religious architecture in the region.",

        location:
        "Ravanaphadi Cave, Aihole, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 6:00 PM",

        visitor:
        "Approximate visitor timings are shown for the project.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Ravanaphadi+Cave+Aihole"
    },


    "Meguti Jain Temple": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/20180728100-rssv6cd5bldu1zeyt7bh994hzj0ej8jtnsslwi5k0a.jpg",

        history:
        "The Meguti Temple stands on Meguti Hill and is an important monument at Aihole. The hilltop setting provides views across the surrounding historic landscape and the temple contributes to the religious and architectural diversity of Aihole.",

        location:
        "Meguti Hill, Aihole, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 6:00 PM",

        visitor:
        "Approximate visitor timings are shown for the project.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Meguti+Jain+Temple+Aihole"
    },


    // =================================================
    // KUDALA SANGAMA
    // =================================================

    "Sangameshwara Temple": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018080351-rssv6v5x4a3ki6nnrfg0n4dpv8fqt6mgedubi1doju.jpg",

        history:
        "Sangameshwara Temple is an important part of the Kudala Sangama heritage landscape. The destination is associated with the confluence of the Krishna and Malaprabha rivers and the spiritual tradition connected with Basavanna.",

        location:
        "Kudalasangama, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 8:00 PM",

        visitor:
        "Approximate timings are shown for the project. Verify current local timings before visiting.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Kudalasangama+Temple"
    },


    "Aikya Mantapa": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018080366-rssv6w3rb44utsmalxun7m56gmb40vq6qihszbcadm.jpg",

        history:
        "Kudala Sangama is closely associated with Basavanna. The Aikya Mantapa marks the place associated with Basavanna's samadhi and contains the linga tradition connected with the site.",

        location:
        "Aikya Mantapa, Kudalasangama, Bagalkote District, Karnataka",

        opening:
        "Approx. 6:00 AM",

        closing:
        "Approx. 8:00 PM",

        visitor:
        "Approximate timings are shown for the project.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Aikya+Mantapa+Kudalasangama"
    },


    "Krishna Malaprabha Sangama": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018080336-rssv6v5x4a3ki6nnrfg0n4dpv8fqt6mgedubi1doju.jpg",

        history:
        "Kudala Sangama is named for the meeting of the Krishna and Malaprabha rivers. The confluence forms an important natural and cultural landscape and is one of the major attractions of the destination.",

        location:
        "Krishna–Malaprabha Confluence, Kudalasangama, Karnataka",

        opening:
        "Daylight hours",

        closing:
        "Before dark",

        visitor:
        "River access and viewpoints can depend on local conditions.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Krishna+Malaprabha+Sangama"
    },


    "Kudala Sangama View": {

        image:
        "https://cdn.s3waas.gov.in/s3a1d33d0dfec820b41b54430b50e96b5c/uploads/bfi_thumb/2018080336-rssv6v5x4a3ki6nnrfg0n4dpv8fqt6mgedubi1doju.jpg",

        history:
        "The river-side landscape at Kudala Sangama provides views of the confluence and surrounding heritage structures. It is a peaceful place to understand the relationship between the natural landscape and the historic site.",

        location:
        "Kudalasangama, Bagalkote District, Karnataka",

        opening:
        "Daylight hours",

        closing:
        "Before dark",

        visitor:
        "Viewpoint access may vary according to local conditions.",

        map:
        "https://www.google.com/maps/search/?api=1&query=Kudalasangama+Karnataka"
    }

};


// =====================================================
// MAIN PLACE DATA
// =====================================================

const places = {

    badami: {

        title: "Badami",

        image:
        heroPhotos[0],

        history:
        "Badami was an important capital of the Early Chalukyas. The town is famous for its sandstone cliffs, rock-cut cave temples, Agasthya Lake, Badami Fort and Bhoothnath Temple. The cave complex contains four rock-cut caves representing important religious traditions.",

        attractions: [
            "Badami Cave Temples",
            "Agasthya Lake",
            "Badami Fort",
            "Bhoothnath Temple"
        ]

    },


    pattadakal: {

        title: "Pattadakal",

        image:
        heroPhotos[1],

        history:
        "Pattadakal is an important group of historic Chalukyan monuments. The site contains remarkable Hindu and Jain monuments and demonstrates the development of temple architecture during the early medieval period.",

        attractions: [
            "Virupaksha Temple",
            "Mallikarjuna Temple",
            "Sangameshwara Temple",
            "Pattadakal River View"
        ]

    },


    aihole: {

        title: "Aihole",

        image:
        heroPhotos[2],

        history:
        "Aihole is known for its large collection of ancient temples and monuments. It played an important role in the development and experimentation of early temple architecture.",

        attractions: [
            "Durga Temple",
            "Lad Khan Temple",
            "Ravanaphadi Cave",
            "Meguti Jain Temple"
        ]

    },


    sangama: {

        title: "Kudala Sangama",

        image:
        heroPhotos[3],

        history:
        "Kudala Sangama is a significant cultural and spiritual destination associated with Basavanna. The Krishna and Malaprabha rivers meet here, creating an important natural and cultural landscape.",

        attractions: [
            "Sangameshwara Temple",
            "Aikya Mantapa",
            "Krishna Malaprabha Sangama",
            "Kudala Sangama View"
        ]

    }

};


// =====================================================
// OPEN MAIN PLACE
// =====================================================

function openPlace(placeName) {

    const place = places[placeName];

    if (!place) return;

    const modal = document.getElementById("placeModal");
    const imageBox = document.getElementById("modalImage");
    const body = document.getElementById("modalBody");

    imageBox.innerHTML = `
        <img src="${place.image}" alt="${place.title}">
    `;

    body.innerHTML = `

        <span class="eyebrow">DESTINATION</span>

        <h2>${place.title}</h2>

        <p>
            ${place.history}
        </p>

        <h3>Important Places</h3>

        <div class="info-grid">

            ${place.attractions.map((item, index) => `

                <div
                    class="info-box"
                    onclick="openSubPlace('${item}')"
                    style="cursor:pointer;"
                >

                    <strong>
                        0${index + 1}
                    </strong>

                    <span>
                        ${item}
                    </span>

                </div>

            `).join("")}

        </div>

    `;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// =====================================================
// OPEN SUB PLACE
// =====================================================

function openSubPlace(name) {

    const place = subPlaces[name];

    if (!place) {

        alert("Information not available for this place.");

        return;
    }

    const modal =
        document.getElementById("subPlaceModal");

    const imageBox =
        document.getElementById("subPlaceImage");

    const content =
        document.getElementById("subPlaceContent");


    imageBox.innerHTML = `

        <img
            src="${place.image}"
            alt="${name}"
        >

    `;


    content.innerHTML = `

        <span class="eyebrow">
            BAGALKOTE TOURIST GUIDE
        </span>

        <h2>
            ${name}
        </h2>

        <h3>
            📖 History
        </h3>

        <p>
            ${place.history}
        </p>


        <div class="info-grid">

            <div class="info-box">

                <strong>📍 LOCATION</strong>

                <span>
                    ${place.location}
                </span>

            </div>


            <div class="info-box">

                <strong>🕐 OPENING TIME</strong>

                <span>
                    ${place.opening}
                </span>

            </div>


            <div class="info-box">

                <strong>🕐 CLOSING TIME</strong>

                <span>
                    ${place.closing}
                </span>

            </div>


            <div class="info-box">

                <strong>ℹ VISITOR INFORMATION</strong>

                <span>
                    ${place.visitor}
                </span>

            </div>

        </div>


        <a
            class="map-button"
            href="${place.map}"
            target="_blank"
        >
            📍 Open Location in Google Maps →
        </a>

    `;


    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// =====================================================
// CLOSE MODALS
// =====================================================

function closePlace() {

    document
        .getElementById("placeModal")
        .classList.remove("active");

    document.body.style.overflow = "auto";
}


function closeSubPlace() {

    document
        .getElementById("subPlaceModal")
        .classList.remove("active");

    document.body.style.overflow = "auto";
}


// =====================================================
// CLICK OUTSIDE MODAL
// =====================================================

window.addEventListener("click", function(event) {

    const placeModal =
        document.getElementById("placeModal");

    const subModal =
        document.getElementById("subPlaceModal");

    if (event.target === placeModal) {

        closePlace();

    }

    if (event.target === subModal) {

        closeSubPlace();

    }

});


// =====================================================
// ESC KEY
// =====================================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePlace();

        closeSubPlace();

    }

});


// =====================================================
// AI QUESTION
// =====================================================

function setQuestion(text) {

    const input =
        document.getElementById("question");

    input.value = text;

    input.focus();
}


// =====================================================
// AI GUIDE
// =====================================================

async function askAI() {

    const input =
        document.getElementById("question");

    const answer =
        document.getElementById("ai-answer");

    const question =
        input.value.trim();


    if (!question) {

        answer.innerHTML =
            "Please enter a question.";

        return;
    }


    answer.innerHTML =
        "⏳ AI Tourist Guide is thinking...";


    try {

        const API_URL =
            `http://${window.location.hostname}:3000/ask`;


        const response =
            await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    question: question
                })

            });


        if (!response.ok) {

            throw new Error("Server error");

        }


        const data =
            await response.json();


        answer.innerHTML =
            data.answer ||
            "Sorry, I could not find an answer.";

    }

    catch (error) {

        console.error(error);

        answer.innerHTML = `
            <strong>AI Guide is currently unavailable.</strong>
            <br><br>
            Please make sure the backend server is running.
        `;

    }

}


// =====================================================
// ENTER KEY FOR AI
// =====================================================

document
    .getElementById("question")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            askAI();

        }

    });


// =====================================================
// VOICE SEARCH
// =====================================================

let recognition = null;


function startVoice() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        alert(
            "Voice recognition is not supported in this browser. Please use Google Chrome."
        );

        return;
    }


    if (recognition) {

        recognition.stop();

        recognition = null;

        return;
    }


    recognition =
        new SpeechRecognition();


    recognition.lang = "en-IN";

    recognition.interimResults = false;

    recognition.continuous = false;


    const voiceButton =
        document.getElementById("voiceButton");

    const status =
        document.getElementById("voiceStatus");


    recognition.onstart = function() {

        voiceButton.classList.add("listening");

        voiceButton.innerHTML = "🔴";

        status.innerHTML =
            "Listening... Please speak your question.";

    };


    recognition.onresult = function(event) {

        const text =
            event.results[0][0].transcript;


        document.getElementById("question").value =
            text;


        status.innerHTML =
            "Voice captured successfully.";

    };


    recognition.onerror = function(event) {

        status.innerHTML =
            "Voice error: " + event.error;

    };


    recognition.onend = function() {

        voiceButton.classList.remove("listening");

        voiceButton.innerHTML = "🎤";

        recognition = null;

    };


    recognition.start();

}


// =====================================================
// PAGE LOAD
// =====================================================

document.addEventListener("DOMContentLoaded", function() {

    console.log(
        "Bagalkote AI Tourist Guide loaded successfully."
    );

});
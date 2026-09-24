const express = require("express");
const cors = require("cors");

const app = express();


// ==========================================
// MIDDLEWARE
// ==========================================

app.use(cors());

app.use(express.json());


// ==========================================
// HOME
// ==========================================

app.get("/", (req, res) => {

    res.send(`
        <h1>🤖 AI Tourist Guide Backend</h1>

        <h2>Backend is running successfully ✅</h2>

        <p>Smart Tourism Backend is ready.</p>

        <p>API:</p>

        <p>
            POST /ask
        </p>
    `);

});


// ==========================================
// AI ASK API
// ==========================================

app.post("/ask", (req, res) => {

    const question =
        req.body.question;


    if (!question) {

        return res.json({
            answer:
                "Please enter a question."
        });

    }


    const q =
        question.toLowerCase();


    let answer = "";



    // ======================================
    // BADAMI
    // ======================================

    if (
        q.includes("badami") ||
        q.includes("ಬಾದಾಮಿ")
    ) {

        answer = `
🏔️ Badami Tourist Guide

Badami is famous for its
rock-cut cave temples,
red sandstone cliffs and
Chalukyan architecture.

📍 Location:
Bagalkote District, Karnataka

⭐ Main attractions:

• Badami Cave Temples
• Agastya Lake
• Bhutanatha Temples

⏰ Suggested visit:
3–4 hours
        `;

    }



    // ======================================
    // PATTADAKAL
    // ======================================

    else if (
        q.includes("pattadakal") ||
        q.includes("ಪಟ್ಟದಕಲ್")
    ) {

        answer = `
🛕 Pattadakal Tourist Guide

Pattadakal is famous for its
historic Chalukyan temples
and beautiful architecture.

📍 Location:
Bagalkote District, Karnataka

⭐ Main attractions:

• Virupaksha Temple
• Mallikarjuna Temple
• Sangameshwara Temple

⏰ Suggested visit:
2–3 hours
        `;

    }



    // ======================================
    // AIHOLE
    // ======================================

    else if (
        q.includes("aihole") ||
        q.includes("ಐಹೊಳೆ")
    ) {

        answer = `
🏛️ Aihole Tourist Guide

Aihole is an ancient temple town
known for early Chalukyan architecture.

📍 Location:
Bagalkote District, Karnataka

⭐ Main attractions:

• Durga Temple
• Lad Khan Temple
• Archaeological monuments

⏰ Suggested visit:
2–3 hours
        `;

    }



    // ======================================
    // KUDALA SANGAMA
    // ======================================

    else if (
        q.includes("kudala") ||
        q.includes("sangama") ||
        q.includes("ಸಂಗಮ")
    ) {

        answer = `
🌊 Kudala Sangama Tourist Guide

Kudala Sangama is an important
historical and spiritual destination
associated with Basavanna.

📍 Location:
Bagalkote District, Karnataka

⭐ Main attractions:

• Sangamanatha Temple
• Krishna and Malaprabha river confluence
• Basavanna related historical places

⏰ Suggested visit:
2–3 hours
        `;

    }



    // ======================================
    // ONE DAY PLAN
    // ======================================

    else if (
        q.includes("one day") ||
        q.includes("1 day") ||
        q.includes("day trip") ||
        q.includes("one-day")
    ) {

        answer = `
🚗 1-Day Bagalkote Tourist Plan

🌅 Morning

🏛️ Aihole

Explore the ancient
Chalukyan temples.

☀️ Afternoon

🛕 Pattadakal

Visit the famous
historical temples.

🌆 Evening

🏔️ Badami

Visit the cave temples
and enjoy the scenery.

📌 Tip:

Start early in the morning
to explore all three places.
        `;

    }



    // ======================================
    // TWO DAY PLAN
    // ======================================

    else if (
        q.includes("two day") ||
        q.includes("2 day") ||
        q.includes("2 days")
    ) {

        answer = `
🚗 2-Day Bagalkote Tourist Plan

📅 Day 1

🏛️ Aihole

Explore ancient temples.

🛕 Pattadakal

Visit the historic
temple complex.

📅 Day 2

🏔️ Badami

Explore the cave temples
and Agastya Lake.

🌊 Kudala Sangama

Visit the historical
and spiritual destination.
        `;

    }



    // ======================================
    // TOURIST PLACES
    // ======================================

    else if (
        q.includes("tourist") ||
        q.includes("tourism") ||
        q.includes("places") ||
        q.includes("visit")
    ) {

        answer = `
📍 Popular Tourist Places in Bagalkote

1️⃣ 🏔️ Badami

Famous for rock-cut cave temples.

2️⃣ 🛕 Pattadakal

Famous for Chalukyan architecture.

3️⃣ 🏛️ Aihole

Known for ancient temples.

4️⃣ 🌊 Kudala Sangama

Important historical and
spiritual destination.

You can ask me about
any one of these places.
        `;

    }



    // ======================================
    // TRIP
    // ======================================

    else if (
        q.includes("plan") ||
        q.includes("trip") ||
        q.includes("itinerary")
    ) {

        answer = `
🗺️ Bagalkote Trip Planner

For a short trip:

Day 1:

🏛️ Aihole
🛕 Pattadakal
🏔️ Badami

For a longer trip:

Day 2:

🌊 Kudala Sangama
🏔️ Badami local sightseeing

You can ask:

"Give me a 1 day trip plan"

or

"Give me a 2 day trip plan"
        `;

    }



    // ======================================
    // HISTORY
    // ======================================

    else if (
        q.includes("history") ||
        q.includes("historical")
    ) {

        answer = `
📚 History Guide

Bagalkote region is famous for
important historical sites connected
with the Chalukyan period.

Aihole, Pattadakal and Badami
are especially important for studying
ancient Indian temple architecture
and history.
        `;

    }



    // ======================================
    // HELP
    // ======================================

    else if (
        q.includes("help") ||
        q.includes("what can you do")
    ) {

        answer = `
🤖 AI Tourist Guide can help you with:

🏔️ Badami
🛕 Pattadakal
🏛️ Aihole
🌊 Kudala Sangama

🗺️ 1-Day Trip Plan
🗺️ 2-Day Trip Plan

📚 History
📍 Tourist Places

Try asking:

"Give me a one day trip plan"
        `;

    }



    // ======================================
    // DEFAULT
    // ======================================

    else {

        answer = `
🤖 Welcome to AI Tourist Guide – Bagalkote!

I can help you explore:

🏔️ Badami
🛕 Pattadakal
🏛️ Aihole
🌊 Kudala Sangama

You can ask:

• Tell me about Badami

• Tell me about Pattadakal

• Tell me about Aihole

• Tell me about Kudala Sangama

• Give me a one day trip plan

• Give me a two day trip plan

• What are the tourist places?

• Tell me the history
        `;

    }


    // ======================================
    // SEND RESPONSE
    // ======================================

    res.json({

        answer:
            answer.trim()

    });

});


// ==========================================
// START SERVER
// ==========================================

const PORT = 3000;


app.listen(
    PORT,
    "0.0.0.0",
    () => {

        console.log(
            `🤖 AI Tourist Guide Backend running on port ${PORT}`
        );

        console.log(
            `🌐 Backend Port: ${PORT}`
        );

    }
);
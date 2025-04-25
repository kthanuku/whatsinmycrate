
document.addEventListener("DOMContentLoaded", () => {
    let crateData = [
        {
            "Album Title": "The Psychedelic Sounds of 13th Floor Elevators",
            "Artist": "13th Floor Elevators",
            "Year": 1967,
            "Genre": "Psychedelic Rock",
            "Cover Image URL": "https://i.imgur.com/GNYAJeM.png",
        },
        {
            "Album Title": "If You Can Believe Your Eyes And Ears",
            "Artist": "The Mamas and the Papas",
            "Year": 1966,
            "Genre": "Folk Rock",
            "Cover Image URL": "https://i.imgur.com/009OW5m.png",
            "PlayAudio": true
        },
        {
            "Album Title": "Room on Fire",
            "Artist": "The Strokes",
            "Year": 2003,
            "Genre": "Garage Rock",
            "Cover Image URL": "https://i.imgur.com/NwITzLb.png",
        }
    ];

    const crateEl = document.getElementById("crate");
    const recordDisplay = document.getElementById("recordDisplay");
    const recordImage = document.getElementById("recordImage");
    const recordInfo = document.getElementById("recordInfo");
    const audioPlayer = document.getElementById("audioPlayer");

    crateData.forEach((record) => {
        const spine = document.createElement("div");
        spine.className = "spine";
        spine.addEventListener("mouseover", () => {
            showRecord(record);
            if (record.PlayAudio) {
                audioPlayer.currentTime = 0;
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        });
        crateEl.appendChild(spine);
    });

    function showRecord(record) {
        recordImage.src = record["Cover Image URL"];
        recordInfo.innerHTML = `
            <h2>${record["Artist"]} - ${record["Album Title"]}</h2>
            <p><strong>Genre:</strong> ${record["Genre"]}</p>
            <p><strong>Year:</strong> ${record["Year"]}</p>
        `;
        recordDisplay.style.display = "flex";
    }
});

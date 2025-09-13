let text = ""
const p = document.getElementById("text")
let i = 0
const date = new Date("Dec 07, 2025 00:00:00").getTime()

let god = document.getElementById("god").addEventListener("click", () =>{
    i = 0
    p.innerHTML = ""
    let num = Math.floor(Math.random() * 6)
    let msg = ["Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God | Philippians 4:6 ", 
        "When the time is right, The Lord will make it happen | Isiah 60:22",
        "The pain that you've been feeling right now, can't compare to the joy that is coming. | Romans 8:18",
        "Remember that I am always with you until the end of time | Matthew 28:30",
        "Your story is not finished yet. You'll soon laugh in the places you have cried. Keep going, God is with you. | Psalm 30:5",
        "But there are some things that you cannot be sure of. You must take a chance. If you wait for perfect weather, you will never plant your seeds. | Ecclesiates 11:4",
        "God will give you the desires of your heart, when the time is right. He hears your prayers, you just have to be patient and trust Him. | Psalm 37:4"
     ]
    text = msg[num]
    typeEffect()
})

let compliment = document.getElementById("compliment").addEventListener("click", () =>{
    i = 0
    p.innerHTML = ""
    let num = Math.floor(Math.random() * 5)
    let msg = ["When I look at you Andrea, I can't help but be thankful to God because he created someone like you, a woman who has it all.",
        "You are perfect in every way Andengie, so perfect that every time I learn something new about you, I can't help but fall in love with you even more.",
        "Always thankful to God because he let me have his most beautiful creation.",
        "If you ever feel not pretty enough, just know that other girls are dying to have a beauty like yours.",
        "Outfits are meant to make someone look beautiful, but instead, you are making any outfit look good because you are the one wearing it.",
        "You are enough Andeng!!!"
    ]
    text = msg[num]
    typeEffect()
})

let encouragement = document.getElementById("encouragement").addEventListener("click", () =>{
    i = 0
    p.innerHTML = ""
    let num = Math.floor(Math.random() * 6)
    let msg = ["You may not know why God is putting you in this situation right now, but always remember that his plans for you are better than you imagine.",
        "If things didn't work as you imagined, let it be, because God is preparing you for his greater plans for you.",
        "Every late night of studying brings you closer to saving lives.",
        "Keep going even though it's hard, because every step takes you closer to your goals!!",
        "You're not behind, you're on your own path.",
        "Keep going, because the best is yet to come!!",
        "You're stronger than you think!!"
    ]
    text = msg[num]
    typeEffect()
})

let quotes = document.getElementById("quotes").addEventListener("click", () =>{
    i = 0
    p.innerHTML = ""
    let num = Math.floor(Math.random() * 6)
    let msg = ["The best thing about a picture is that it never changes, even when the people in it do.",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "When you are looking to be validated by others, you are living according to their values, not yours.",
        "If you weren't capable, the opportunity would have never come your way.",
        "Nostalgia is proof you're living a life to be proud of. What a privilege to yearn for your own memories",
        "Flip a coin if you can't make a decision, because the moment it's in the air, you know exactly what side you want it to land on.",
        "Everything will be okay in the end, so if it's not okay, it's not the end"
    ]
    text = msg[num]
    typeEffect()
})

const timer = setInterval(function() {
    let now = new Date().getTime()
    let left = date - now

    let day = Math.floor(left/(1000*60*60*24))
    let hour = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((left % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent = `There are ${day} days ${hour} hours ${minute} minutes and ${second} seconds before your birthday!🥳`
}, 1000)

function typeEffect(){
    if (i< text.length){
        p.innerHTML += text.charAt(i)
        i++
        setTimeout(typeEffect, 10000)
    }
}






document.getElementById("get").onclick = function () {
    const envelope = document.createElement("div")
    envelope.className = "envelope"
    envelope.id = "envelope"
    envelope.classList.add("envelope")
    document.body.appendChild(envelope)

    const frontEnvelope = document.createElement("div")
    frontEnvelope.className = "frontEnvelope"
    frontEnvelope.id = "frontEnvelope"
    frontEnvelope.classList.add("frontEnvelope")
    envelope.appendChild(frontEnvelope)

    const leftEnvelope = document.createElement("div")
    leftEnvelope.className = "leftEnvelope"
    leftEnvelope.id = "leftEnvelope"
    leftEnvelope.classList.add("leftEnvelope")
    frontEnvelope.appendChild(leftEnvelope)

    const rightEnvelope = document.createElement("div")
    rightEnvelope.className = "rightEnvelope"
    rightEnvelope.id = "rightEnvelope"
    rightEnvelope.classList.add("rightEnvelope")
    frontEnvelope.appendChild(rightEnvelope)

    const containContent = document.createElement("div")
    containContent.className = "containContent"
    containContent.id = "containContent"
    containContent.classList.add("containContent")
    envelope.appendChild(containContent)

    const openBtn = document.createElement("div")
    openBtn.className = "openBtn"
    openBtn.id = "openBtn"
    openBtn.classList.add("openBtn")
    openBtn.innerText = "Open"
    envelope.appendChild(openBtn)

    envelope.classList.toggle("push")

    openBtn.onclick = function () {
    topEnvelope.classList.toggle("open")
    envelope.classList.toggle("move")
    contentEnvelope.classList.toggle("open")
    openBtn.remove()
    }
    
    document.getElementById("container").remove()

    const topEnvelope = document.createElement("div")
    topEnvelope.className = "topEnvelope"
    topEnvelope.id = "topEnvelope"
    topEnvelope.classList.add("topEnvelope")
    containContent.appendChild(topEnvelope)

    const contentEnvelope = document.createElement("div")
    contentEnvelope.className = "contentEnvelope"
    contentEnvelope.id = "contentEnvelope"
    contentEnvelope.classList.add("contentEnvelope")
    containContent.appendChild(contentEnvelope)

    const images1 = document.createElement("div")
    images1.className = "images"
    images1.id = "img1"
    images1.classList.add("#img1")
    contentEnvelope.appendChild(images1)

    const images2 = document.createElement("div")
    images2.className = "images"
    images2.id = "img2"
    images2.classList.add("#img2")
    contentEnvelope.appendChild(images2)

    const images3 = document.createElement("div")
    images3.className = "images"
    images3.id = "img3"
    images3.classList.add("#img3")
    contentEnvelope.appendChild(images3)

    const images4 = document.createElement("div")
    images4.className = "images"
    images4.id = "img4"
    images4.classList.add("#img4")
    contentEnvelope.appendChild(images4)

    const images5 = document.createElement("div")
    images5.className = "images"
    images5.id = "img5"
    images5.classList.add("#img5")
    contentEnvelope.appendChild(images5)

    const images6 = document.createElement("div")
    images6.className = "images"
    images6.id = "img6"
    images6.classList.add("#img6")
    contentEnvelope.appendChild(images6)

    const images7 = document.createElement("div")
    images7.className = "images"
    images7.id = "img7"
    images7.classList.add("#img7")
    contentEnvelope.appendChild(images7)

    const images8 = document.createElement("div")
    images8.className = "images"
    images8.id = "img8"
    images8.classList.add("#img8")
    contentEnvelope.appendChild(images8)

    const images9 = document.createElement("div")
    images9.className = "images"
    images9.id = "img9"
    images9.classList.add("#img9")
    contentEnvelope.appendChild(images9)

    const images10 = document.createElement("div")
    images10.className = "images"
    images10.id = "img10"
    images10.classList.add("#img10")
    contentEnvelope.appendChild(images10)

    const pic = document.createElement("div")
    pic.className = "pic"
    pic.id = "pic"
    pic.classList.add("pic")
    contentEnvelope.appendChild(pic)

    const titleMsg = document.createElement("h1")
    titleMsg.className = "titleMsg"
    titleMsg.id = "titleMsg"
    titleMsg.classList.add("titleMsg")
    titleMsg.innerText = "To my Andeng"
    contentEnvelope.appendChild(titleMsg)

    const Msg = document.createElement("h1")
    Msg.className = "Msg"
    Msg.id = "Msg"
    Msg.classList.add("Msg")
    Msg.innerText = "I want to start this letter by saying HAPPYYY BIRTHDAYYY TO MY PRETTY, ATTRACTIVE, GORGEOUS, AND CARING ANDENGIEEE!! 19th years old na ka na! I pray na sana maging mas magaan ang lahat, now that your 19th years old na. I know that madami kang naranasang struggles in your 18th year and look at you now, na survive mo lahat ng yon', CONGRATSSS BEBE KO!! Do what you always do my dear andengie, stay kind po and syempre always stay prettyyyy. I hope that you spend your last teen year with a smile and gawin mo lang lahat ganda. `Carpe diem` always seize the day bebe ko. HAPPYYYY BIRTHDAYYYY AGAINN MY REAAAA!!"
    contentEnvelope.appendChild(Msg)

    const yLine = document.createElement("div")
    yLine.className = "yLine"
    yLine.id = "yLine"
    yLine.classList.add("yLine")
    contentEnvelope.appendChild(yLine)

    const xLine = document.createElement("div")
    xLine.className = "xLine"
    xLine.id = "xLine"
    xLine.classList.add("xLine")
    contentEnvelope.appendChild(xLine)

    const unlock = document.createElement("div")
    unlock.className = "unlock"
    unlock.id = "unlock"
    unlock.classList.add("unlock")
    unlock.onclick = function () {
        unlock.classList.toggle("open")
        xLine.classList.toggle("open")
        yLine.classList.toggle("open")
        frontEnvelope.remove()
        topEnvelope.remove()
        envelope.classList.toggle("bg")
        containContent.classList.toggle("bg")
        setTimeout(() => {
            unlock.remove()
            xLine.remove()
            yLine.remove()
        }, 500)
        setTimeout(() => {
            images1.classList.toggle("arrange")
            images2.classList.toggle("arrange")
            images3.classList.toggle("arrange")
            images4.classList.toggle("arrange")
            images5.classList.toggle("arrange")
            images6.classList.toggle("arrange")
            images7.classList.toggle("arrange")
            images8.classList.toggle("arrange")
            images9.classList.toggle("arrange")
            images10.classList.toggle("arrange")
        }, 1500)
    }
    unlock.innerText = "Click Me"
    contentEnvelope.appendChild(unlock)
}



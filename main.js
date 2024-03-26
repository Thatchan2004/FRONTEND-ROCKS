const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG ="https://cdn1.iconfinder.com/data/icons/internet-marketing-3-1/32/__bot_chatbot_artificial_robot-512.png";
const PERSON_IMG = "https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0";
const BOT_NAME = "BOT";
var PERSON_NAME = "Code Mo";


function nameFunction() {
    var maininp = document.getElementById("msg-inp");
    var inp = document.getElementById('inp');
    var msginp = document.getElementById("msginp");
    var name = inp.value.trim();
    if (name !== "") {
        maininp.innerText= inp.value;
        msginp.textContent = `Welcome ${name} and feel free to ask questions`;
        inp.style.display = "none";
        PERSON_NAME = inp.value;
        msgerForm.style.display = "flex";
    }
}

const prompts =[
["hi", "hey", "hello", "good morning", "good afternoon","hai","hey bot","hey chat bot"],
["how are you", "how is life", "how are things"],
["what are you doing", "what is going on", "what is up"],
["how old are you"],
["who are you", "are you human", "are you bot", "are you human or bot"],
["who created you", "who made you"],
["your name please" ,"your name" ,"may i know your name", "what is your name" ,"what call yourself"],
["i love you"],
["happy", "good", "fun", "wonderful", "fantastic", "cool"],
["bad", "bored", "tired"],
["help me", "tell me story", "tell me joke"],
["ah", "yes", "ok", "okay", "nice"],
["bye", "good bye", "goodbye", "see you later"],
["what should i eat today"],
["bro"],
["what", "why", "how", "where", "when"],
["no", "not sure", "maybe", "no thanks"],
[""],
["haha", "ha", "1ol", "hche", "funny", "joke"],
["how to manage stress and stay balanced?"],
["i am sad"],
["i feel lonelyness","i feel lonely","iam on lonely"],
["give a tip to free from stress"],
["i got mental pressure"]
];
const replies = [
    ["Hello!", "Hi!", "Hey!", "Hi there!", "Howday"],
    ["Fine... how are you?","Pretty well, how are you?","Fantastic, how are you?"],
    ["Nothing much","About to go to sleep","Can you guess?","I don't know actually"],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["The one true Developer, Code Mo"],
    ["I am nameless", "I don't have a nane"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza"],
    ["erol"],
    ["Great question"],
    ["That's ok", "I understand", "What do you want to talk about?"],
    ["Please enter something"],
    ["Hahal", "Good one!"],
    ["Practice mindfulness, deep breathing daily. Focus on present, breathe slowly to reduce stress and promote calmness."],
    ["Don't worry sir , iam there to make u happy"],
    ["don't feel lonely sir , iam your friend "],
    ["One tip to free yourself from stress is to engage in physical activity, like going for a walk or practicing yoga."]
];
const alternative = [
    "Same" ,
    "Go on.." ,
    "Bro.. ",
    "Try again",
    "I'm listening..",
    "I don't understand :/"
]
const robot = ["How do you do, fellow human", "I am not a bot"];
msgerForm.addEventListener("submit" , event => {
    event.preventDefault();
    const msgText = msgerInput.value;
    if(!msgText) return;
    msgerInput.value = "";
    addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
    output(msgText);
});

function output(input){
    let product;
    let text = input.toLowerCase().trim();

    if (compare(prompts, replies, text)) {
        product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
        product = "You're welcome";
    } else if (text.match(/(robot|bot|robo)/gi)) {
        product = robot[Math.floor(Math.random()* robot.length)];
    } else {
        product = alternative[Math.floor(Math.random()* alternative.length)];
    }

    const delay = input.split(" ").length * 100;
    setTimeout(() => {
        addChat(BOT_NAME, BOT_IMG, "left", product);
    }, delay);
}

    

function compare(promptsArray, repliesArray, string){
let reply;
let replyFound = false;
for(let x = 0;x < promptsArray.length; x++){
    for(let y = 0;y < promptsArray[x].length; y++){
        if (promptsArray[x][y]=== string){
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
        }
    }
    if (replyFound){
        break;
    }
}
return reply;
}
function addChat(name, img, side, text){
    const msgHTML = `
    <div class="msg ${side}-msg">
    <div class="msg-img" style="background-image:url(${img})"></div>
    <div class="msg-bubble">
    <div class="msg-info">
    <div class="msg-info-name">${name}</div>
    <div class="msg-info-time">${formatDate(new Date())}</div> 
    </div>
    <div class="msg-text">${text}</div>
    </div>
    </div> `;
    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
}

function get (selector,root = document){
    return root.querySelector(selector);
}
function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`; 
}

function random(min, max){
    return Math.floor(Maths.random()* (max - min) + min);
}
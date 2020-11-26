const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// 
const greeting = [
   'im very good. ekku keeps me safe and secure',
   'im doing very good ,thanks for asking',
   'im very cozzy all thanks to eklavya' 
];

const weather = [
    'weather is fine',
    'its almost going out time now',
    'weather is good , you mustv step out today'
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('voice activated');
}

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
content.textContent = transcript ; 
readOutLoud(transcript); 
    // console.log(event);
}

// add event listner /lfighpistuhg/w4ojv8aer
btn.addEventListener('click', () =>{
    recognition.start(); 
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'i dont understood it , please ask eklavya how to chat with me' ;

    if(message.includes('how are you')){
       const finalText = greeting[Math.floor(Math.random() * greeting.length)];
        speech.text =  finalText;
    }

   else if(message.includes('how is weather')){
        const finalText = weather[Math.floor(Math.random() * weather.length)];
         speech.text =  finalText;
     }
 
     else if(message.includes('who is your owner')){
        // const finalText = weather[Math.floor(Math.random() * weather.length)];
         speech.text =  'my owner is Jeet singh';
     }
    speech.volume = 1;
    speech.rate = 0.9;
    speech.pitch = 1 ;

    window.speechSynthesis.speak(speech);
}
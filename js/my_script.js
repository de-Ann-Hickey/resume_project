var fortunes = [
    'You will find a perfect accomplice for a very silly task.',
    'Your smile is contagious. Infect everyone!',
    'Don\'t panic.',
    'The best year-round temperature is a warm heart and a cool head.',
    'It could be better, but it\'s good enough.',
    'You will find a thing. It may be important.',
    'Your reality check is about to bounce.',
    'Two days from now, tomorrow will be yesterday.',
    'You are cleverly disguised as responsible adult.',
    'Person who eats fortune cookie gets lousy dessert.',
    'It\'s Okay to look at past and future. Just don\'t stare.',
    'You will soon have an out of body experience.',
    'He who dies with most toys, still dies.',
    'Person who rests on laurels gets a thorn in their backside.',
    'Marriage lets you annoy one special person for the rest of your life.',
    'Person who hires me will have a long happy life.',
    'I cannot help you, for I\'m just a cookie.',
    'The fortune you seek, is in another cookie.',
    'This is a simple program I made with Javascript. Oh sorry, this is supposed to be a fortune. Click again!',
    'Give person a fish, they eat for day. Teach person to fish, they always smell funny.',
    'Person who argues with an idiot is taken for fool.',
    'Look before you leap. Or wear a parachute.',
    'This fortune is no good. Try another.'
]

function newFortune() {
    var randomNumber = Math.floor(Math.random() * (fortunes.length));
    document.getElementById('fortune').innerHTML = fortunes[randomNumber];
}

axios.post("https://ncz1smahrd.execute-api.us-west-1.amazonaws.com/final/")
.then(response =>{
    console.log(response.data)
    var newNumber = response.data.Attributes.sequence_number.N
    document.getElementById("counter").innerHTML = newNumber;
})






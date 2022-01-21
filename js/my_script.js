var fortunes = [
    'You will find a bushel of money.',
    'Your smile is contagious. Infect everyone!',
    'Don\'t panic.',
    'The best year-round temperature is a warm heart and a cool head.',
    'It could be better, but it\'s good enough.',
    'You will find a thing. It may be important.',
    'Your reality check about to bounce.',
    'Two days from now, tomorrow will be yesterday.',
    'You are cleverly disguised as responsible adult.',
    'Person who eat fortune cookie get lousy dessert.',
    'Okay to look at past and future. Just don\'t stare.',
    'You will soon have an out of money experience.',
    'He who dies with most toys, still dies.',
    'Person who rests on laurels gets thorn in backside.',
    'Marriage lets you annoy one special person for the rest of your life.',
    'Person who hires me will have long happy life.',
    'I cannot help you, for I\'m just a cookie.',
    'The fortune you seek, is in another cookie.',
    'About time I got out of that cookie!',
    'Give person fish, he eat for day. Teach person to fish, he always smell funny.',
    'Person who argues with idiot is taken for fool.',
    'Look before you leap. Or wear a parachute.',
    'This fortune no good. Try another.'
]

function newFortune() {
    var randomNumber = Math.floor(Math.random() * (fortunes.length));
    document.getElementById('fortune').innerHTML = fortunes[randomNumber];
}

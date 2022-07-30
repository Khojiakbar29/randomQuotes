function randomQuote () {
    var allQuotes = [
        ['The way to get started is to quit talking and begin doing'],
        ['Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.'],
        ['If life were predictable it would cease to be life, and be without flavor'],
        ['If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.'],
        ['If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.'],
        ['Life is what happens when you\'re busy making other plans.'],
        ['Spread love everywhere you go. Let no one ever come to you without leaving happier.'],
        ['When you reach the end of your rope, tie a knot in it and hang on.'],
        ['Always remember that you are absolutely unique. Just like everyone else.']
    ];

    var allAuthors = [
        ['-Walt Disney'],
        ['-Steve Jobs'],
        ['-Eleanor Roosevelt'],
        ['-Oprah Winfrey'],
        ['-James Cameron'],
        ['-John Lennon'],
        ['-Mother Teresa'],
        ['-Franklin D. Roosevelt'],
        ['-Margaret Mead']

    ];

    var randomOrderForQuote = Math.floor(Math.random() * allQuotes.length);
    
    document.getElementById('text').innerHTML = allQuotes[randomOrderForQuote];
    document.getElementById('author').innerHTML = allAuthors[randomOrderForQuote];

}

randomQuote();
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

/*  GLOBAL VARIABLES ==========================================================
    int_current_index = current quote index
    quotes = A collection of "Quote" objects

*/
    
var int_current_index = 0,
    quotes = [
      {
        quote: "Knowledge is power, and books can transport you to amazing places.",
        source: "Dr. Seuss",
        citation: "The Lorax",
        year: '1971'
      },
      {
        quote: "Unless someone like you cares a whole awful lot, Nothing is going to get better. It’s not.",
        source: "Dr. Seuss",
        citation: 'Oh, the Places You’ll Go!',
        year: 'January 22, 1990'
      },
      {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself Any direction you choose.",
        source: "Dr. Seuss",
        citation: 'One Fish Two Fish Red Fish Blue Fish',
        year: 'March 12, 1960'
      },
      {
        quote: 'Today you are you, that is truer than true. There is no one alive who is youer than you.',
        source: "Dr. Seuss",
        citation: 'Happy Birthday to You!',
        year: '1959'
      },
      {
        quote: 'Think left and think right and think low and think high. Oh, the thinks you can think up if only you try!',
        source: "Dr. Seuss",
        citation: 'Oh, the Thinks You Can Think',
        year: 'August 21, 1975'
      },
      {
        quote: 'Don’t give up! I believe in you all. A person’s a person, no matter how small! And you very small persons will not have to die. If you make yourselves heard! So come on, now, and TRY!',
        source: "Dr. Seuss",
        citation: 'Horton Hears a Who!',
        year: '1954'
      }
    ];

/*  GLOBAL VARIABLES ==========================================================

*/

var getRandomQuote = function (current_index) {
  var int_new_index;

  // Do while loop ensures there are no repeating quotes
  do {
    int_new_index = Math.floor( ( Math.random() * quotes.length ) + 0 );

    console.log(int_new_index);

  } while(current_index === int_new_index);

  int_current_index = int_new_index;

  return quotes[int_current_index];

}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);




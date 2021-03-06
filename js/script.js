(function(){
  "use strict";

  

    /*  (object) quoteGenerator = GLOBAL OBJECT ===========================================================
        - (int)   current = current quote index
        - (array) quotes = A collection of "Quote" objects
    */

    var quoteGenerator = {
      current: 0,
      quotes: [
        {
          quote: "Knowledge is power, and books can transport you to amazing places.",
          source: "Dr. Seuss",
          citation: "The Lorax",
          year: "1971"
        },
        {
          quote: "Unless someone like you cares a whole awful lot, Nothing is going to get better. It’s not.",
          source: "Dr. Seuss",
          citation: "Oh, the Places You’ll Go!",
          year: "January 22, 1990"
        },
        {
          quote: "You have brains in your head. You have feet in your shoes. You can steer yourself Any direction you choose.",
          source: "Dr. Seuss",
          citation: "One Fish Two Fish Red Fish Blue Fish",
          year: "March 12, 1960"
        },
        {
          quote: "Today you are you, that is truer than true. There is no one alive who is youer than you.",
          source: "Dr. Seuss",
          citation: "Happy Birthday to You!",
          year: "1959"
        },
        {
          quote: "Think left and think right and think low and think high. Oh, the thinks you can think up if only you try!",
          source: "Dr. Seuss",
          citation: "Oh, the Thinks You Can Think",
          year: "August 21, 1975"
        },
        {
          quote: "Don’t give up! I believe in you all. A person’s a person, no matter how small! And you very small persons will not have to die. If you make yourselves heard! So come on, now, and TRY!",
          source: "Dr. Seuss",
          citation: "Horton Hears a Who!",
          year: "1954"
        }
      ]
    };

    /*  (function) getRandomQuote() ========================================================== */
    
    //  DESCRIPTION: 
    //  - Generates and returns a random number between the range of the total quotes 
    
    //  DEPENDENCIES: 
    //  - none

    //  PROPERITES: 
    //  - int_current: Current quote index 
    //  - length: Current total quote length

    //  RETURNS:
    //  - int_new_index: The new randomly generated index / integer

    //  NOTES: 
    //  - I would prefer to just pass a int and return a int verse passing a full data strucure... It seems a int would be smaller to pass around.
    //  - I have do while loop to prevent quotes from showing up 2 times in row

    var getRandomQuote = function (int_current, length) {

      var int_new_index;

      // Do while loop ensures there are no repeating quotes
      do {
        int_new_index = Math.floor( ( Math.random() * length ) + 0 );
      } while(int_current === int_new_index);

      return int_new_index;
    };


  
    /*  (function) printQuote() ========================================================== */

    //  DESCRIPTION: 
    //  - Gets a random number from getRandomQuote(). Valudates the data from the return random number. Then renders the new quote inside 'quote-box' div element.

    //  DEPENDENCIES: 
    //  - (object) quoteGenerator 
    //  - (function) getRandomQuote()

    //  RETURNS:
    //  - int_new_index: The new randomly generated index / integer

    //  NOTES: 
    //  - I would prefer to just pass a int and return a int verse passing a full data strucure... It seems a int would be smaller to pass around.
    //  - I have do while loop to prevent quotes from showing up 2 times in row

    var printQuote = function () {

      var string_rendered_quote, int_new_index, object_new_quote;

      // Assign globals to local private variables to improve prefomrance
      int_new_index = getRandomQuote(quoteGenerator.current, quoteGenerator.quotes.length);
      object_new_quote = quoteGenerator.quotes[int_new_index];

      // Looking to see if properies exists before creating the string
      if (!(object_new_quote.hasOwnProperty('quote')) || !(object_new_quote.hasOwnProperty('source'))) {
        console.log("- MISSING QUOTE OR SOURCE PROPERTY FROM OBJECT ----------");
        console.log("quote in object_new_quote: " + object_new_quote.hasOwnProperty('quote'));
        console.log("source in object_new_quote: " + object_new_quote.hasOwnProperty('source'));
        console.log("---------------------------------------------------------");

        document.getElementById('quote-box').innerHTML = '<div class="error" ><strong>For some weird reason there has been an error.</strong><br /> Please click the button one more time to try agian! =O)</p>';

        return;
      }
      
      string_rendered_quote = '<p class="quote">'+ object_new_quote.quote +'</p> <p class="source">'+ object_new_quote.source;

      // Looking to see if property exists before adding to the string
      if(object_new_quote.hasOwnProperty("citation")){
        if(typeof object_new_quote.citation == 'string') {
          if(object_new_quote.citation.length > 0) {
            string_rendered_quote += '<span class="citation">'+ object_new_quote.citation +'</span>';
          }
        }
      }

      // Looking to see if property exists before adding to the string
      if(object_new_quote.hasOwnProperty("year")){
        if(typeof object_new_quote.year == 'string') {
          if(object_new_quote.year.length > 0) {
            string_rendered_quote += '<span class="year">'+ object_new_quote.year +'</span>';
          }
        }
      }

      string_rendered_quote += '</p>';
      quoteGenerator.current = int_new_index;
      
      document.getElementById('quote-box').innerHTML = string_rendered_quote;

    };

    document.getElementById('loadQuote').addEventListener("click", printQuote, false);

})();
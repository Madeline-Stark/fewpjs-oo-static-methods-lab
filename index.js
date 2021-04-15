class Formatter {
  static capitalize( string ) {
      // Capitalize first letter of string, attach the rest
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }

  static sanitize( string ) {
      // use regex, can use rubular?

    // replace non matching characters with an empty string
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
    // [] is a range
    // [A-Z] is all letters A-Z
    // [a-z] is all letters a-z
    // [0-9] is all numbers 0-9
    // negated charactersets: ^ will match everything except these 
    // if not in brackets, ^ will match anything at the beginning of a string
    // [^A-Za-z0-9] so this will replace everything but these characters
    
       // '
    // matches white space, like here: "ca$@#tching cold" (so will not replace the white space)

    // - 
    // matches the dash, like here: "Entertaining-Elephants" (so will not replace the dash)


    // /g matches every occurence
    // "AABBDDDEEE".match( /[A-C]/) so this only returns the first A
    // "AABBDDDEEE".match( /[A-C]/g) this returns all the matching letters

  }

  static titleize( sentence ) {
      // letters don't want to capitalize
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    
    // make array to collect words in
    let result = [];

    // split the sentence
    let arrayOfWords = sentence.split( " " )

    // iterate through words
    for ( let n = 0; n < arrayOfWords.length; n++ ) {

      if ( n == 0 ) { // if it's the first word, always capitalize, even if the or and etc
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) { // check if has the, and, etc.
          result.push( arrayOfWords[ n ] ) // if so, dont capitalize
        } else {
            // otherwise capitalize
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }

    // join together array of words
    return result.join( " " );
  }
}
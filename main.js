// The learning objective of this exercise is to practice defining and using function arguments.

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, symbol) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
      if (i % 3 === 0 && i > 0) {
        buildMeUp = `${buildMeUp} ${sentence[i]}${symbol}`
      } else {
        buildMeUp = `${buildMeUp} ${sentence[i]}`
      }

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// // I want to use a question mark
addExcitement(sentence, "?");

// Example output:
// The
// The walrus
// The walrus danced
// The walrus danced through?
// The walrus danced through? the
// The walrus danced through? the trees
// The walrus danced through? the trees in?
// etc..


/*    Il software riceve in input un lungo testo e una serie di parole da censurare.
   Restituisce il testo con xxx al posto delle parole censurate.
   Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali
*/

var theText = prompt("inserisci testo da censurare");
var theWords = prompt("inserisci parole da censurare, divise da spazi");

console.log(theText);

function censor(text, words) {
  if (words && text) {
    //trasformo il testo e le parole da censurare in array;
    var textArray = text.toUpperCase().split(" ");
    var wordsArray = words.toUpperCase().split(" ");

    var badWordsSum = 0;

    for (var i = 0; i < wordsArray.length; i++) {
      while (textArray.indexOf(wordsArray[i]) !== -1) {
        var index = textArray.indexOf(wordsArray[i]);
        textArray[index] = "xxx";
        badWordsSum += 1;
      }
    }

    var result = textArray.join(" ").toLowerCase();

    return ("Parole censurate: " + badWordsSum + " su " + textArray.length + "\n" + result);

  } else {

    return "errore nell'input";

  }


}

console.log(censor(theText, theWords));
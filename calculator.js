const verlauf = []; //Array für den Verlauf

//Funktion, um den Verlauf zu aktualisieren
function printverlauf() {
  let text = ""; //löscht den bisherigen Verlauf
  for (let i = 0; i < verlauf.length; i++) { //Schleife um das gesamte Verlaufarray durchzugehen
    text += verlauf[i] + "<br>"; //nach jeder Rechnung <br>
  }
  document.getElementById("verlauf").innerHTML = text; //hängt neue Rechnung an bestehenden Verlauf an
}

function add() {
  let a = parseFloat(document.getElementById("a").value); //parseFloat wandelt eionen string in ein float um
  let b = parseFloat(document.getElementById("b").value);
  let ergebnis = a + b;
  verlauf.push(a + " + " + b + " = " + ergebnis); //.push fügt ein element an das ende eines arrays an
  console.log(ergebnis);
  return ergebnis;
}
function sub() {
  let a = parseFloat(document.getElementById("a").value); //parseFloat wandelt eionen string in ein float um
  let b = parseFloat(document.getElementById("b").value);
  let ergebnis = a - b;
  verlauf.push(a + " - " + b + " = " + ergebnis);
  return ergebnis;
}
function mult() {
  let a = parseFloat(document.getElementById("a").value); //parseFloat wandelt eionen string in ein float um
  let b = parseFloat(document.getElementById("b").value);
  let ergebnis = a * b;
  verlauf.push(a + " * " + b + " = " + ergebnis);
  return ergebnis;
}
function div() {
  let a = parseFloat(document.getElementById("a").value); //parseFloat wandelt eionen string in ein float um
  let b = parseFloat(document.getElementById("b").value);
  if (b != 0) { //Abfrage, ob die Division möglich ist
    let ergebnis = a / b;
    verlauf.push(a + " / " + b + " = " + ergebnis);
    return ergebnis;
  } else {
    return "Division durch 0 nicht möglich";
  }
}

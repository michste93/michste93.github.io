<?php
  echo "cityyyyyyyy";
  $arrivo = $_POST["arrivalDate"];
  $partenza = $_POST["departureDate"];
  $pensione = $_POST["board"];
  $camera = $_POST["room"];
  $adulti = $_POST["adults"];
  $bimbo1 = $_POST["child1"];
  $bimbo2 = $_POST["child2"];
  $bimbo3 = $_POST["child3"];
  $messaggio = $_POST["textarea"];
  $email_to = "michste93@gmail.com";
  $oggetto = "Richiesta informazioni";
  $titolo = $_POST["title"];
  $nome = $_POST["name"];
  $cognome = $_POST["surname"];
  $email = $_POST["email"]; 
  $indirizzo = $_POST["address"];
  $zip = $_POST["zip"];
  $citta = $_POST["city"];
  $stato = $_POST["country"];
  $telefono = $_POST["phone"];
  $newsletter = $_POST["news"];
  $data = "Arrivo: ".$arrivo."Partenza: ".$partenza."Pensione: ".$pensione."Camera: ".$camera."Adulti: ".$adulti."Bambino 1: ".$bimbo1."Bambino 2: ".$bimbo2."Bambino 3: ".$bimbo3."Messaggio: ".$messaggio."Titolo: ".$titolo."Nome: ".$nome."Cognome: ".$cognome."Email: ".$email."Indirizzo: ".$indirizzo."Zip: ".$zip."Città: ".$citta."Stato: ".$stato."Telefono: ".$telefono."Newsletter: ".$newsletter;
  
	if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($email_to, $oggetto, $data); //This method sends the mail.
echo "Your email was sent!"; // success message
}else{
echo "Invalid Email, please provide an correct email.";
}

?>



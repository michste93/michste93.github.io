<?php
    $arrivo = $_POST["arrivalDate"];
    $partenza = $_POST["departureDate"];
    $pensione = $_POST["board"];
    $camera = $_POST["room"];
    $adulti = $_POST["adults"];
    $bimbo1 = $_POST["child1"];
    $bimbo2 = $_POST["child2"];
    $bimbo3 = $_POST["child3"];
    $messaggio = $_POST["textarea"];
    $email_to = "info@berghotelmiramonti.it";
    $oggetto = "Richiesta informazioni da sito internet";
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
    $data = "Titolo: ".$titolo."\n"."Nome: ".$nome."\n"."Cognome: ".$cognome."\n"."Arrivo: ".$arrivo."\n".
    "Partenza: ".$partenza."\n"."Pensione: ".$pensione."\n"."Camera: ".$camera."\n"."Adulti: ".$adulti."\n"."Bambino 1: ".$bimbo1."\n"."Bambino 2: ".$bimbo2."\n"."Bambino 3: ".$bimbo3."\n"."Messaggio: ".$messaggio."\n"."Titolo: ".$titolo."\n"."Nome: ".$nome."\n"."Cognome: ".$cognome."\n"."Email: ".$email."\n"."Indirizzo: ".$indirizzo."\n"."Zip: ".$zip."\n"."Città: ".$citta."\n"."Stato: ".$stato."\n"."Telefono: ".$telefono."\n"."Newsletter: ".$newsletter ;



ini_set("SMTP","smtp.berghotelmiramonti.it");
ini_set("sendmail_from","postmaster@berghotelmiramonti.it");

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo("L'email non è valida. Le preghiamo di controllare" . "\n" . "The email is not valid. Please enter a valid email");
  
}


$val = mail($email_to, $oggetto, $data, "From: " . $email );
if($val)
{
	echo "Grazie, le risponderemo il più presto possibile." . "\n" . "Thank you, we'll answer you as soon as possible."; // success message
}
else
{
	echo "There was an error, please try again.";
}

?>



<?php
	$file = 'news.txt';
	$email = $_POST["email"];
	$name = $_POST["name"];
	$lang = $_POST["lang"];
    $person='';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo("L'email non è valida. Le preghiamo di controllare" . "\n" . "The email is not valid. Please enter a valid email" );
  exit;
}
$person= "Nome: " . $name . " email: " .$email . "  lingua: " . $lang . "\n"; 

$val = file_put_contents($file, $person, FILE_APPEND | LOCK_EX);
if($val)
{
	echo "Grazie, Lei è ora iscritto alla newsletter." . "\n" . "Thank you, you are now enrolled to our newsletter."; // success message
}
else
{
	echo "There was an error, please try again. Si è verificato un errore, La preghiamo di riprovare.";
}


?>



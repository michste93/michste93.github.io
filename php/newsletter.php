<?php
	$file = 'news.txt';
	$person = $_POST["mail"];

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo("L'email non è valida. Le preghiamo di controllare" . "\n" . "The email is not valid. Please enter a valid email");
  
}


$val = file_put_contents($file, $person, FILE_APPEND | LOCK_EX);
if($val)
{
	echo "Grazie, Lei è ora iscritto alla newsletter." . "\n" . "Thank you, you are now enrolled to our newsletter."; // success message
}
else
{
	echo "There was an error, please try again.";
}


?>



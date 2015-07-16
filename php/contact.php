<?php

if(!isset($_POST['name'])){
    $name = $_POST['mail'];
}else{
    $name = $_POST['name'];
}

$to = "michste93@gmail.com";
$object = $_POST['object'];
$message = $_POST['mex'];
$headers = 'From: ' . $_POST['email'] . "\r\n" .
    'Reply-To: ' . $name . "\r\n" .
    'X-Mailer: DT_formmail';
echo $name . " " . $to . " " . $object . " " . $message . " " . $headers;
$val=mail($to, $object, $message, $headers);

if($val)
{
	echo "Grazie, le risponderò il più presto possibile." . "\n" . "Thank you, I'll answer you as soon as possible."; // success message
}
else
{
	echo "There was an error, please try again.";
}


?>

<?php
$first_name= $_POST ['name'];
$email= $_POST ['email'];
$message= $_POST ['message'];

$to="caisaac2013@gmail.com";
$subject="New Message";
mail($to,$subject,$message,"From: ".$first_name);
echo "Your Message Has Been Sent!";
 ?>

<?php

 

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'vendor/autoload.php';
  $mail = new PHPMailer(true);

  
  

  // $headers =  'MIME-Version: 1.0' . "\r\n";
  // $headers .= 'From: kokou <jeanmarcjoel97@gmail.com>' . "\r\n";
  // $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";



  // if(!empty($mail) && !empty($message)){

  //   if(filter_var($mail, FILTER_VALIDATE_EMAIL)) {

  //     $receiver = "jeanmarcjoel97@gmail.com";
  //     $subject = "$entreprise";
  //     $body = "Message : $message";
  //     $sender = "From : $mail";



  //     if(mail($receiver, $subject, $body, $sender)){
  //       echo "votre message a été envoyé avec succès";
  //     }else{
  //       echo "error sending your message";
  //     }

  //   }else {
  //     echo "Entrez une adresse mail valide";
  //   }

  // }else{
  //   echo "Email et message requis";
  // }

  try{

  

    $fullname = $_POST['fullname'];
    $entreprise = $_POST['entreprise'];
    $email = $_POST['email'];
    $select = $_POST['select'];
    $select1 = $_POST['select1'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];


    // if(empty($_POST['email'])){
      // $email = 'demo@gmail.com';
      // $message = 'testing contact form';
      // $fullname = 'unknown';
      // $select = 'subject';
    
    
      $mail->SMTPDebug = 2;                                       
      $mail->isSMTP();                                            
      $mail->Host       = 'smtp.elasticemail.com';                    
      $mail->SMTPAuth   = true;                             
      $mail->Username   = 'jeanmarcjoel97@gmail.com';                 
      $mail->Password   = '954D3A91F813588A4D18265238649DCCBA21';                        
      $mail->SMTPSecure = 'tls'; // ssl tls                             
      $mail->Port       =  587;  // 465 587
    
      $mail->setFrom($email, $fullname);           
      $mail->addAddress('agbogan.kokou@yahoo.fr');
  
         
      $mail->isHTML(true);                                  
      $mail->Subject = $select;
      $mail->Body    = $message;
      $mail->AltBody = 'Body in plain text for non-HTML mail clients';
      
        $mail->send();
        
      //exit(json_encode(array("response : " => $response)));

    
    }catch (Exception $e) {
      echo "votre message n'a pas pu être envoyé du php";
  }
  ?>

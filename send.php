<?php
// Файлы phpmailer
require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';
require './phpmailer/Exception.php';


$title = '';
$body = '';
$briefName = '';
$briefPhone = '';
$briefText = '';
$briefEmail = '';


// Переменные, которые отправляет пользователь
if ((isset($_POST['brief_name'])) && 
        (isset($_POST['brief_phone'])) &&
        (isset($_POST['brief_email']))){
  $briefName = $_POST['brief_name'];
  $briefPhone = $_POST['brief_phone'];
  $briefEmail = $_POST['brief_email'];
  $briefText = $_POST['brief_text'];
// Формирование самого письма
  $title = "Новое соощение с сайта ehya";
  $body = "
  <h2>Новое соощение с сайта ehya:</h2>
  <b>Имя:</b> $briefName<br>
  <b>Телефон:</b> $briefPhone<br><br>
  <b>E-mail:</b> $briefEmail<br><br>
  <b>Сообщение:</b><br>$briefText
  ";
} else {
  die("Входные данные пусты. Скрипт завершается.");
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'from@gmail.com'; // Логин на почте
    $mail->Password   = '***'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('from@gmail.com', 'Имя'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('to@yandex.ru');  
    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
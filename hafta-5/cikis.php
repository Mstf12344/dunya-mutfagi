<?php
/** Çıkış: yalnızca POST ve CSRF doğrulamasıyla; oturum verisi ve çerez silinir. */
declare(strict_types=1);
require_once __DIR__ . '/_ortak.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: giris.php');
    exit;
}
csrf_dogrula();
$_SESSION = [];
if (ini_get('session.use_cookies')) {
    $c = session_get_cookie_params();
    setcookie(session_name(), '', ['expires' => time() - 3600, 'path' => $c['path'], 'httponly' => true, 'samesite' => 'Lax']);
}
session_destroy();
header('Location: giris.php?ok=cikis');
exit;

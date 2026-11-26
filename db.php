<?php
/**
 * PDO bağlantısı (tek yerden). Ayarlar config.php içindedir.
 * Kullanım:  $pdo = db();  $st = $pdo->prepare('SELECT * FROM tarifler WHERE id = :id');
 */
declare(strict_types=1);

require_once __DIR__ . '/config.php';

function db(): PDO
{
    static $pdo = null;
    if ($pdo === null) {
        $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4';
        $pdo = new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,   // hatalar istisna olarak gelir
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,                    // gerçek hazır ifadeler (SQL injection'a karşı)
        ]);
    }
    return $pdo;
}

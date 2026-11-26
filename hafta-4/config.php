<?php
/**
 * Veritabanı ayarları (XAMPP varsayılanları).
 * Farklıysa DB_HOST, DB_NAME, DB_USER, DB_PASS ortam değişkenleriyle değiştirilir.
 * Gerçek parola bu dosyaya yazılmaz.
 */
declare(strict_types=1);

define('DB_HOST', (string)(getenv('DB_HOST') ?: '127.0.0.1'));
define('DB_NAME', (string)(getenv('DB_NAME') ?: 'dunya_mutfagi_hafta4'));
define('DB_USER', (string)(getenv('DB_USER') ?: 'root'));
define('DB_PASS', (string)(getenv('DB_PASS') ?: ''));

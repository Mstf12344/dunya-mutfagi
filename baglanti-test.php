<?php
/** 1. hafta kontrolü: PDO bağlantısı çalışıyor mu, kayıtlar geliyor mu? Tarayıcıda: /baglanti-test.php?id=2 */
declare(strict_types=1);
require_once __DIR__ . '/db.php';
header('Content-Type: text/plain; charset=utf-8');

try {
    $pdo = db();
    echo "Bağlantı tamam: " . DB_NAME . "\n\n";
    echo "Tüm kayıtlar:\n";
    foreach ($pdo->query('SELECT id, kullanici_id, baslik FROM tarifler ORDER BY id') as $r) {
        echo "  #{$r['id']} (sahip {$r['kullanici_id']}) {$r['baslik']}\n";
    }
    $id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
    if ($id) {
        $st = $pdo->prepare('SELECT id, baslik, mutfak FROM tarifler WHERE id = :id');
        $st->execute([':id' => $id]);
        $r = $st->fetch();
        echo "\nid=$id: " . ($r ? "{$r['baslik']} ({$r['mutfak']})" : 'kayıt yok') . "\n";
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo "Veritabanı hatası. kurulum.sql içe aktarıldı mı, MySQL açık mı?\n";
}

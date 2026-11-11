<?php
/**
 * Serves the large recipe data sets as cacheable, gzip-compressed JavaScript:
 *   data.php?set=wb      -> const WB_DATA=[...];     (Wikibooks recipes)
 *   data.php?set=flags   -> const MDB_FLAGS={...};   (country flag images)
 *   data.php?set=embed   -> const EMBED={...};       (embedded recipe photos)
 */
declare(strict_types=1);

const SETS = [
    'wb'    => ['WB_DATA',   'wb_data.json'],
    'flags' => ['MDB_FLAGS', 'mdb_flags.json'],
    'embed' => ['EMBED',     'embed.json'],
];

$set = $_GET['set'] ?? '';
if (!isset(SETS[$set])) {
    http_response_code(404);
    header('Content-Type: text/plain; charset=utf-8');
    exit('Unknown data set');
}
[$var, $file] = SETS[$set];
$path = __DIR__ . '/data/' . $file;
if (!is_file($path)) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=utf-8');
    exit('Data file missing');
}

$etag = '"' . md5($set . filemtime($path) . filesize($path)) . '"';
header('Content-Type: application/javascript; charset=utf-8');
header('Cache-Control: public, max-age=31536000, immutable');
header('ETag: ' . $etag);
header('Vary: Accept-Encoding');
if (($_SERVER['HTTP_IF_NONE_MATCH'] ?? '') === $etag) {
    http_response_code(304);
    exit;
}

if (function_exists('ob_gzhandler')) {
    ob_start('ob_gzhandler');
}
echo 'const ', $var, '=';
readfile($path);
echo ';';

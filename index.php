<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
header('Content-Type: text/html; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');
?>
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<?php include __DIR__ . '/partials/head.php'; ?>
</head>
<body>
<?php include __DIR__ . '/partials/body.php'; ?>

<script>
window.APP_CONFIG = <?= json_encode([
    'supaUrl'    => SUPA_URL,
    'supaKey'    => SUPA_KEY,
    'supaGoogle' => SUPA_GOOGLE,
], JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP) ?>;
</script>
<script src="data.php?set=wb" defer></script>
<script src="data.php?set=flags" defer></script>
<script src="data.php?set=embed" defer></script>
<script src="<?= asset('assets/js/app.js') ?>" defer></script>
<script src="<?= asset('assets/js/hero.js') ?>" defer></script>
<script src="<?= asset('assets/js/motion.js') ?>" defer></script>
</body>
</html>

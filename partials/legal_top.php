<?php /** @var string $title */ ?>
<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= e($title) ?></title>
<link rel="stylesheet" href="<?= asset('assets/css/legal.css') ?>">
<?php if (ANALYTICS): ?>
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)}</script>
<script defer src="/_vercel/insights/script.js"></script>
<?php endif; ?>
</head><body><main>
<?php
/**
 * World Kitchen (Dünya Mutfağı) – PHP configuration.
 * Values can be overridden with environment variables (Apache SetEnv, php-fpm env, `export` before `php -S`).
 * The Supabase key below is the public "anon" key – it is meant to be visible in the browser.
 */
declare(strict_types=1);

define('SITE_URL', rtrim((string)(getenv('SITE_URL') ?: 'https://dunya-mutfagi.vercel.app'), '/') . '/');
define('SUPA_URL', (string)(getenv('SUPA_URL') ?: "https://zaaqcndfftcoavqponua.supabase.co"));
define('SUPA_KEY', (string)(getenv('SUPA_KEY') ?: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphYXFjbmRmZnRjb2F2cXBvbnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4Mjg3OTUsImV4cCI6MjEwODQwNDc5NX0.1hNMHm_L3v7gEAYsNCVoDBwbBamrdBaq6QxA21FJFzQ"));
define('SUPA_GOOGLE', filter_var(getenv('SUPA_GOOGLE') !== false ? getenv('SUPA_GOOGLE') : 'true', FILTER_VALIDATE_BOOLEAN));

/** HTML-escape helper. */
function e(string $s): string
{
    return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

/** URL of a static asset with a cache-busting ?v=<mtime> query. */
function asset(string $path): string
{
    $file = __DIR__ . '/' . $path;
    return $path . (is_file($file) ? '?v=' . filemtime($file) : '');
}

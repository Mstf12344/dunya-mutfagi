<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
header('Content-Type: text/html; charset=utf-8');
$title = "Privacy Policy · World Kitchen";
include __DIR__ . '/partials/legal_top.php';
?>
<a class="top" href="./">← World Kitchen</a>
<h1>Privacy Policy</h1><small>Last updated: 3 November 2026</small>
<div class="k">
<p>This page explains what information World Kitchen (dunya-mutfagi.vercel.app) uses and why.</p>
<h2>What information is stored?</h2>
<ul>
<li><b>Accounts created with a username:</b> your username, a hash of your password (the password itself is never stored), favourites, notes and settings stay only in your own browser (localStorage) and are never sent to a server.</li>
<li><b>Accounts created with e-mail or Google:</b> your e-mail address and display name (for Google sign-in, the name and e-mail Google shares), together with your favourites, notes, ticked ingredients and site settings, are stored with Supabase (server location: Frankfurt, Germany) so you can use your account on any device.</li>
</ul>
<h2>What is it used for?</h2>
<p>Only to sign you in and to show you the recipe data you saved. When you create an account with e-mail or Google, the site may send you a single welcome e-mail. Your information is not used for advertising, is not sold and is not shared with third parties.</p>
<h2>Google sign-in</h2>
<p>When you sign in with Google, the site receives only your name, e-mail address and profile ID from Google. It has no access to anything else in your Google account.</p>
<h2>Third-party content</h2>
<p>Recipe photos are loaded from Wikimedia Commons and fonts from Google Fonts, so your browser connects to those services when you view the site. Video buttons open a search on YouTube in a new tab. These services have their own privacy policies.</p>
<h2>Security</h2>
<p>All connections are encrypted with HTTPS. Database rules allow each user to see and change only their own record.</p>
<h2>Deleting your data</h2>
<p>You can delete your saved data with “Delete profile” in the profile menu. To have your account removed completely, open an issue on the project’s <a href="https://github.com/Mstf12344/Mustafa-Cakmak-254309252/issues">GitHub page</a>.</p>
<h2>Cookies</h2>
<p>The site uses no advertising or tracking cookies. Your session and settings are kept in your browser’s local storage.</p>
</div>
<?php if (ANALYTICS): ?>
<h2>Visit statistics</h2>
<p>We count page views with Vercel Web Analytics. It sets no cookies and does not identify you personally; it records anonymous information such as the page visited, country, device type and browser.</p>
<?php endif; ?>
<p style="margin-top:28px"><small>World Kitchen is a student project by Mustafa Çakmak. Source code: <a href="https://github.com/Mstf12344/Mustafa-Cakmak-254309252">GitHub</a>.</small></p>
<?php include __DIR__ . '/partials/legal_bottom.php';

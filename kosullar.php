<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
header('Content-Type: text/html; charset=utf-8');
$title = "Terms of Use · World Kitchen";
include __DIR__ . '/partials/legal_top.php';
?>
<a class="top" href="./">← World Kitchen</a>
<h1>Terms of Use</h1><small>Last updated: 3 November 2026</small>
<div class="k">
<p>World Kitchen is a free recipe website. By using the site you agree to the terms below.</p>
<h2>Content</h2>
<p>The 32 original recipes on the site belong to the project owner. Recipes taken from the Wikibooks Cookbook belong to their authors and are shared under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> licence; every such recipe links to its source. Photo licences are shown with each recipe.</p>
<h2>Health and allergy information</h2>
<p>Diet, calorie and allergy information is general guidance, and part of it is estimated automatically. It is not medical advice. If you have a serious allergy, always check the labels of the products you use.</p>
<h2>Accounts</h2>
<p>Create your account with your own details and do not share your password with anyone. Accounts that misuse the site may be removed.</p>
<h2>Liability</h2>
<p>The site is a student project and is provided “as is”; uninterrupted operation is not guaranteed.</p>
</div>
<p style="margin-top:28px"><small>World Kitchen is a student project by Mustafa Çakmak. Source code: <a href="https://github.com/Mstf12344/Mustafa-Cakmak-254309252">GitHub</a>.</small></p>
<?php include __DIR__ . '/partials/legal_bottom.php';

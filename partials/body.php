<div class="wh-scrim" id="whScrim" hidden></div>
<div class="wh-modal" id="whModal" role="dialog" aria-modal="true" aria-labelledby="whTitle" hidden>
  <div class="wh-head"><b id="whTitle">🎡 Food wheel</b><button type="button" class="wh-x" id="whClose" aria-label="Close">✕</button></div>
  <div class="wh-steps" id="whSteps"></div>
  <div class="wh-filters" id="whFilters"></div>
  <div class="wh-stage">
    <div class="wh-pointer" aria-hidden="true"></div>
    <svg class="wh-wheel" id="whWheel" viewBox="-170 -170 340 340" aria-hidden="true"></svg>
    <button type="button" class="wh-spin" id="whSpin">SPIN</button>
  </div>
  <p class="wh-msg" id="whMsg" aria-live="polite"></p>
  <div class="wh-resbox"><div class="wh-result" id="whResult" hidden></div></div>
</div>
<div class="skin-pop" id="skinPop" role="dialog" aria-labelledby="skinTitle" hidden><div class="skin-top"><b id="skinTitle">🎨 Theme</b><button type="button" class="skin-x" id="skinClose" aria-label="Close">✕</button></div><div id="skinList"></div></div>
<div class="ai-vset" id="aiVSet" role="dialog" aria-labelledby="vsTitle" hidden>
  <div class="vs-top"><b id="vsTitle">🗣️ Chef's voice</b><button type="button" class="vs-x" id="vsClose" aria-label="Close">✕</button></div>
  <div class="vs-presets" id="vsPresets"></div>
  <label class="vs-row"><span id="vsLangLbl">Language</span><select id="vsLang"></select></label>
  <label class="vs-row"><span id="vsVoiceLbl">Voice</span><select id="vsVoice"></select></label>
  <label class="vs-row"><span id="vsPitchLbl">Pitch</span><input type="range" id="vsPitch" min="0.1" max="2" step="0.1"><output id="vsPitchVal"></output></label>
  <label class="vs-row"><span id="vsRateLbl">Speed</span><input type="range" id="vsRate" min="0.5" max="1.8" step="0.1"><output id="vsRateVal"></output></label>
  <div class="vs-btns"><button type="button" class="vs-try" id="vsTry">▶ Try</button><button type="button" class="vs-reset" id="vsReset">Reset</button></div>
  <p class="vs-note" id="vsNote"></p>
</div>
<header class="bar">
  <div class="wrap">
    <div class="logo"><i><svg class="lg-mark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="16" cy="16" r="9.3" stroke-width="1.4" opacity=".6"/><circle cx="16" cy="16" r="6.4" fill="var(--lg-dot,#E8A86A)" fill-opacity=".22"/><ellipse cx="16" cy="16" rx="2.8" ry="6.4"/><path d="M9.6 16h12.8M10.6 12.8h10.8M10.6 19.2h10.8"/><path d="M2.4 5.5v4.2M4.2 5.5v4.2M6 5.5v4.2M2.4 9.7c0 1.6.8 2.5 1.8 2.5S6 11.3 6 9.7M4.2 12.2V26.5"/><path d="M28.6 26.5V5.5c-1.9 1.1-2.8 3.9-2.8 6.9 0 1.5.9 2.4 2.8 2.6"/></svg></i><span class="lg-t"><b id="logoName">World Kitchen</b><small id="logoTag">Recipe Atlas</small></span></div>
    <label class="search">
      <span class="sr">Search recipes or ingredients</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      <input id="q" type="search" placeholder="Search recipes or ingredients: avocado, chicken…" autocomplete="off" role="combobox" aria-expanded="false" aria-controls="qSug" aria-autocomplete="list">
      <div class="q-sug" id="qSug" role="listbox" hidden></div>
      <span class="kbd">/</span>
    </label>
    <button class="gate-open-btn" id="gateBtn"><span aria-hidden="true">🔑</span><span id="gateBtnLbl">Sign-in screen</span></button>
    <button class="icon-btn user-btn" id="userBtn"></button>
    <button class="icon-btn" id="favToggle" aria-pressed="false" title="My favourites" aria-label="Show favourites only">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 4 4 7.6 4c2 0 3.4 1.1 4.4 2.5C13 5.1 14.4 4 16.4 4 20 4 22.4 7.6 21.2 11.1 19.5 15.9 12 20.5 12 20.5Z"/></svg>
      <span class="badge" id="favCount" hidden>0</span>
    </button>
    <button class="icon-btn" id="pantryBtn" title="What's in my kitchen?" aria-label="What's in my kitchen?"><span style="font-size:18px">🧺</span></button>
    <button class="icon-btn" id="vsBtn" title="Chef's voice" aria-label="Change the chef's voice" aria-pressed="false" aria-controls="aiVSet"><span style="font-size:18px">🗣️</span></button>
    <button class="icon-btn" id="langBtn" title="Language" aria-label="Language"><span id="langLbl" style="font-weight:800;font-size:13px">EN</span></button>
    <button class="icon-btn" id="sizeBtn" title="Text and image size" aria-label="Change page size"><span style="font-weight:800;font-size:15px">Aa</span></button>
    <button class="icon-btn" id="wheelBtn" title="Food wheel" aria-label="Open the food wheel"><span style="font-size:18px" aria-hidden="true">🎡</span></button>
    <button class="icon-btn" id="themeBtn" title="Choose theme" aria-label="Choose theme" aria-haspopup="dialog" aria-controls="skinPop">
      <span style="font-size:18px" aria-hidden="true">🎨</span>
    </button>
  </div>
</header>

<main class="wrap">
  <section class="hero">
    <div class="hero-box">
      <div class="hb-top"><div class="h-eye" id="heroEye" aria-hidden="true"></div><span class="hb-no" aria-hidden="true">Nº 01</span></div>
      <div class="hb-main">
        <h1><span class="h-l1">The world's kitchen,</span><span class="h-l2">on your counter<i class="h-dot">.</i></span></h1>
        <span class="hb-mark" aria-hidden="true"><svg class="hb-ring" viewBox="0 0 200 200"><defs><path id="hbCircle" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0"/></defs><text><textPath href="#hbCircle" id="hbRingTxt" textLength="508">WORLD KITCHEN • RECIPE ATLAS •</textPath></text></svg><span class="hb-core"><svg class="lg-mark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="16" cy="16" r="9.3" stroke-width="1.4" opacity=".6"/><circle cx="16" cy="16" r="6.4" fill="var(--lg-dot,#E8A86A)" fill-opacity=".22"/><ellipse cx="16" cy="16" rx="2.8" ry="6.4"/><path d="M9.6 16h12.8M10.6 12.8h10.8M10.6 19.2h10.8"/><path d="M2.4 5.5v4.2M4.2 5.5v4.2M6 5.5v4.2M2.4 9.7c0 1.6.8 2.5 1.8 2.5S6 11.3 6 9.7M4.2 12.2V26.5"/><path d="M28.6 26.5V5.5c-1.9 1.1-2.8 3.9-2.8 6.9 0 1.5.9 2.4 2.8 2.6"/></svg></span></span>
      </div>
      <div class="hb-dishes" id="heroDishes"></div>
      <div class="hb-foot">
        <div class="hb-left"><p id="heroText">Tick off ingredients, follow cooking mode step by step, set timers and watch a video whenever you get stuck.</p>
        <button type="button" class="wh-cta" id="wheelCta"><span aria-hidden="true">🎡</span><span id="wheelCtaT">Can't decide? Spin the food wheel</span></button></div>
        <div class="flags" aria-hidden="true" id="heroFlags"></div>
      </div>
      <i class="hb-c hb-c1" aria-hidden="true"></i><i class="hb-c hb-c2" aria-hidden="true"></i><i class="hb-c hb-c3" aria-hidden="true"></i><i class="hb-c hb-c4" aria-hidden="true"></i>
    </div>
  </section>

  <section class="legends" id="legends" hidden>
    <h2>Dishes that made history</h2>
    <p>From a pizza named after a queen to a chicken dish that ended up in court: the stories behind the plate.</p>
    <div class="lg-track" id="lgTrack"></div>
  </section>

  <section class="pantry" id="pantry">
    <div class="p-head"><h2 id="pTitle">🧺 What's in my kitchen?</h2><p id="pDesc"></p></div>
    <div class="p-tools">
      <label class="p-search"><span class="sr" id="pSearchLbl">Search ingredients</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input id="pq" type="search" autocomplete="off"></label>
      <span class="p-sel" id="pSel"></span>
      <button class="link-btn" id="pClear"></button>
    </div>
    <div class="p-box" id="pBox"></div>
    <p class="p-note" id="pNote"></p>
    <div class="p-results" id="pResults" aria-live="polite"></div>
  </section>

  <div class="filters">
    <div class="chips" id="chips" role="group" aria-label="Country filter"></div>
    <div class="tools">
      <button class="chip legend" id="legendToggle" aria-pressed="false">📜 Famous stories</button>
      <select id="level" aria-label="Difficulty">
        <option value="">All difficulties</option><option value="Kolay">Easy</option><option value="Orta">Medium</option><option value="Zor">Hard</option>
      </select>
      <select id="sort" aria-label="Sort">
        <option value="default">Recommended</option><option value="fast">Quickest first</option><option value="az">A to Z</option><option value="kcal">Lowest calories first</option>
      </select>
    </div>
  </div>
  <p class="count" id="count" aria-live="polite"></p>
  <div class="grid" id="grid"></div>

  <section class="mdb" id="mdb" aria-labelledby="mdbTitle">
    <div class="mdb-head">
      <div><h2 id="mdbTitle">📖 Wikibooks recipes</h2><p id="mdbDesc"></p></div>
      <a class="mdb-badge" href="https://en.wikibooks.org/wiki/Cookbook" target="_blank" rel="noopener">Wikibooks</a>
    </div>
    <p class="mdb-status" id="mdbStatus" aria-live="polite"></p>
    <div class="mdb-acts">
      <button type="button" class="mdb-btn" id="mdbShow"></button>
    </div>
    <p class="mdb-note" id="mdbNote"></p>
  </section>
</main>

<footer><div class="wrap">Video buttons open a YouTube search for that recipe. Your favourites and ticked ingredients are saved in this browser. In the stories, legend is kept apart from documented fact; legends are marked as "it is said". · <a href="gizlilik.php" style="color:inherit">Privacy Policy</a> · <a href="kosullar.php" style="color:inherit">Terms of Use</a></div></footer>

<div class="scrim" id="scrim"></div>
<aside class="sheet" id="sheet" role="dialog" aria-modal="true" aria-labelledby="dTitle" aria-hidden="true">
  <div class="sheet-head">
    <button class="icon-btn" id="closeSheet" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
    <div class="grow"></div>
    <button class="icon-btn" id="shareBtn" aria-label="Copy shopping list" title="Copy shopping list"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg></button>
    <button class="icon-btn" id="sheetFav" aria-pressed="false" aria-label="Add to favourites"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 4 4 7.6 4c2 0 3.4 1.1 4.4 2.5C13 5.1 14.4 4 16.4 4 20 4 22.4 7.6 21.2 11.1 19.5 15.9 12 20.5 12 20.5Z"/></svg></button>
  </div>
  <div class="sheet-scroll" id="sheetBody"></div>
</aside>

<section class="cook" id="cook" role="dialog" aria-modal="true" aria-label="Cooking mode">
  <div class="cook-top">
    <button class="icon-btn" id="closeCook" aria-label="Exit cooking mode"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
    <div class="t" id="cookTitle"></div>
    <select class="voice-sel" id="voiceSel" aria-label="Choose voice" hidden></select>
    <button class="voice-btn" id="voiceBtn" aria-pressed="false"><span class="vi">🔇</span><span id="voiceLbl">Read aloud off</span></button>
  </div>
  <div class="pitch-row" id="pitchRow" hidden>
    <button class="chip" id="femaleBtn" aria-pressed="false">♀ Higher, softer voice</button>
    <label class="pitch"><span id="pitchLbl">Voice pitch</span>
      <input type="range" id="pitch" min="0.6" max="2" step="0.1" value="1">
      <b id="pitchVal">Normal</b></label>
  </div>
  <div class="dots" id="dots"></div>
  <div class="cook-main" id="cookMain"></div>
  <div class="cook-nav">
    <button class="btn" id="prevStep">Previous step</button>
    <button class="btn primary" id="nextStep">Next step</button>
  </div>
</section>
<button class="ai-fab" id="aiFab" hidden aria-label="Ask the chef"><i class="fab-ring" aria-hidden="true"></i><span aria-hidden="true">👨‍🍳</span><span id="aiFabLbl">Ask the chef</span></button>
<section class="ai-panel" id="aiPanel" role="dialog" aria-modal="false" aria-labelledby="aiTitle" hidden>
  <header class="ai-head">
    <span class="ai-av" aria-hidden="true">👨‍🍳<i class="ai-dot"></i></span>
    <div class="ai-ht"><h2 id="aiTitle">Kitchen Assistant</h2><p id="aiSub">AI-powered chef</p></div>
    <button class="ai-vc ai-read" id="aiRead" type="button" aria-pressed="false"><span aria-hidden="true" id="aiReadIco">🔈</span></button>
    <button class="ai-vc" id="aiVSetBtn" type="button" aria-pressed="false" aria-controls="aiVSet" title="Chef's voice" aria-label="Chef's voice"><span aria-hidden="true">🗣️</span></button>
    <button class="ai-vc" id="aiVoice" type="button" aria-pressed="false"><span aria-hidden="true">🎙️</span><span id="aiVoiceLbl">Voice chat</span></button>
    <button class="icon-btn" id="aiClear" title="Clear chat" aria-label="Clear chat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg></button>
    <button class="icon-btn" id="aiClose" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
  </header>
  <div class="ai-ctx" id="aiCtx" hidden></div>
  <div class="ai-log" id="aiLog" aria-live="polite"></div>
  <div class="ai-listen" id="aiListen" hidden><span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span id="aiListenTxt">Listening…</span><span id="aiInterim"></span></div>
  <div class="ai-sugs" id="aiSugs"></div>
  <form class="ai-form" id="aiForm" autocomplete="off">
    <textarea id="aiInput" rows="1" maxlength="1200" placeholder="Ask anything..."></textarea>
    <button class="ai-mic" id="aiMic" type="button" aria-label="Ask by voice" aria-pressed="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg></button>
    <button class="ai-send" id="aiSend" type="submit" aria-label="Send"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l7 7-1.4 1.4L13 7.8V20h-2V7.8l-4.6 4.6L5 11z"/></svg></button>
    <button class="ai-send stop" id="aiStop" type="button" hidden aria-label="Stop"><svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg></button>
  </form>
  <p class="ai-foot" id="aiFoot"></p>
</section>
<nav class="mnav" id="mnav" aria-label="Bottom menu">
  <button data-go="home" aria-current="page"><span class="mi">🏠</span><span class="ml" id="mnHome">Explore</span></button>
  <button data-go="search"><span class="mi">🔍</span><span class="ml" id="mnSearch">Search</span></button>
  <button data-go="fav"><span class="mi">❤️</span><span class="ml" id="mnFav">Favourites</span><span class="mbadge" id="mnFavN" hidden>0</span></button>
  <button data-go="settings"><span class="mi">⚙️</span><span class="ml" id="mnSet">Settings</span></button>
  <button data-go="profile"><span class="mi mav" id="mnAv">M</span><span class="ml" id="mnProf">Profile</span></button>
</nav>
<div class="pm-scrim" id="msScrim" hidden></div>
<section class="pm msheet" id="msSheet" role="dialog" aria-modal="true" aria-labelledby="msTitle" hidden>
  <button class="icon-btn pm-close" id="msClose" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
  <h2 id="msTitle">Settings</h2>
  <div class="ms-list">
    <button class="ms-row" id="msLang"><span>🌐</span><b id="msLangL">Language</b><em id="msLangV">English</em></button>
    <button class="ms-row" id="msTheme"><span>🎨</span><b id="msThemeL">Theme</b><em id="msThemeV">Red</em></button>
    <button class="ms-row" id="msSize"><span>🔠</span><b id="msSizeL">Text size</b><em id="msSizeV">Normal</em></button>
    <button class="ms-row" id="msGate"><span>🔑</span><b id="msGateL">Sign-in screen</b><em>›</em></button>
  </div>
</section>
<div class="pm-scrim" id="micHelpScrim" hidden style="z-index:170"></div>
<section class="pm" id="micHelp" role="dialog" aria-modal="true" aria-labelledby="micHelpTitle" hidden style="z-index:180">
  <button class="icon-btn pm-close" id="micHelpClose" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
  <h2 class="pm-warn-title" id="micHelpTitle">🎙️</h2>
  <div class="mic-help" id="micHelpBody"></div>
  <button class="btn primary" id="micHelpOk" style="width:100%;justify-content:center"></button>
</section>
<div class="toast" id="toast" role="status"></div>
<input type="file" id="photoInput" accept="image/*" hidden>
<div class="pm-scrim" id="pmScrim" hidden></div>
<section class="pm pm-pro" id="pm" role="dialog" aria-modal="true" aria-labelledby="pmName" hidden>
  <button class="icon-btn pm-close" id="pmClose" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
  <div id="pmMain">
    <div class="pp-hero">
      <button class="pp-av" id="pmAv" type="button"></button>
      <div class="pp-id"><h2 id="pmName"></h2><p id="pmSince"></p><span class="pp-level pp-member" id="pmLevel"></span><span class="pp-loves pp-member" id="pmLoves" hidden></span></div>
    </div>
    <p class="pp-bio pp-member" id="pmBio" hidden></p>
    <div class="pp-avpick" id="pmAvPick" hidden></div>
    <div class="pp-guest" id="pmGuestBox" hidden><p id="pmGuestTxt"></p><button class="btn primary" id="pmGuestBtn" type="button"></button></div>
    <div class="pp-xp pp-member"><div class="pp-xpbar"><i id="pmXpFill"></i></div><small id="pmXpTxt"></small></div>
    <div class="pp-tabs pp-member" role="tablist">
      <button type="button" role="tab" data-ptab="gen" aria-selected="true"></button>
      <button type="button" role="tab" data-ptab="col" aria-selected="false"></button>
      <button type="button" role="tab" data-ptab="badge" aria-selected="false"></button>
      <button type="button" role="tab" data-ptab="set" aria-selected="false"></button>
    </div>
    <div class="pp-pane" data-pane="gen">
      <div class="pm-stats pp-stats" id="pmStats"></div>
      <h3 class="pp-h" id="pmActH"></h3><div class="pp-act" id="pmAct"></div>
      <h3 class="pp-h" id="pmFlagsH"></h3><div class="pp-flags" id="pmFlags"></div>
      <h3 class="pp-h" id="pmRecH"></h3><div class="pp-row" id="pmRec"></div>
    </div>
    <div class="pp-pane" data-pane="col" hidden>
      <h3 class="pp-h" id="pmFavH"></h3><div class="pp-row" id="pmFavs"></div>
      <h3 class="pp-h" id="pmDoneH"></h3><div class="pp-list" id="pmDone"></div>
      <h3 class="pp-h" id="pmNotesH"></h3><div class="pp-list" id="pmNotes"></div>
      <h3 class="pp-h" id="pmRecentH"></h3><div class="pp-row" id="pmRecent"></div>
    </div>
    <div class="pp-pane" data-pane="badge" hidden>
      <h3 class="pp-h" id="pmBadgesH"></h3><div class="pp-badges" id="pmBadges"></div>
    </div>
    <div class="pp-pane" data-pane="set" hidden>
      <h3 class="pp-h" id="pmEditH"></h3><div class="pp-edit" id="pmEdit"></div>
      <h3 class="pp-h" id="pmPrefH"></h3><div class="pp-prefs" id="pmPrefs"></div>
      <h3 class="pp-h" id="pmBackupH"></h3><div class="pp-backup" id="pmBackup"></div>
      <h3 class="pp-h" id="pmDataH"></h3><div class="pp-data" id="pmData"></div>
    </div>
    <div class="pm-actions pp-actions">
      <button class="btn" id="pmSwitch"></button>
      <button class="btn pp-member" id="pmLogout"></button>
      <button class="btn pm-danger pp-member" id="pmDelete"></button>
    </div>
  </div>
  <div id="pmPinView" hidden>
    <h2 class="pm-warn-title" id="pinTitle"></h2>
    <label class="pm-field" id="pinCurWrap"><span id="pinCurLbl"></span><input id="pinCur" type="password" inputmode="numeric" maxlength="4" autocomplete="off"></label>
    <label class="pm-field"><span id="pinNewLbl"></span><input id="pinNew" type="password" inputmode="numeric" maxlength="4" autocomplete="off"></label>
    <p class="pm-err" id="pinErr" role="alert"></p>
    <div class="pm-actions"><button class="btn" id="pinCancel"></button><button class="btn primary" id="pinSave"></button></div>
  </div>
  <div id="pmConfirm" hidden>
    <h2 class="pm-warn-title" id="pmWarnTitle"></h2>
    <p class="pm-warn" id="pmWarn"></p>
    <label class="pm-field" id="pmPinWrap"><span id="pmPinLbl"></span><input id="pmPin" type="password" inputmode="numeric" maxlength="4" autocomplete="off"></label>
    <p class="pm-err" id="pmErr" role="alert"></p>
    <div class="pm-actions">
      <button class="btn" id="pmCancel"></button>
      <button class="btn pm-danger solid" id="pmYes"></button>
    </div>
  </div>
</section>

<div class="au" id="auth" role="dialog" aria-modal="true" aria-labelledby="auTitle" hidden>
  <div class="au-bg" aria-hidden="true"><div class="au-bgcols" id="auBgCols"></div></div><div class="au-veil" aria-hidden="true"></div>
  <div class="au-shell">
    <header class="au-top">
      <div class="au-brand"><span class="au-logo"><svg class="lg-mark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="16" cy="16" r="9.3" stroke-width="1.4" opacity=".6"/><circle cx="16" cy="16" r="6.4" fill="var(--lg-dot,#E8A86A)" fill-opacity=".22"/><ellipse cx="16" cy="16" rx="2.8" ry="6.4"/><path d="M9.6 16h12.8M10.6 12.8h10.8M10.6 19.2h10.8"/><path d="M2.4 5.5v4.2M4.2 5.5v4.2M6 5.5v4.2M2.4 9.7c0 1.6.8 2.5 1.8 2.5S6 11.3 6 9.7M4.2 12.2V26.5"/><path d="M28.6 26.5V5.5c-1.9 1.1-2.8 3.9-2.8 6.9 0 1.5.9 2.4 2.8 2.6"/></svg></span><b>World Kitchen</b></div>
      <div class="au-top-r">
        <button type="button" class="au-link" id="auBack" hidden>← <span id="auBackLbl">Back to site</span></button>
        <button type="button" class="au-chip" id="auLang">EN</button>
      </div>
    </header>
    <section class="au-show" aria-hidden="true">
      <h2 id="auPitchH"></h2>
      <div class="au-belt"><div class="au-slides" id="auSlides"></div></div>
      <div class="au-dots" id="auDots" hidden></div>
    </section>
    <main class="au-main">
      <div class="au-card">
        <div class="au-tab"><span>🍽️</span><span id="auCardNo">KITCHEN CARD</span></div>
        <div class="au-body">
          <h1 id="auTitle"></h1>
          <p class="au-sub" id="auSub"></p>
          <div class="au-seg" role="tablist" id="auSeg">
            <button type="button" role="tab" data-v="login" id="auTabLogin"></button>
            <button type="button" role="tab" data-v="register" id="auTabReg"></button>
            <i class="au-seg-pill" aria-hidden="true"></i>
          </div>
          <p class="au-msg" id="auMsg" role="alert"></p>

          <form class="au-form" id="auLogin" data-view="login" autocomplete="on" novalidate>
            <div class="au-users" id="auUsers"></div>
            <label class="au-f"><span id="lUserL"></span><input id="lUser" autocomplete="username" maxlength="24" spellcheck="false"></label>
            <label class="au-f au-pw"><span id="lPassL"></span><input id="lPass" type="password" autocomplete="current-password" maxlength="64"><button type="button" class="au-eye" data-eye="lPass" aria-label="Show password">👁</button><small class="au-caps" hidden>⇪ Caps Lock</small></label>
            <div class="au-row"><label class="au-check"><input type="checkbox" id="lRemember" checked><span id="lRememberL"></span></label><button type="button" class="au-link" id="auForgotBtn" hidden></button></div>
            <p class="au-fmsg" role="alert"></p>
            <button class="au-btn" id="lSubmit" type="submit"></button>
          </form>

          <form class="au-form" id="auReg" data-view="register" autocomplete="on" novalidate hidden>
            <label class="au-f"><span id="rUserL"></span><input id="rUser" autocomplete="username" maxlength="24" spellcheck="false"><small class="au-hint" id="rUserH"></small></label>
            <div class="au-2col">
              <label class="au-f au-pw"><span id="rPassL"></span><input id="rPass" type="password" autocomplete="new-password" maxlength="64"><button type="button" class="au-eye" data-eye="rPass" aria-label="Show password">👁</button><small class="au-caps" hidden>⇪ Caps Lock</small></label>
              <label class="au-f au-pw"><span id="rPass2L"></span><input id="rPass2" type="password" autocomplete="new-password" maxlength="64"><button type="button" class="au-eye" data-eye="rPass2" aria-label="Show password">👁</button></label>
            </div>
            <div class="au-f"><span id="rAvL"></span><div class="au-avs" id="rAvs"></div></div>
            <p class="au-fmsg" role="alert"></p>
            <button class="au-btn" id="rSubmit" type="submit"></button>
          </form>

          <form class="au-form" id="auForgot" data-view="forgot" autocomplete="off" novalidate hidden>
            <label class="au-f"><span id="fUserL"></span><input id="fUser" maxlength="24" spellcheck="false"></label>
            <p class="au-q" id="fQ" hidden></p>
            <label class="au-f" id="fAW" hidden><span id="fAL"></span><input id="fA" maxlength="40"></label>
            <label class="au-f au-pw" id="fPW" hidden><span id="fPassL"></span><input id="fPass" type="password" autocomplete="new-password" maxlength="64"><button type="button" class="au-eye" data-eye="fPass" aria-label="Show password">👁</button></label>
            <p class="au-fmsg" role="alert"></p>
            <button class="au-btn" id="fSubmit" type="submit"></button>
            <button type="button" class="au-link au-center" id="fBack"></button>
          </form>

          <form class="au-form" id="auEmail" data-view="email" autocomplete="on" novalidate hidden>
            <label class="au-f" id="eNameW" hidden><span id="eNameL"></span><input id="eName" autocomplete="nickname" maxlength="20" spellcheck="false"><small class="au-hint" id="eNameH"></small></label>
            <label class="au-f" id="eMailW"><span id="eMailL"></span><input id="eMail" type="email" autocomplete="email" maxlength="120" spellcheck="false"></label>
            <label class="au-f au-pw" id="ePassW"><span id="ePassL"></span><input id="ePass" type="password" autocomplete="current-password" maxlength="72"><button type="button" class="au-eye" data-eye="ePass" aria-label="Show password">👁</button></label>
            <p class="au-fmsg" role="alert"></p>
            <button class="au-btn" id="eSubmit" type="submit"></button>
            <div class="au-row"><button type="button" class="au-link" id="eMode"></button><button type="button" class="au-link" id="eForgot"></button></div>
            <button type="button" class="au-link au-center" id="eBack"></button>
          </form>

          <div class="au-or"><span id="auOr"></span></div>
          <button type="button" class="au-google" id="auMailBtn"><span aria-hidden="true">📧</span><span id="auMailL">Continue with e-mail</span></button>
          <button type="button" class="au-google" id="auGoogle" hidden><svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg><span id="auGoogleL">Continue with Google</span></button>
          <button type="button" class="au-ghost" id="auGuest"></button>
        </div>
      </div>
      <ul class="au-perks" id="auPitchL"></ul>
      <p class="au-foot" id="auFoot"></p>
    </main>
  </div>
</div>

<div class="gate" id="gate" aria-hidden="true">
  <div class="gate-bg" aria-hidden="true"><div class="gate-cols" id="gateCols"></div></div>
  <div class="gate-shade" aria-hidden="true"></div>
  <div class="gate-top">
    <button class="gate-back" id="gateBack" hidden>← <span id="gateBackLbl">Back to site</span></button>
    <button class="gate-lang" id="gateLang">EN</button>
  </div>
  <main class="gate-card" role="dialog" aria-modal="true" aria-labelledby="gTitle">
    <div class="g-logo"><svg class="lg-mark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="16" cy="16" r="9.3" stroke-width="1.4" opacity=".6"/><circle cx="16" cy="16" r="6.4" fill="var(--lg-dot,#E8A86A)" fill-opacity=".22"/><ellipse cx="16" cy="16" rx="2.8" ry="6.4"/><path d="M9.6 16h12.8M10.6 12.8h10.8M10.6 19.2h10.8"/><path d="M2.4 5.5v4.2M4.2 5.5v4.2M6 5.5v4.2M2.4 9.7c0 1.6.8 2.5 1.8 2.5S6 11.3 6 9.7M4.2 12.2V26.5"/><path d="M28.6 26.5V5.5c-1.9 1.1-2.8 3.9-2.8 6.9 0 1.5.9 2.4 2.8 2.6"/></svg></div>
    <p class="g-kicker" id="gKicker">World Kitchen</p>
    <h1 id="gTitle">Welcome to the kitchen</h1>
    <p class="g-sub" id="gSub"></p>
    <div class="g-tabs" role="tablist">
      <button role="tab" id="gTabIn" aria-selected="true"></button>
      <button role="tab" id="gTabNew" aria-selected="false"></button>
    </div>
    <form id="gForm" autocomplete="off" novalidate>
      <div class="g-profiles" id="gProfiles"></div>
      <label class="g-field"><span id="gNameLbl"></span><input id="gName" maxlength="24" autocomplete="off"></label>
      <label class="g-field"><span id="gPinLbl"></span><input id="gPin" inputmode="numeric" pattern="[0-9]*" maxlength="4" type="password" autocomplete="off"></label>
      <label class="g-check"><input type="checkbox" id="gRemember" checked><span id="gRememberLbl"></span></label>
      <p class="g-err" id="gErr" role="alert"></p>
      <button class="g-btn" id="gSubmit" type="submit"></button>
    </form>
    <button class="g-guest" id="gGuest"></button>
    <p class="g-note" id="gNote"></p>
  </main>
</div>


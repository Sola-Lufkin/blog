---
layout: post
title: Beginning iOS development .2nd
originalurl:
author: Sola
category: program
yearmonth: 201305
---

<div id="chinese" class="blog-main-content" style="display:block;">
<p>上一篇blog在Xcode的幫助下，我們運行起了我們的第一個iOS Apps，雖然該Apps沒有任何實際作用，但是總算是邁出了iOS編程的第一步。</p>

<p>之前也講到過，Xcode是iOS Apps開發過程中至關重要的一個工具，所以我想在第二篇blog中重點記錄一下Xcode的工作界面（Workplace window）各部分的大致作用。由於是剛開始接觸Xcode，可能還不能很全面得將它們都記錄下來，但隨著學習得深入，也會在以後得日子裡逐漸對該部分內容進行補全。</p>

<p>以下便是現在能夠記錄下來得部分，可能有部分我還欠缺深入理解，或多或少會出現些許錯誤，希望大家能幫助糾正。</p>

<h5>工作條（Toolbar）</h5>

<p>工作界面的頂部是工具條（Toolbar），上面左邊的部分從左至右依次是編譯運行按鈕（Run），停止鍵（Stop）以及一個a pop-up menu to select the scheme you want to run，
和一個斷點開關按鈕。
工具條中間的部分，是狀態框（activity view），它用來顯示當前發生的所有動作與進程，例如程序運行時出現的一些報錯和警告。你可以直接點擊這些報錯和警告，便會直接跳轉到issues導航。</p>

<img class="post-img" src="{{ site.baseurl }}/assets/img/blog/2-1.png" style="width:700px;">

<p>工具條的右邊有三組按鈕，其中最左邊的一組名為Editor,它有三種狀態可以切換：</p>

<blockquote>
<ul>
<li><strong>standard view</strong>：為用戶提供一個獨立的版面來編輯你的代碼文件。</li>
<li><strong>assistant view</strong>：將會把代碼編輯區域分成左右兩個部分，右邊的部分通常都會顯示出和左邊文件相關的文件。</li>
<li><strong>version view</strong>：這是一個版本追溯界面，就像Mac上的TimeMachine一樣。</li>
</ul>
</blockquote>

<p>中間的一組按鈕名為View，用於顯示和隱藏工作界面窗體左，右，下的幾個功能面板。</p>

<p>最右邊的按鈕是Organizer，點擊就會彈出一個窗口，包括了Apple API文檔，以及開發者的項目列表等等信息。</p>

<h5>導航欄（Navigator View）</h5>

<p>工作界面左邊是導航欄，它由七個選項卡組成：</p>

<blockquote>
<ul>
<li><strong>project navigator</strong>：  項目文件列表。</li>
<li><strong>symbol navigator</strong>：  Symbols are basically the items that the compiler recognizes, such as Objective-C classes, enumerations, structs, and global variables。</li>
<li><strong>search navigator</strong>：  搜索項目中的文件。</li>
<li><strong>issues navigator</strong>：  項目的報錯和警告都將展示在這裡。</li>
<li><strong>debug navigator</strong>：  debug列表。</li>
<li><strong>breakpoint navigator</strong>：  展示了所有你設置的斷點。</li>
<li><strong>log navigator</strong>：  保存了項目最近的編譯運行日誌。</li>
</ul>
</blockquote>

<h5>引導條（Jump Bar）</h5>

<img class="post-img" src="{{ site.baseurl }}/assets/img/blog/2-2.png" style="width:700px;">

<p>Jump Bar是個相當強大的工具，它能讓開發者很方便的在項目文件，甚至文件中的類和函數之間跳轉。</p>
</div>


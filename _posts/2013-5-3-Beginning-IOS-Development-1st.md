---
layout: post
title: Beginning iOS development .1st
originalurl:
author: Sola
category: program
yearmonth: 201305
---

<div id="chinese" class="blog-main-content" style="display:block;">
<p>一直都想好好的學習一下iOS的編程，想在iOS平台上發布一些好玩的應用。但是自從畢業之後便如火如荼的進入到了iDentalk的創業過程中，絲毫沒有多出來的時間對自己進行學習充電。最近終於能在閒暇之餘，重新面對ios這個有意思的平台。所以準備在這裡，將自己的學習過程記錄下來，當作學習歷程的回顧，也當作做對自己學習進度的勉勵和監督。</p>

<p>通過在網路上的查詢，大家都一致推薦了「Beginning ios 6 development」這個系列的教程，於是下載了英文原版的PDF，PDF的效果很好，在這裡推薦感興趣的同學也可以通過翻閱這本教程自學。</p>

<p>今天看過了書的第二章，對xCode有了初步的了解，並且通過元素拖拽實現了在屏幕上現實“Hello World”的小程序。既然是學習ios的第一步，自然是相對簡單的，在下面我將大概記錄一下整個程序創建的過程，以及在看書過程中的發現與疑問。</p>

<p>如何下載和安裝Xcode我就不詳細記述了，只要有一台mac，通過App Store一切就能搞定。</p>

<h5>1. 首先打開Xcode，並開始創建項目</h5>

<p>   以下就是打開Xcode後出現的歡迎界面（welcome window）
 ，在這裡可以直接創建一個新的項目（通過Create a new Xcode project），也可以得到一些關於Mac OS X，iOS的技術文檔和視頻等信息（通過Learn about using Xcode和Go to Apple's developer portal）。</p>

<p>   如果你在下次打開Xcode時再也不想看到該窗口，只要反選掉Show this window when Xcode launches就可以了。</p>

<img class="post-img" src="{{ site.baseurl }}/assets/img/blog/1-1.png" style="width:700px;">

<p>   選擇“Create a new Xcode project”（或者快捷鍵 <code>Shift＋Command＋N</code>)。</p>

<h5>2. 選擇項目模板</h5>

<p>   接下來將會彈出一個項目模板一覽頁（project template selection sheet）。這裡涵蓋了針對iOS和Mac OS X兩者所擁有的各種項目模板供開發者選擇。</p>

<p>   Single View Application是最簡單的一種模板。也是這裡我們的第一個 iOS程序將會使用的。</p>

<img class="post-img" src="{{ site.baseurl }}/assets/img/blog/1-2.png" style="width:700px;">

<p>   選擇它後，點擊Next</p>

<h5>3. 填寫項目相關信息</h5>

<p>   我們進入項目信息頁（project options sheet），初始化我們的項目信息。
在這個我們填寫Product Name為Hello World。Xcode will combine the two of those
to generate a unique Bundle Identifier for your app.
You’ll also see a field that lets you enter an Organization Name, which Xcode will use to automatically insert a copyright notice into every source code file you create.</p>

<img class="post-img" src="{{ site.baseurl }}/assets/img/blog/1-3.png" style="width:700px;">

<p>   注意這裡有一個名叫類前綴（Class Prefix）的域需要我們填寫，它的值必須由長度大於3的大寫字母字符串組成，這些字母將會加在Xcode為我們初始化出來的每一個類（class）的名稱開頭，這樣作可以避免程序中的命名衝突。
這裡我們使用BID作為值，它是Beginning iOS development的首字母縮寫。</p>

<p>   設備（Devices）一項我們選擇iPhone。
最下面的三個選框，我們只選中中間那項Use Automatic Reference Counting</p>

<p>   然後點擊Next</p>

<p>   （選擇項中的第三項Include Unit Tests，看書中講到貌似能夠為你的項目引入一些測試用的公共代碼，這些代碼並不存在於你自己創建的應用中，但每當你創建運行你的應用時它們都會被調用，幫你自動測試你的應用。這將是個非常有用的工具，不過這個例子中我們暫時用不上
Include Unit Tests—will set up your project in such a way that you can add special pieces of code to your project, called unit tests, which are not part of your application but run every time you create your application to test certain functionality.）</p>

<h5>4. 保存並完成創建</h5>

<img class="post-img" src="{{ site.baseurl }}/assets/img/blog/1-4.png" style="width:700px;">

<p>   找到想要保存的路徑，然後點擊Create完成創建。</p>

<p>   （這裡可以看到，Xcode是對git有提供支持的，這個讓我很興奮。如果你也使用git來管理你的代碼版本，你就可以也把它圈選上）</p>

<p>   這樣，通過短短的幾步，我們的項目就創建好了，這很大程度得感謝Xcode為我們隱性作出的貢獻。</p>

<p>   我們直接進入到Xcode的工作界面（Xcode Workplace window）</p>

<img class="post-img" src="{{ site.baseurl }}/assets/img/blog/1-5.png" style="width:700px;">

<p>   這裡就是整個iOS應用開發時所用到的主界面了，在整個iOS Apps的開發過程中，幾乎大多半的時間都將面對它，所以對這個工作界面加強了解和熟悉是顯而易見相當重要的事情了。在下一篇文章中我將對其做一個粗略的介紹，用為對Xcode更好的理解和記錄。</p>

<p>   接下來繼續“Hello World”</p>

<h5>5. 添加Label標籤</h5>

<p>   我們在左面的項目導航欄（Project navigator）中找到後綴名為.xib的文件，如果前面的Class Prefix你和我一樣填入的是BID，那麼這裡你需要選擇的便是BIDViewController.xib文件，xib是Xcode’s Interface Builder的縮寫，专门用来管理和用户交互的界面。選中該文件後，工作界面中心便出現了一個iphone的界面，它接收我們直接往上面拖拽控件。</p>

<p>   我們在右下角的控件庫（Object Library）中找到我們所需要的Label控件，（在找尋控件時，可以利用下方的搜索欄輸入目標控件的名稱，完成快速查找）。找到Label後，直接拖入iPhone界面內（如果雙擊控件庫中的控件項，會彈出關於該控件的簡述）。</p>

<p>   在輔助線的幫助下找到合適的位置定位，並通過雙擊該Label，完成文字修改，文字改為“Hello World”。</p>

<p>   在選中Label標籤時，我們會看到右邊欄會出現該Label的屬性選項，在這裡我們可以完成對該Label屬性的修改，比如字體，顏色等等。</p>

<img class="post-img" src="{{ site.baseurl }}/assets/img/blog/1-6.png" style="width:700px;">

<h5>6. 編譯運行</h5>

<p>   好了，這樣一切就都辦妥了，接下來我們只需要點擊左上角的運行鍵，或使用快捷鍵<code>Command+R</code>。
等待片刻，一個運行了我們應用的iphone模擬器便出現了。</p>

<img class="post-img" src="{{ site.baseurl }}/assets/img/blog/1-7.png" style="width:150px;">

<p>   這就是我們的第一個iOS應用，雖然沒有任何實際作用，但至少我們終於跨出了學習的第一步。</p>

<h5>7. 添加自定義icon</h5>

<p>   如果我們點擊Home鍵來到iphone的桌面，我們會發現我們的Hello Word還是一個圖標灰灰暗暗，毫無特色的應用。
接下來我們便要為我們的Hello Word自定義一個漂亮的icon。</p>

<p>   回到工作界面，在項目導航欄（Project navigator）找到程序根節點，就是最上面藍色的那個節點</p>

<img class="post-img" src="{{ site.baseurl }}/assets/img/blog/1-8.png" style="width:300px;">

<p>   然後在主工作區找到App Icons，就會看到兩個圖標，一個是普通分辨率（給非Retina屏幕的iphone使用），另一個是高分辨率（給Retina屏幕使用）</p>

<img class="post-img" src="{{ site.baseurl }}/assets/img/blog/1-9.png" style="width:400px;">

<p>   我們右鍵點擊右邊的Retina Display，選擇一個114*114的PNG圖。</p>

<img class="post-img" src="{{ site.baseurl }}/assets/img/blog/1-10.png" style="width:400px;">

<p>   確定後重新編譯程序，便可以看到我們的Hello World終於告別了灰白icon，有了我們自己的特色icon。</p>
</div>


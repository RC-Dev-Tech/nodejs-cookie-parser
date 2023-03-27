# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) NodeJs - Express + Cookie-Parser
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

<br>

<!--ts-->
## 目錄
* [簡介](#簡介)
* [使用套件](#使用套件)
* [操作說明](#操作說明)
* [屬性說明](#屬性說明)
* [切換範例](#切換範例)
* [延伸項目](#延伸項目)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---
<br>

## 簡介
什麼是Cookie? <br>
用白話一點的說法就是網頁瀏覽器(Browser)的一個暫存空間， <br>
舉個最簡單又常用的例子就是當你使用Google Chrome去登入FaceBook的帳密時，<br>
會有提示問你是否需要儲存帳密？ <br>
如果有儲存的話，那下次就可以直接登入FaceBook[^2]，<br>
這就是利用到Cookie的實作[^3].

每個網域名稱下的cookie上限是50個.
而每個cookie的大小限制為4k, 只能存放字串型態的資料.

實作範例:
- Example1 - 基本cookie的使用方式.
- Example2 - 使用cookieParse來簡化取得cookie的資料.
- Example3 - 如何使用cookie的簽名進行讀寫.
- Example4 - 簡易版登入實作.

---
<br>

## 使用套件.
- express
- cookie-parser

---
<br>

## 操作說明.
#### 1. 安裝套件 [^1]
> npm install --save
#### 2. 編譯 & 運行
> npm run start

---
<br>

## 屬性說明
**res.cookie()參數:**
- name：key name (string).
- value：value content (string or object).
- option：選項參數.
  - domain：指定網域 (string).
  - expires：cookie的過期時間 (date(GMT)).
  - httpOnly：如果 true， cookie 就只能在 Server 端修改，dom 無法操作 (boolean).
  - maxAge：指定cookie保留的時間，單位毫秒 (number).
  - path：指定網域下的路徑 (string).
  - secure：如果 true，就只能用 HTTPS 傳送 (boolean).
  - signed：是否使用簽名，需配合cookie-parser使用.

---
<br>

## 切換範例
> 編輯在app.json中的"exsample_mode"，填入的數字代表第幾個範例.

---
<br>

## 延伸項目
* [NodeJs 系列實作](https://github.com/RC-Dev-Tech/nodejs-index) <br>

---
<br>

## 參考資料
* [HTTP Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies) <br>
* [github - cookie-parser](https://github.com/expressjs/cookie-parser) <br>
* [express cookie-parser 小书](https://segmentfault.com/a/1190000017161778?utm_source=sf-similar-article) <br>
* [Express使用进阶：cookie-parser中间件实现深入剖析](https://www.cnblogs.com/chyingp/p/express-cookie-parser-deep-in.html) <br>
* [Node鉴权系列1： Express.js中签名cookie的使用指南(signed cookie)](https://juejin.cn/post/7010735601683005447) <br>
* [express中cookie的使用和cookie-parser的解读](https://segmentfault.com/a/1190000004139342) <br>
* [Node.js+Express 开发之Cookie、Session 使用详解](https://blog.csdn.net/qq_36157085/article/details/104731057) <br>

---
<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->
---
## 備註：

[^1]: 在這個範例中我們需要安裝部分套件，指令如下：<br>
`npm install express --save` <br>
`npm install cookie-parser --save` <br>
因為這個套件已經有被安裝並整合在package.json中，所以這邊直接下**npm install --save**的指令就好

[^2]: 在這邊所指的是同樣的主機電腦上的Google Chrome.

[^3]: 在使用公共電腦時，要記得把網頁的暫存資料都清除，這樣的安全操作可以保障個人資料不被外洩.
import * as express from "express";
import * as cookieParse from "cookie-parser";
import { Config } from "../config"
import { IExample } from "../core/base";

// 簡易版登入實作.
export class Example4 extends IExample {
    run(): void {
        const httpconf = Config.getInstance().get()["portal"];
        const port : number = httpconf ["port"];

        var app = express()

        // 設置用戶指定好的簽名(秘鑰)(string).
        // 注意，接下來所用的使用簽名的cookie讀寫，將會認這個字串.
        app.use(cookieParse('secret-key'));

        // 首頁，檢查用戶是否有登入.
        // url: http://localhost:3002
        app.get("/", function (req, res) {
            console.log(req.signedCookies);
            if (req.signedCookies.USER_ID) {
            res.send({
                success: true,
                info: `用户【${req.signedCookies.USER_ID}已登入`,
                cookie: req.signedCookies.USER_ID,
            });
            } else {
            res.send({
                success: false,
                info: "用戶未登入",
            });
            }
        });

        // 當入頁面，實作登入操作(這邊用帶入參數的方式).
        // url: http://localhost:3002/login/ricky?pwd=1234
        app.get("/login/:id", function (req, res) {
            console.log(req.params);
            console.log(req.query);

            let user_id = req.params.id;
            let password = req.query.pwd;

            // 因為是簡易版，實際上這邊應該要用User資料庫會比較好.
            if (user_id === "ricky" && password === "1234") {
            res.cookie("USER_ID", user_id, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 2, // 該cookie只保留兩個小時.
                signed:true
            });
            // 登入成功，重導回首頁.
            res.redirect('/');
            } else {
            res.send({
                success: false,
                info: "登入失敗",
            });
            }
        });

        // 用户登出
        // url: http://localhost:3002/logout
        app.get("/logout", function (req, res) {
            console.log(req.signedCookies);
            res.clearCookie("USER_ID");
            res.send({
            success: true,
            info: "登出成功"
            });
        });

        app.listen(port, function () {
        console.log(`Example app listening on port ${port}!`)
        })
    }
}
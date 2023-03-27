import * as express from "express";
import * as cookieParse from "cookie-parser";
import { Config } from "../config"
import { IExample } from "../core/base";

// 該範例實作會使用cookie的簽名進行讀寫.
export class Example3 extends IExample {
    run(): void {
        const httpconf = Config.getInstance().get()["portal"];
        const port : number = httpconf ["port"];

        var app = express()

        // 設置用戶指定好的簽名(秘鑰)(string).
        // 注意，接下來所用的使用簽名的cookie讀寫，將會認這個字串.
        app.use(cookieParse('secret-key'));


        app.get('/login', function (req, res) {
            // 取得沒有簽名的cookie.
            console.log(req.cookies);
            // 寫入沒有簽名的cookie.
            res.cookie('key', 'value');

            // 取得有使用簽名的cookie.
            console.log(req.signedCookies);
            // 寫入有使用簽名的cookie.
            res.cookie('s-key', 's-value', {maxAge: 100000,signed:true});

            res.send('Hello Cookie!')
        })

        app.listen(port, function () {
        console.log(`Example app listening on port ${port}!`)
        })
    }
}
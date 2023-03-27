import * as express from "express";
import * as cookieParse from "cookie-parser";
import { Config } from "../config"
import { IExample } from "../core/base";

export class Example2 extends IExample {
    run(): void {
        const httpconf = Config.getInstance().get()["portal"];
        const port : number = httpconf ["port"];

        var app = express()
        app.use(cookieParse());

        /*
        通過第一個範例我們可以知道，當我們要操作cookie的話，顯然只能在request和response上操作.
        [讀取] request - cookies {object}
        [寫入] response - res.cookie(name, value, [option])
        所以我們要藉由cookie-parse這個套件來解析cookies中的內容.
        */
        app.get('/login', function (req, res) {
           // 藉由cookie-parser套件，讓讀取的部分從原本的req.headers.cookie改成req.cookies (JSON格式).
           console.log(req.cookies);

           // 寫入cookie.
           res.cookie('key', 'value');

           res.send('Hello Cookie!')
        })

        app.listen(port, function () {
        console.log(`Example app listening on port ${port}!`)
        })
    }
}
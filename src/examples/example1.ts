import * as express from "express";
import { Config } from "../config"
import { IExample } from "../core/base";

export class Example1 extends IExample {
    run(): void {
        const httpconf = Config.getInstance().get()["portal"];
        const port : number = httpconf ["port"];

        var app = express()

        /*
        當Server收到http的請求後，Server可以在回覆的標頭裡面添加一個或多個“Set-Cookie”.
        而當瀏覽器收到回覆後會保存起來(cookie)，並且放在Http的Cookie標頭內，如下:
        列印出來後，你大概會得到一個類似以下的資訊：
        "timeZone=UTC; fblo_135829507120512=y; connect.sid=s%3A9Fbk4aj1WYuLD5A77rr7jE5YvM982upj.1kVr6GVNvpEQCHeBq7FD7VniJ7Up%2FFaBpBpdxqP50ms"
        */
        app.get('/login', function (req, res) {
           console.log(req.headers.cookie);

           // 寫入cookie.
           // 當寫入cookie後，第二次在進入該頁面時，就會看到key/value已經被寫進去req.headers.cookie裏面了.
           res.cookie('key', 'value');

           // 清除cookie.
           // 配合某些條件，可以直接用以下的方式將cookie清除掉.
           res.clearCookie('key');

           res.send('Hello World!')
        })

        app.listen(port, function () {
        console.log(`Example app listening on port ${port}!`)
        })
    }
}
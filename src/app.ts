import { Config } from "./config"
import { IExample } from "./core/base";
import { NetWork } from "./core/network"
import { Example1 } from "./examples/example1";
import { Example2 } from "./examples/example2";
import { Example3 } from "./examples/example3";
import { Example4 } from "./examples/example4";

export class App {
    protected getExample(): IExample {
      let mode: number = Config.getInstance().getParam ("exsample_mode")
      switch(mode) {
        case 1: return new Example1();
        case 2: return new Example2();
        case 3: return new Example3();
        case 4: return new Example4();
      }
    }

    run () {
      NetWork.getInstance().run(this.getExample());
    }
}
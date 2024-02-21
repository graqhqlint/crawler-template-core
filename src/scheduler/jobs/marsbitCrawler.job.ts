import { Job } from "agenda";
import { Builder, Browser, By } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

import { Agenda } from "../agenda";
import { LogHelper } from "../../helpers/log.helper";

export class MarsbitCrawlerJob {
  static jobName = "MarsbitCrawlerJob";
  static create(data: any) {
    return Agenda.create(this.jobName, data);
  }
  static async execute(job: Job) {
    LogHelper.runingJobLog(MarsbitCrawlerJob.jobName);

    let proxyAddress =
      "http://lum-customer-c_6c6a16cf-zone-addbot:feo8yj8gv4a6@zproxy.lum-superproxy.io:22225";
    // Setting the proxy-server option is needed to info chrome to use proxy
    let option = new chrome.Options().addArguments(`--proxy-server=${proxyAddress}`);
    if (!global.driver) {
      global.driver = await new Builder()
        .forBrowser(Browser.CHROME)
        //   .setChromeOptions(option)
        .build();
    }

    try {
      let driver = global.driver;
      await driver.get(
        "https://news-marsbit-co.translate.goog/flash/?_x_tr_sl=auto&_x_tr_tl=vi&_x_tr_hl=vi&_x_tr_pto=wapp"
      );

      const documentInitialised = () => driver.executeScript("return");

      driver.wait(documentInitialised(), 100000);

      const newsElements = await driver.findElements(By.className("flash-list-item-wrapper"));
      let latestNewsTime: string = null;
      const articles = [];
      for (const article of newsElements) {
        if (latestNewsTime) {
          const timeleft = await article.findElement(By.className("time-left"));
          let prevTime = await timeleft.getText();
          prevTime = prevTime.trim();
          if (latestNewsTime === prevTime) {
            console.log("latestNewsTime", latestNewsTime);
            articles.push(await article.getText());
          }
        } else {
          const timeleft = await article.findElement(By.className("time-left"));
          latestNewsTime = await timeleft.getText();
          latestNewsTime = latestNewsTime.trim();
          articles.push(await article.getText());
        }
      }

      for (let newsContent of articles) {
        for (const dic of fukemupDictionary) {
          newsContent = newsContent.replaceAll(dic.key, dic.changed);
        }
        console.log(newsContent);
      }
      driver.wait(documentInitialised(), 100000);
    } catch (error) {}
  }
}

export default MarsbitCrawlerJob;

const fukemupDictionary = [{ key: "MarsBit", changed: "Icryptobook" }];

import chalk from "chalk";
import MarsbitCrawlerJob from "./jobs/marsbitCrawler.job";

export function InitRepeatJobs() {
  console.log(chalk.redBright("\n➡️➡️➡️ Generate Repeat Jobs"));

  MarsbitCrawlerJob.create({})
    .repeatEvery("1 minutes")
    .unique({ name: MarsbitCrawlerJob.jobName })
    .save();
}

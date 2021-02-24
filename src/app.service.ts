import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';
import { interval } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  // 第一位表示的是秒，第二位是分，第三位是小时，第四位是天，第五位是月，第六位是一周里的天。
  // 比如我们把第一个星号改成 15 ，这个模式的意思就是每一分的第 15 秒，也就是这个计划任务每分钟的第 15 秒都会被执行一次。
  // @Cron('15 * * * * *')
  @Cron(CronExpression.EVERY_5_SECONDS, { name: 'greet' })
  handleCron() {
    console.log("执行计划任务");
  }

  @Interval(1000)
  handleInterval() {
    // console.log('滴答');
  }

  @Timeout(3000)
  handleTimeout() {
    // console.log('咯咯哒');

  }
}

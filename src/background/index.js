/*  global chrome */
import moment from 'moment'
import {
  getHourAndMinute,
  getIsWorkDay,
  getConfig,
} from '../popup/App/utils/utils'
import { getEatList, getHomeList } from '../popup/App/utils/chickenSoup'

//计时器列表
let timer = []

//公用设置提醒
function setRemind(key, cb) {
  const goHomeConfig = getConfig()
  const time = goHomeConfig[key]
  if (!time) return
  //提醒时间
  const [hour, minute] = getHourAndMinute(time)

  //当前时间距离提醒时间的毫秒数
  let timeout = new moment({ hour, minute }).diff(new moment())

  //如果已经超过提醒时间，则计时到次日
  if (timeout < 0) {
    timeout += 1000 * 60 * 60 * 24
  }

  //设置计时器
  const tmpTimer = setTimeout(() => {
    //执行通知内容
    cb()
    //提醒完成后再次开始计时
    setRemind(key, cb)
  }, timeout)

  //保存计时器id，用于初始化时清除
  timer.push(tmpTimer)
}

//背景页初始化
function init() {
  //清除旧的所有定时器
  timer.forEach((item) => {
    clearTimeout(item)
  })
  timer = []

  //设置下班倒计时
  setRemind('offWorkTime', () => {
    if (getIsWorkDay()) {
      chrome.notifications.create('', {
        iconUrl: 'assets/icon48.png',
        title: '关机！下班！',
        message: getHomeList(),
        type: 'basic',
        requireInteraction: true,
        buttons: [{ title: '我知道了' }],
      })
    } else {
      console.log('当前是休息日，不发通知')
    }
  })

  //设置点餐倒计时
  setRemind('orderWarnTime', () => {
    if (getIsWorkDay()) {
      chrome.notifications.create('', {
        iconUrl: 'assets/icon48.png',
        title: '点餐提醒',
        message: getEatList(),
        type: 'basic',
        requireInteraction: true,
        buttons: [{ title: '我知道了' }],
      })
    } else {
      console.log('当前是休息日，不发通知')
    }
  })
}

//执行一次初始化
init()



//监听页面通讯，在设置改变的时候，执行初始化
chrome.runtime.onMessage.addListener((e) => {
  if (e === 'configChange') {
    init()
  }
})

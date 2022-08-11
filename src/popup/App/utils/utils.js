import holiday from './holiday'
import moment from 'moment'

/**
 * 根据传入的字符串获取小时和分钟
 * @param {String} time  //'05:40'
 * @returns {Array}  [hour,minute]  // [ 5, 40 ]
 */
export const getHourAndMinute = time => {
  const tmpArr = time.split(':')
  if (tmpArr.length !== 2) return [null, null]
  return [parseInt(tmpArr[0]), parseInt(tmpArr[1])]
}

/**
 * 获取配置信息
 * @returns {Object}  配置信息
 */
export const getConfig = () => {
  const config = JSON.parse(localStorage.getItem('goHomeConfig') || '{}')
  //默认配置
  const defaultConfig = {
    onWorkTime: '09:00', //上班时间
    offWorkTime: '18:00', //下班时间
    orderWarnTime: '', //点餐提醒时间
    workType: 0, //工作制，0双休 1大小周 2单休
    isSaturdayWork: false, //大小周时2021年11月1号那周周六是否上班 1是上班 2是休息
    payOffDay: 10 //发薪日
  }

  Object.assign(defaultConfig, config)

  //如果配置中是大小周，需要计算一下本周是大周还是小周
  if (config.workType === 1) {
    //参照时间
    const referTime = new moment('2021-11-01 00:00:00')
    //本周距离参照时间是单周还是双周
    const nowWookSize = Math.floor((new moment().diff(referTime, 'days') % 14) / 7)
    if (nowWookSize) {
      defaultConfig.isSaturdayWork = !defaultConfig.isSaturdayWork
    }
  }
  return defaultConfig
}

/**
 * 获取当天是否需要上班
 * @returns {Boolean}  是否需要上班
 */
export const getIsWorkDay = () => {
  const now = new moment()
  const date = now.format('YYYY-MM-DD') //当前日期
  const { workType, isSaturdayWork } = getConfig()
  const inWorkDay = holiday[workType].some(item => item.workDay.some(item => item === date))
  const inRestDay = holiday[workType].some(item => item.restDay.some(item => item === date))
  if (inWorkDay) {
    return true
  }
  if (inRestDay) {
    return false
  }
  //双休  或者  大小周且周六不需要上班
  if (workType === 0 || (workType === 1 && !isSaturdayWork)) {
    return now.format('d') > 0 && now.format('d') < 6
  }

  //单休  或者  大小周且周六需要上班
  if (workType === 2 || (workType === 1 && isSaturdayWork)) {
    return now.format('d') > 0
  }
}

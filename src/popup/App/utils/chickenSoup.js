// prettier-ignore
const list = [
  '小心点，你老板在你背后',
  '工作再累，也别忘了摸鱼哦，钱是老板的，命是自己的',
  '我毕生的梦想，就是可以准点下班',
  '你上会班吧，我替你老板求求你了',
  '别划水了，上岸换口气吧',
  '愿你的烦恼，像你的头发一样，越来越少',
  '实在没事干，想想疯狂星期四的文案吧',
  '摸鱼才是真的赚钱',
  '上班是帮老板赚钱，摸鱼是赚老板的钱'
]
const warmList = [
  'B站已故员工提示您：上班一定要划水摸鱼，放松一下大脑神经，预防脑溢血猝死。您努力拼命打工，除了感动自己，也笑到了老板和领导',
  '工作再累，也一定不要忘记摸鱼哦！',
  '有事没事起身去茶水间，去厕所，去廊道走走别老在工位上坐着，钱是老板的,但命是自己的',
  '三甲医院 ICU 躺一天平均费用大概一万块.你晚一天进 ICU，就等于为你的家庭多赚一万块。少上班，多摸鱼.'
]
const goEatList = [
  '头可破血可流,干饭人三餐不能断',
  '世间唯爱与美食不可辜负，不管多忙，都要记得按时吃饭',
  '生死有命，胖瘦在天，该吃饭了',
  '在不点餐你等下又要一个人自己下去吃饭了',
]
const goHomeList = [
  '一天工资到手，记得打卡哦',
  '古藤老树昏鸦，上班摸鱼，下班回家',
  '期待明天的到来'
]
export const getWarming = () => {
  let msg = warmList[Math.floor(Math.random() * warmList.length)]
  return msg
}

export const getChickenSoup = () => {
  let msg = list[Math.floor(Math.random() * list.length)]
  return msg
}

export const getEatList = () => {
  let msg = goEatList[Math.floor(Math.random() * goEatList.length)]
  return msg
}

export const getHomeList = () => {
  let msg = goHomeList[Math.floor(Math.random() * goHomeList.length)]
  return msg
}






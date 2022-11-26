// 节假日调休信息，不同公司的放假时间不一样，自己可以根据实际情况配置
// name是假期名称
// workDay是指原本正常放假的，因为节假日调休需要上班的日期列表
// restDay是整个假期连续放假的日期列表

// 双休节假日配置
const workType0 = [
  {
    name: '元旦假期',
    workDay: [],
    restDay: ['2022-12-31', '2023-01-01', '2023-01-02']
  },
  {
    name: '春节假期',
    workDay: ['2023-01-21', '2023-01-29'],
    restDay: ['2023-01-22', '2023-01-22','2023-01-23','2023-01-24','2023-01-25','2023-01-26','2023-01-27','2023-01-28']
  },
  {
    name: '清明假期',
    workDay: ['2023-04-01','2023-04-02'],
    restDay: ['2023-04-03', '2023-04-04', '2023-04-05']
  },
  {
    name: '五一假期',
    workDay: ['2023-04-23', '2023-05-06'],
    restDay: ['2023-04-29','2023-04-30', '2023-05-01', '2023-05-02', '2023-05-03']
  },
  {
    name: '端午假期',
    workDay: ['2023-06-25'],
    restDay: ['2023-06-22', '2023-06-23', '2023-06-24']
  },
  {
    name: '中秋假期',
    workDay: [],
    restDay: ['2023-09-29',]
  },
  {
    name: '国庆假期',
    workDay: ['2023-10-07', '2023-10-08'],
    restDay: [ '2023-09-30','2023-10-01', '2023-10-02', '2023-10-03', '2023-10-04', '2023-10-05', '2023-10-06']
  }
]

// 大小周节假日配置
const workType1 = [
  {
    name: '元旦假期',
    workDay: [],
    restDay: ['2022-12-31', '2023-01-01', '2023-01-02']
  },
  {
    name: '春节假期',
    workDay: ['2023-01-21', '2023-01-29'],
    restDay: ['2023-01-22', '2023-01-22','2023-01-23','2023-01-24','2023-01-25','2023-01-26','2023-01-27','2023-01-28']
  },
  {
    name: '清明假期',
    workDay: ['2023-04-01','2023-04-02'],
    restDay: ['2023-04-03', '2023-04-04', '2023-04-05']
  },
  {
    name: '五一假期',
    workDay: ['2023-04-23', '2023-05-06'],
    restDay: ['2023-04-29','2023-04-30', '2023-05-01', '2023-05-02', '2023-05-03']
  },
  {
    name: '端午假期',
    workDay: ['2023-06-25'],
    restDay: ['2023-06-22', '2023-06-23', '2023-06-24']
  },
  {
    name: '中秋假期',
    workDay: [],
    restDay: ['2023-09-29',]
  },
  {
    name: '国庆假期',
    workDay: ['2023-10-07', '2023-10-08'],
    restDay: [ '2023-09-30','2023-10-01', '2023-10-02', '2023-10-03', '2023-10-04', '2023-10-05', '2023-10-06']
  }
]

// 单休节假日配置
const workType2 =  [
  {
    name: '元旦假期',
    workDay: [],
    restDay: ['2023-01-01', '2023-01-02']
  },
  {
    name: '春节假期',
    workDay: ['2023-01-21', '2023-01-29'],
    restDay: ['2023-01-22', '2023-01-22','2023-01-23','2023-01-24','2023-01-25','2023-01-26','2023-01-27','2023-01-28']
  },
  {
    name: '清明假期',
    workDay: ['2023-04-01','2023-04-02','2023-04-03'],
    restDay: ['2023-04-04', '2023-04-05']
  },
  {
    name: '五一假期',
    workDay: ['2023-04-23', '2023-05-06','2023-04-29'],
    restDay: ['2023-04-30', '2023-05-01', '2023-05-02', '2023-05-03']
  },
  {
    name: '端午假期',
    workDay: ['2023-06-24','2023-06-25'],
    restDay: ['2023-06-22', '2023-06-23']
  },
  {
    name: '中秋假期',
    workDay: ['2023-09-30',],
    restDay: ['2023-09-29',]
  },
  {
    name: '国庆假期',
    workDay: ['2023-10-07', '2023-10-08'],
    restDay: ['2023-10-01', '2023-10-02', '2023-10-03', '2023-10-04', '2023-10-05', '2023-10-06']
  }
]

export default [workType0, workType1, workType2]

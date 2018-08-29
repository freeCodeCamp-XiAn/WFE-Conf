const config = {
  header: {
    a: '111'
  },
  banner: {
    a: '111'
  },
  confInfo: {
    titlezh: '大会简介',
    titlen: 'INTRODUCTION',
    intro: 'FCC 西安社区一直以为西安本土开发者提供一个开放交流的环境为目的，成功举办了十余次社区活动，受到大家的广泛好评和热烈响应。这次正逢 FCC 西安社区诞生两周年，在持续酝酿下，我们特地于两周年当日筹办这场【2018 西安 Web 前端交流大会】，为西安本土的前端工程师、开源爱好者及互联网从业人员们提供一场前所未有的技术盛宴。此次盛会期待您的参与！',
  },
  teacher: {
    config: {
      titlezh: '分享嘉宾',
      titlen: 'SPEAKER'
    },
    lists: [
      {
        id: '1',
        path: '../../static/teacher/huikun.png',
        name: '惠坤',
        intro: 'ThoughtWorks 咨询师，一直致力于研究如何将更好的用户体验带到前端。',
        level: '中级'
      },
      {
        id: '2',
        path: '../../static/teacher/wangyuanbo.png',
        name: '王渊博',
        intro: '易宝，背锅抗雷前端一枚。',
        level: '初级'
      },
      {
        id: '3',
        path: '../../static/teacher/leili.png',
        name: '雷力',
        intro: 'Node 区块链工程师、全栈开发工程师，目前关注形式化验证与智能合约安全。',
        level: '中级'
      },
      {
        id: '4',
        path: '../../static/teacher/hanyile.png',
        name: '韩亦乐',
        intro: 'freeCodeCamp 2018 Top Contributor，开源爱好者，参与、组织过多次开源技术社区活动，目前在滴滴进行前端岗位的实习。',
        level: '中级'
      },
      {
        id: '5',
        path: '../../static/teacher/muyang.png',
        name: '慕阳',
        intro: '华为云 devcloud 前端工程师，曾供职于美团网、人人网。目前在华为云 devckoud 负责前端架构、性能优化与公共服务建设。',
        level: '高级'
      },
      {
        id: '6',
        path: '../../static/teacher/liyaodong.png',
        name: '李耀东',
        intro: '曾在极客公园做前端，现 ThoughtWorks 工程师，正在学习网站性能优化中。',
        level: '高级'
      }
    ]
  },
  timeLine: {
    lists: [
      {
        id: '1',
        time: '09:30-10:00',
        title: '签到',
        /* 用于区别演讲活动和公共活动 */
        isSpeech: false,
        type: '备注',
        info: '。'
      },
      {
        id: '2',
        time: '10:00-10:20',
        title: '主持人开场介绍',
        isSpeech: false,
        type: '备注',
        info: '。'
      },
      {
        id: '3',
        time: '10:20-11:10',
        title: '慧坤 - 揭秘贝塞尔曲线在 Web 中的应用',
        isSpeech: true,
        type: '主题描述',
        info: '。'
      },
      {
        id: '4',
        time: '11:10-12:00',
        title: '王渊博 - Typescript 介绍',
        isSpeech: true,
        type: '主题描述',
        info: '。'
      },
      {
        id: '5',
        time: '12:00-13:00',
        title: '午餐',
        isSpeech: false,
        type: '备注',
        info: '。'
      },
      {
        id: '6',
        time: '13:00-13:50',
        title: '雷力 - 基于以太坊的 DApp 开发实践',
        isSpeech: true,
        type: '主题描述',
        info: '。'
      },
      {
        id: '7',
        time: '13:50-14:40',
        title: '韩亦乐 - 浅尝初试微前端',
        isSpeech: true,
        type: '主题描述',
        info: '。'
      },
      {
        id: '8',
        time: '14:40-15:20',
        title: '茶歇+合影+抽奖',
        isSpeech: false,
        type: '备注',
        info: '。'
      },
      {
        id: '9',
        time: '15:20-16:10',
        title: '慕阳 - 基于 ng 的前端微服务实践',
        isSpeech: true,
        type: '主题描述',
        info: '。'
      },
      {
        id: '10',
        time: '16:10-17:00',
        title: '李耀东 - Building blazing fast website with AMP',
        isSpeech: true,
        type: '主题描述',
        info: '李耀东 - Building blazing fast website with AMP李耀东 - Building blazing fast website with AMP李耀东 - Building blazing fast website with AMP李耀东 - Building blazing fast website with AMP'
      },
      {
        id: '11',
        time: '17:00-17:30',
        title: '交流+颁奖+抽奖',
        isSpeech: false,
        type: '主题描述',
        info: '。'
      }
    ],
    config: {
      titlen: 'TIMELINE',
      titlezh: '活动流程'
    }
  },
  activityShow: [
    {
      id: '1',
      path: '../../static/teacher/guest0.jpeg'
    },
    {
      id: '2',
      path: '../../static/qrcode/qrcode.jpg'
    },
    {
      id: '3',
      path: '../../static/qrcode/qrcode.jpg'
    },
    {
      id: '4',
      path: '../../static/qrcode/qrcode.jpg'
    }
  ],
  placeInfo: {
    lists: [
      {
        id: '1',
        path: '../../static/place/changdi-1.jpg'
      },
      {
        id: '2',
        path: '../../static/place/changdi-1.jpg'
      }
    ],
    a: ''
  },
  linkUs: {
    titlen: 'LINK US',
    titlezh: '联系我们',
    path: '../../static/fcc-gongzhonghao.jpeg'
  }
}

export default config ;

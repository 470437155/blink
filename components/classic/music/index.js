// components/classic/music/index.js
import {classicBehivor} from '../classic-behavior.js'

Component({
  /**
   * 组件的属性列表
   */
  behaviors:[classicBehivor],
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc:'images/player@waitting.png',
    playSrc:'images/player@playing.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

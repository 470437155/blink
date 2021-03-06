// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean,
      valur:false
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   * 封装性，开放性
   */
  data: {
    // like: true,
    // count: 99,
    yesSrc:'images/like.png',
    noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event) {
      let like = this.properties.like
      let count = this.properties.count

      count = like?count-1:count+1
      this.setData({
        count:count,
        like:!like
      })
      let behavior = this.properties.like?'like':'cancel'
      this.triggerEvent('like',{
        behavior:behavior
      },{})
    }
  }
})
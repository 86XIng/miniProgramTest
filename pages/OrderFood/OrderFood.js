// pages/点餐页面/OrderFood.js
const app = getApp()
var item_index =null;
var count = 0;
Page({  
  data: {
    images: [
    { url: '../../image/1.jpg' },
    { url: '../../image/2.jpg' },
    { url: '../../image/3.jpg' }
    ],
    food: [
      {
        id:'hot',
        content: [
          { 
            foodId: '001',
            id:'hot',
            money: '23', 
            count: 0 ,
            url: '../../image/foodImage/1.jpg',
            name: '单人套餐A',
            countLimit:20
          },{ 
            foodId: '002',
            id: 'hot', 
            money: '27', 
            count: 0 ,
            url: '../../image/foodImage/2.jpg',
            name: '单人套餐B',
            countLimit: 20
          },{ 
            foodId: '021',
            id: 'hot',
            money: '9', 
            count: 0 ,
            url: '../../image/foodImage/3.jpg',
            name: '鸡米花',
            countLimit: 20
          },
          { foodId: "011", id: 'hot', countLimit: 20, url: '../../image/foodImage/1.jpg', name: '早餐A', money: '23', count: 0 },
          { foodId: "012", id: 'hot', countLimit: 20, url: '../../image/foodImage/2.jpg', name: '早餐B', money: '27', count: 0 },
          { foodId: "013", id: 'hot', countLimit: 20, url: '../../image/foodImage/3.jpg', name: '早餐C', money: '9', count: 0 }
        ]
      },
      {
        id:"breakfast",
        content: [
          { foodId: "011", countLimit: 20,url: '../../image/foodImage/1.jpg', name: '早餐A', money: '23', count: 0 }, 
          { foodId: "012", countLimit: 20,url: '../../image/foodImage/2.jpg', name: '早餐B', money: '27', count: 0 },
          { foodId: "013", countLimit: 20,url: '../../image/foodImage/3.jpg', name: '早餐C', money: '9', count: 0 }
          ]
      },
      {
        id:"single",
        content: [
          { foodId: "001", countLimit: 20,url: '../../image/foodImage/1.jpg', name: '单人套餐A', money: '23', count: 0 },
          { foodId: "002", countLimit: 20,url: '../../image/foodImage/2.jpg', name: '单人套餐B', money: '27', count: 0 },
          { foodId: "003", countLimit: 20, url: '../../image/foodImage/3.jpg', name: '单人套餐C', money: '9', count: 0 }, {
            foodId: "021", countLimit: 20, url: '../../image/foodImage/3.jpg', name: '鸡米花', money: '9', count: 0            
          }
          ]
      }
      
      ] ,     
    foodList:[
      {
        id:'hot',
        name: '人气热卖',
        isActive:true
      },{
        id:'breakfast',
        name:'早餐',
        isActige:false
      },{
        id: 'single',
        name: '单人套餐',
        isActive:false
      }, {
        id: 'single',
        name: '单人套餐',
        isActive: false
      }, {
        id: 'single',
        name: '单人套餐',
        isActive: false
      }, {
        id: 'single',
        name: '单人套餐',
        isActive: false
      }, {
        id: 'single',
        name: '单人套餐',
        isActive: false
      }, {
        id: 'single',
        name: '单人套餐',
        isActive: false
      }, {
        id: 'single',
        name: '单人套餐',
        isActive: false
      }, {
        id: 'single',
        name: '单人套餐',
        isActive: false
      }, {
        id: 'single',
        name: '单人套餐',
        isActive: false
      }, {
        id: 'single',
        name: '单人套餐',
        isActive: false
      }
      ],
    cart: {
      count: 0,
      total: 0,
      list: {},
      num: {}
    },
    this_foodList:"hot",
    showCartDetail: false,
    cardIndex :0,
    foodLength: 0
  },
  changeIndex:function(e){   
    let index = e.currentTarget.dataset.index;
    let item = e.currentTarget.dataset.item;
    let foodList = this.data.foodList;
    //先将所有的isActive属性设置为false
    for(let foodItem in foodList){
      foodList[foodItem].isActive = false;
    }
    //再将当前选中页的isActive属性设置为true
    foodList[index].isActive = !foodList[index].isActive;   
    this.setData({
      this_foodList: e.currentTarget.dataset.item,
      foodList: foodList
    })
  },
  ADD: function (e) {
    let id = e.currentTarget.dataset.id
    let food = this.data.food;
    let cart = this.data.cart;
    let cardIndex = this.data.cardIndex;
    //两层循环获得每一个food的foodId
    for(let foodItem1=0;foodItem1<food.length;foodItem1++){
      let food2 = food[foodItem1].content;
      for (let foodItem2 = 0; foodItem2 < food2.length; foodItem2++){
        let food3 = food2[foodItem2]
        if(food3.foodId==id&&food3.count<food3.countLimit){
          food3.count++;
          if(food3.id!='hot'){ //如果不是hot组的则count增加
            //对cardINdex操作发现有问题暂时换一种思路
            // cart.list[cardIndex]= food3;
            // cardIndex++;
            cart.count++;
            cart.num[food3.id]=cart.count;
            cart.total += Number(food3.money);
          }
        }
      }
    }
    this.setData({
      food: food,
      cart:cart,
      cardIndex:cardIndex
    })
  },
  SUB: function (e) {   
    let id = e.currentTarget.dataset.id
    let food = this.data.food;
    let cart = this.data.cart;
    let showCartDetail = this.data.showCartDetail;
    //两层循环获得每一个food的foodId
    for (let foodItem1 = 0; foodItem1 < food.length; foodItem1++) {
      let food2 = food[foodItem1].content;
      for (let foodItem2 = 0; foodItem2 < food2.length; foodItem2++) {
        let food3 = food2[foodItem2]
        if (food3.foodId == id) {
          if(food3.count>0){
            --food3.count;
            if (food3.id != 'hot') {
              --cart.count;
              cart.total -= Number(food3.money);
            }
            if (cart.count == 0) {
              showCartDetail = false;
            }
          }
            
        }
      }
    }
    this.setData({
      food: food,
      cart: cart,
      showCartDetail: showCartDetail
    })
  },
  inputAmount: function(e){
    let id = e.currentTarget.dataset.id
    let food = this.data.food;
    let val = e.detail.value;
     let cart = this.data.cart;
    if(!isNaN(val)&&val!=''){
      for (let foodItem1 = 0; foodItem1 < food.length; foodItem1++) {
        let food2 = food[foodItem1].content;
        for (let foodItem2 = 0; foodItem2 < food2.length; foodItem2++) {
          let food3 = food2[foodItem2]
          if (food3.foodId == id) {
            food3.count = val < 0 ? count : val;
            food3.count > food3.countLimit ? food3.count=food3.countLimit:food3.count;
            if (food3.id != 'hot') {
            cart.count = cart.count + Number(food3.count);
            }
          }
        }
      }
      this.setData({
        food: food,
        cart:cart
      })
    } else if(isNaN(val) && val != ''){
      for (let foodItem1 = 0; foodItem1 < food.length; foodItem1++) {
        let food2 = food[foodItem1].content;
        for (let foodItem2 = 0; foodItem2 < food2.length; foodItem2++) {
          let food3 = food2[foodItem2]
          if (food3.foodId == id) {
            food3.count =0;
            this.setData({
              food: food,
              
            })
          }
        }
      }
    }
  },

	showCartDetail: function () {
    this.setData({
      showCartDetail: !this.data.showCartDetail
    });
  },
  hideCartDetail: function () {
    this.setData({
      showCartDetail: false
    });
  },
  submit:function(){
    let food = this.data.food;
    let foodLength = 0 ;
    let url = '/pages/balance/balance?'
    let cargo = [];
    let i = 0;
    //两层循环获得每一个food的foodId
    for (let foodItem1 = 0; foodItem1 < food.length; foodItem1++) {
      let food2 = food[foodItem1].content;
      if(food[foodItem1].id!='hot'){
        for (let foodItem2 = 0; foodItem2 < food2.length; foodItem2++) {
          let food3 = food2[foodItem2]
          if (food3.count != 0) {
            foodLength++;
          }
        }
      }
    }
    for (let foodItem1 = 0; foodItem1 < food.length; foodItem1++) {
      let food2 = food[foodItem1].content;

      if (food[foodItem1].id != 'hot') {      
        for (let foodItem2 = 0; foodItem2 < food2.length; foodItem2++) {
          let food3 = food2[foodItem2]
          if (food3.count != 0 ) {
              console.log("i:"+i);
              console.log(food3)
              if(i<foodLength)
              cargo[i++] = food3;
            }
        }
      }
    }
    this.setData({
      foodLength: foodLength
    });
   
    wx.setStorage({
      key: "cargo",
      data: cargo
    })
    wx:wx.navigateTo({
      url: url+'foodLength='+foodLength
    })
  }
  
 })

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
        id:"hot",
        content: [{ url: '../../image/foodImage/1.jpg', name: '单人套餐A', money: '23', count: 0 }, { url: '../../image/foodImage/2.jpg', name: '单人套餐B', money: '27', count: 0 },
      { url: '../../image/foodImage/3.jpg', name: '鸡米花', money: '9', count: 0 }]
      },
      {
        id:"breakfast",
        content: [{ url: '../../image/foodImage/1.jpg', name: '早餐A', money: '23', count: 0 }, { url: '../../image/foodImage/2.jpg', name: '早餐B', money: '27', count: 0 },
          { url: '../../image/foodImage/3.jpg', name: '早餐C', money: '9', count: 0 }]
      },
      {
        id:"single",
        content: [{ url: '../../image/foodImage/1.jpg', name: '单人套餐A', money: '23', count: 0 }, { url: '../../image/foodImage/2.jpg', name: '单人套餐B', money: '27', count: 0 },
          { url: '../../image/foodImage/3.jpg', name: '单人套餐C', money: '9', count: 0 }]
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
      }
      ],
    this_foodList:"hot",

  },
  changeIndex:function(e){   
    console.log(e.currentTarget.dataset.item);
    let item = e.currentTarget.dataset.item;
    let index = e.currentTarget.dataset.index;
    let foodList = this.data.foodList[index];
    console.log(foodList.id)
    this.setData({
      this_foodList: e.currentTarget.dataset.item,
      foodList: foodList
    })
  },
  ADD: function (e) {
    let index = e.currentTarget.dataset.index;
    let food = this.data.food;
    food[index].count++;
    this.setData({
      food: food
    })
  },
  SUB: function (e) {   
    let index = e.currentTarget.dataset.index;
    let food = this.data.food;
    (food[index].count) <= 0 ? food[index].count : --food[index].count;
    this.setData({
      food: food
    })
  },
  inputAmount: function(e){
    let index = e.currentTarget.dataset.index;
    let food = this.data.food;
    let count = food[index].count;
    let val = e.detail.value;
    if(!isNaN(val)&&val!=''){
      food[index].count = val < 0 ? count : val;
      this.setData({
        food: food
      })
    } else if(isNaN(val) && val != ''){
      food[index].count=0;
      this.setData({
        food: food
      })
    }
  }

 })
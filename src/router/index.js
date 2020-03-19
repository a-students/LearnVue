import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home";
import Category from "../views/category/Category";
import Cart from "../views/cart/Cart";
import Profile from "../views/profile/Profile";
//1.安装插件

Vue.use(VueRouter)
//2.创建路由对象
//导出router
export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:"/home"
    },
    {
      path: "/home",
      component:Home
    }
    ,
    {
      path: "/category",
      component:Category
    },
    {
      path: "/cart",
      component:Cart
    }
    ,
    {
      path: "/profile",
      component:Profile
    }
  ]
})
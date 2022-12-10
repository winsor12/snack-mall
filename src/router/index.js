import { createRouter, createWebHistory } from 'vue-router'
import Lookmyself from '../views/Lookmyself'
import Changemyself from '../views/Changemyself'
import Goods from '../views/Goods'
import AddGoods from '../views/AddGoods'
import { Apple, Iphone } from '@element-plus/icons'
import App from "../App";
import Merchant from "../views/Merchant"
import Order from "../views/Order"
import Ordersucceed from "../views/Ordersucceed"
import Orderfailing from "../views/Orderfailing"
import Comment from "../views/Comment"
import Login from "../views/Login"
import Admin from "../views/Admin"
import Register from "../views/Register"
import ShoppingMall from "../consumer/ShoppingMall"
import Type from "../consumer/Type"
import Details from "../consumer/Details"


const routes = [
  {
    path: "/consumer",
    name: "商城",
    component: ShoppingMall,
    meta: {"role": ['consumer']},
  },
  {
    path: "/navigation",
    name: "个人中心",
    component: Merchant,
    meta: {"role": ['admin','merchant']},
    redirect:"/Lookmyself",
    children: [
      {
        path: "/Lookmyself",
        name: "查看个人信息",
        component: Lookmyself,
        meta: {"role": ['admin','merchant']}
      },
      {
        path: "/Changemyself",
        name: "修改个人信息",
        component: Changemyself,
        meta: {"role": ['merchant']}
      }
    ]
  },
  {
    path: "/navigation",
    name: "商品管理",
    component: Merchant,
    meta: {"role": ['admin','merchant']},
    children: [
      {
        path: "/Goods",
        name: "查看商品信息",
        component: Goods,
        meta: {"role": ['admin','merchant']}
      },
      {
        path: "/AddGoods",
        name: "上架商品",
        component: AddGoods,
        meta: {"role": ['merchant']}
      }
    ]
  },
  {
    path: "/navigation",
    name: "订单管理",
    component: Merchant,
    meta: {"role": ['merchant','admin']},
    children: [
      {
        path: "/Order",
        name: "查看总订单",
        component: Order,
        meta: {"role": ['merchant']}
      },
      {
        path: "/Ordersucceed",
        name: "查看完成订单",
        component: Ordersucceed,
        meta: {"role": ['admin','merchant']}
      },
      {
        path: "/Orderfailing",
        name: "查看未完成订单",
        component: Orderfailing,
        meta: {"role": ['admin','merchant']}
      }
    ]
  },
  {
    path: "/navigation",
    name: "评论管理",
    component: Merchant,
    meta: {"role": ['admin','merchant']},
    children: [
      {
        path: "/Comment",
        name: "查看商品评论",
        component: Comment,
        meta: {"role": ['admin','merchant']}
      }
    ]
  },
    {
    path: '/',
    name: 'login',
    component: Login
    },
    {
    path: '/register',
    name: 'register',
    component: Register
    },
    {
      path: "/navigation",
    name: "管理员后台",
    component: Admin,
    children: [
      {
        path: "/Admin",
        name: "管理员页面",
        component: Admin
      }
    ]
    },
    {
      path: "/type/:id",
      component: Type,
      meta: {"role": ['consumer']},
    },
    {
      path: "/details/:cid",
      component: Details,
      meta: {"role": ['consumer']},
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router

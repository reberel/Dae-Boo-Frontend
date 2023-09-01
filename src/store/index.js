import { createStore } from 'vuex'
import LogInModule from '@/store/logIn/LogInModule'
import BoardModule from '@/store/board/BoardModule'
import MyPageModule from '@/store/myPage/MyPageModule'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    LogInModule:LogInModule,
    BoardModule:BoardModule,
    MyPageModule: MyPageModule
  }
})

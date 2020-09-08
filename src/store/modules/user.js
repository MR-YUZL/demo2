import tim from '../../utils/tim'
import store from '..'
const user = {
  state: {
    currentUserProfile: {},
    isLogin: false,
    isSDKReady: false, // TIM SDK 是否 ready
    userID: 0,
    userSig: '',
    sdkAppID: 0,
  },
  mutations: {
    updateCurrentUserProfile(state, userProfile) {
      state.currentUserProfile = userProfile
    },
    toggleIsLogin(state, isLogin) {
      
      state.isLogin = typeof isLogin === 'undefined' ? !state.isLogin : isLogin
    },
    toggleIsSDKReady(state, isSDKReady) {
      state.isSDKReady = typeof isSDKReady === 'undefined' ? !state.isSDKReady : isSDKReady
    },
    reset(state) {
      Object.assign(state, {
        currentUserProfile: {},
        isLogin: false,
        isSDKReady: false // TIM SDK 是否 ready
      })
    },
    GET_USER_INFO(state, payload) {
      state.userID = payload.userID
      state.userSig = payload.userSig
      state.SDKAppID = payload.SDKAppID
    },
  },
  actions: {
    // login(context, userID) {
    //   tim
    //     .login({
    //       userID,
    //       userSig: window.genTestUserSig(userID).userSig
    //     })
    //     .then(() => {
    //       context.commit('toggleIsLogin', true)
    //       context.commit('startComputeCurrent')
    //       window.$message({ type: 'success', message: '登录成功' })
    //     })
    //     .catch(imError => {
    //       if (imError.code === 2000) {
    //         window.$message.error(imError.message + ', 请检查是否正确填写了 SDKAPPID')
    //       } else {
    //         window.$message.error(imError.message)
    //       }
    //     })
    // },
    logout(context) {
      // console.log(store.state.user.isSDKReady, "&& this.isSDKRead");
      // 若有当前会话，在退出登录时已读上报
      if (context.rootState.conversation.currentConversation.conversationID ) {
        tim(store.state.basic.imInfo.SDKAppID).setMessageRead({ conversationID: context.rootState.conversation.currentConversation.conversationID })
      }
      if (store.state.basic.imInfo.SDKAppID) {
        tim(store.state.basic.imInfo.SDKAppID)
          .logout()
          .then(() => {
            context.commit("toggleIsLogin");
            context.commit("stopComputeCurrent");
            context.commit("reset");
          });
      }
      
    }
  }
}

export default user

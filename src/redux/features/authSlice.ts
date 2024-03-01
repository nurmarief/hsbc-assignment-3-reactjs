import { createSlice } from "@reduxjs/toolkit";

interface SubscriptionAccount {
  text?: string,
  avatarURL?: string,
}

export interface State {
  me: {
    username: string,
    avatarURL: string,
    subscription: Array<SubscriptionAccount>
  }  
}

const initialState: State = {
  me: {
    username: 'my-account',
    avatarURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    subscription: [
      {
        text: 'account-1',
        avatarURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
      },
      {
        text: 'account-2',
        avatarURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
      },
      {
        text: 'account-3',
        avatarURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
      },
      {
        text: 'account-4',
        avatarURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
      },
      {
        text: 'account-5',
        avatarURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
      },
    ],
  }
}

export const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {}
})

export default authSlice.reducer
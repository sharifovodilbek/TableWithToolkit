import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface User {
  id: number
  name: string
  email: string
}

interface UserState {
  selectedUsers: User[]
}

const initialState: UserState = {
  selectedUsers: []
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedUsers: (state, action: PayloadAction<User[]>) => {
      state.selectedUsers = action.payload
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.selectedUsers = state.selectedUsers.filter(u => u.id !== action.payload)
    }
  }
})

export const { setSelectedUsers, deleteUser } = userSlice.actions
export default userSlice.reducer

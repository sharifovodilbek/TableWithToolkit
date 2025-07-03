import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface User {
  id: number
  name: string
  email: string
}

interface UserState {
  allUsers: User[]
  selectedUsers: User[]
}

const initialState: UserState = {
  allUsers: [
    { id: 1, name: "Jack", email: "jack@gmail.com" },
  { id: 2, name: "Jane", email: "jane@gmail.com" },
  { id: 3, name: "Tom", email: "tom@gmail.com" },
  { id: 4, name: "Coll", email: "coll@gmail.com" },
  { id: 5, name: "Alex", email: "alex@gmail.com" },
  { id: 6, name: "Anna", email: "anna@gmail.com" },
  { id: 7, name: "Cruse", email: "cruse@gmail.com" },
  { id: 8, name: "Bob", email: "bob@gmail.com" }
  ],
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
      state.allUsers = state.allUsers.filter(u => u.id !== action.payload)
    }
  }
})

export const { setSelectedUsers, deleteUser } = userSlice.actions
export default userSlice.reducer

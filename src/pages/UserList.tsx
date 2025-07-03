import { Table, Button } from "antd"
import type { ColumnsType } from "antd/es/table"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setSelectedUsers } from "../store/userSlice"
import { useNavigate } from "react-router-dom"

interface User {
  id: number
  name: string
  email: string
}

const data: User[] = [
  { id: 1, name: "Jack", email: "jack@gmail.com" },
  { id: 2, name: "Jane", email: "jane@gmail.com" },
  { id: 3, name: "Tom", email: "tom@gmail.com" },
  { id: 4, name: "Coll", email: "coll@gmail.com" },
  { id: 5, name: "Alex", email: "alex@gmail.com" },
  { id: 6, name: "Anna", email: "anna@gmail.com" },
  { id: 7, name: "Cruse", email: "cruse@gmail.com" },
  { id: 8, name: "Bob", email: "bob@gmail.com" }
]

export default function UserList() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const handleNext = () => {
    const selectedUsers = data.filter(u => selectedRowKeys.includes(u.id))
    dispatch(setSelectedUsers(selectedUsers))
    navigate("/selected")
  }

  const columns: ColumnsType<User> = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" }
  ]

  return (
    <div style={{padding:2, backgroundColor:"lightgrey", minHeight:"97vh"}}>
      <Table
        rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
        rowKey="id"
        columns={columns}
        dataSource={data}
        style={{ backgroundColor: "lightgrey", borderRadius: 8 }}
      />
      <Button style={{backgroundColor:"lightgreen", font:"bold"}} onClick={handleNext} disabled={selectedRowKeys.length === 0}>
        Next Page
      </Button>
    </div>
  )
}

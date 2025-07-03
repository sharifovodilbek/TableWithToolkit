import { Table, Button } from "antd"
import type { ColumnsType } from "antd/es/table"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedUsers } from "../store/userSlice"
import { useNavigate } from "react-router-dom"
import type { RootState } from "../store"

interface User {
  id: number
  name: string
  email: string
}

export default function UserList() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const data = useSelector((state: RootState) => state.user.allUsers)

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
    <div style={{ padding: 20, backgroundColor: "lightgrey", minHeight: "97vh" }}>
      <Table
        rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
        rowKey="id"
        columns={columns}
        dataSource={data}
        style={{ backgroundColor: "white", borderRadius: 8 }}
      />
      <Button
        style={{ backgroundColor: "lightgreen", fontWeight: "bold", marginTop: 10 }}
        onClick={handleNext}
        disabled={selectedRowKeys.length === 0}
      >
        Next Page
      </Button>
    </div>
  )
}

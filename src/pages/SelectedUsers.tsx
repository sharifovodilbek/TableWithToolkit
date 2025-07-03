import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../store"
import { Table, Button } from "antd"
import { deleteUser } from "../store/userSlice"

export default function SelectedUsers() {
  const users = useSelector((state: RootState) => state.user.selectedUsers)
  const dispatch = useDispatch()

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id))
  }

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <Button type="primary" danger onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      )
    }
  ]

  return (
    <div style={{ padding: 2, backgroundColor: "lightgrey", minHeight: "97vh" }}>
      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        style={{ backgroundColor: "lightgrey", borderRadius: 8 }}
      />
    </div>
  )
}

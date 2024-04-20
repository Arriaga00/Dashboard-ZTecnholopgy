import { Space, Table, Tag } from 'antd';

const columns = [
    {
        title : "ID",
        dataIndex : 'id',
        key : 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
        title : "Email",
        dataIndex : 'email',
        key : 'email'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
        title : "Phone",
        dataIndex : 'phone',
        key : 'phone'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Role',
      key: 'role',
      dataIndex: 'role',
      render: (_, { role }) => (
        <>
          {role.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>edit</a>
          <a style={{color : 'red'}}>Delete</a>
        </Space>
      ),
    },
  ];



const TableManagers = ({infoUser}) => {
  return (
    <>
    <Table columns={columns} dataSource={infoUser} />
    </>
  )
}

export default TableManagers
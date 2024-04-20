import { Avatar, Button, Card } from 'antd';
const { Meta } = Card;

const ManagerCard = ({title,description,img, showModal,}) => {



  return (
    <Card
    style={{
      width: 250,
    }}
    actions={[
      <Button onClick={()=> {showModal()}} key={'1'} style={{padding : '0 3rem'}}>create</Button>
    ]}
  >
    <Meta
      avatar={<Avatar src={img} />}
      title={title}
      description={description}
    />
  </Card>
  )
}

export default ManagerCard
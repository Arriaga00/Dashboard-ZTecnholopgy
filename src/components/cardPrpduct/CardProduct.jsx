import { EditOutlined } from "@ant-design/icons";
  import { Card , Button } from "antd";
  const { Meta } = Card;
  
  const CardProduct = ({ infoCard }) => {
    return (
      <>
      {infoCard && infoCard.product && infoCard.product.map(el=> { 
          return (
          <Card key= {el.id_product}
          style={{
            width: 270,
            margin: '1rem',
          }}
          cover={
            <img
              alt={el.name}
              src={el.image}
              style={{width : '100%' , height : '11rem' , objectPosition :'center'}}
            />
          }
          actions={[
            <Button key={el.id_product} type="primary" danger ghost>delete</Button>,
            <EditOutlined key="edit" />,
          ]}
        >
          <Meta
            title={el.name}
            description={el.description}
          />
        </Card>)
      })}
      </>
    );
  };
  
  export default CardProduct;

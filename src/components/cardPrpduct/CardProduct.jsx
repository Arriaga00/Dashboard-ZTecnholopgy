import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Button, Popconfirm, message, Modal } from "antd";
import { useState } from "react";
import FormProduct from "../formProduct/FormProduct";
const { Meta } = Card;

const CardProduct = ({ infoCard, steNewProduct, newProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    fetch("http://localhost:5000/api/product/guardar-producto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((res) => {
        message.success("The product was successfully created");
        console.log(res),
          setTimeout(() => {
            window.location.reload();
          }, 2500);
      })
      .catch((error) => console.error("Error:", error));
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Process cancelled");
  };

  return (
    <>
      <div className="newProduct">
        <article onClick={showModal}>
          <h1>New Product</h1>
          <PlusOutlined />
        </article>
      </div>
      {infoCard &&
        infoCard.product &&
        infoCard.product.map((el) => {
          const confirm = (e) => {
            fetch(
              `http://localhost:5000/api/product/eleminar-producto/${el.id_product}`,
              {
                method: "DELETE",
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                message.success("The product was successfully removed");
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            console.log(e);
          };

          return (
            <Card
              key={el.id_product}
              style={{
                width: 250,
                margin: "1rem",
              }}
              cover={
                <img
                  alt={el.name}
                  src={el.image}
                  style={{
                    width: "100%",
                    height: "11rem",
                    objectPosition: "center",
                  }}
                />
              }
              actions={[
                <Popconfirm
                  key={el.id_product}
                  title="Delete the product"
                  description={`Are you sure to delete this ${el.name}`}
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button danger>Delete</Button>
                </Popconfirm>,
                <EditOutlined key="edit" />,
              ]}
            >
              <Meta title={el.name} description={el.description} />
              <p className="price">$ {el.price}</p>
            </Card>
          );
        })}

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Create"
      >
        <FormProduct steNewProduct={steNewProduct} newProduct={newProduct} />
      </Modal>
    </>
  );
};

export default CardProduct;

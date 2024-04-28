import { PlusOutlined } from "@ant-design/icons";
import { Divider, Tag } from "antd";

const Quote = () => {
  return (
    <>
      <div className="newSale">
        <article>
          <h1>New Quote</h1>
          <PlusOutlined />
        </article>
        <Divider orientation="left">
          List orders{" "}
          {
            <Tag bordered={false} color="magenta">
              {0}
            </Tag>
          }
        </Divider>
      </div>
    </>
  );
};

export default Quote;

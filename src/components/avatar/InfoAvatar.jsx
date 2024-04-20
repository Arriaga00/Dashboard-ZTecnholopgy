import { Avatar,  ConfigProvider, Popover } from "antd";

const InfoAvatar = () => {

const text = <span>Your Information</span>;
const admin = 'admin'
const content = (
  <div className="popover">
    <p>902000282</p>
    <p>andresfelipearriaga@gmail.com</p>
    <p>300789988</p>
    <p>cll 378 num 60 -63</p>
    <p>24</p>
    <span className="itemAdmin">{admin.toLocaleUpperCase()}</span>
  </div>
);

  return (
    <>
      <ConfigProvider
        button={{
          style: {

            margin: 4,
          },
        }}
      >
        <Popover placement="bottomRight" title={text} content={content}>
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" style={{ backgroundColor: '#f56a00'}} />
         <p className="rol">Andres Arriaga</p>
        </Popover>
      </ConfigProvider>
    </>
  );
};

export default InfoAvatar;

import { Avatar,  ConfigProvider, Popover } from "antd";
import { useContext } from "react";
import Context from "../../context/Context";

const InfoAvatar = () => {

  const {infoUser} = useContext(Context)

  const user = infoUser && infoUser.user ? infoUser.user : null;
  const text = <span className="Your">Your Information</span>;
  const admin = user.id_roles === 1 ? 'admin' : 'manager'
  const content = (
    <div className="popover">
      {user ? (
        <>
          <p> <span className="infoUser">Document:</span> {user.document}</p>
          <p><span className="infoUser">Email:</span> {user.email}</p>
          <p><span className="infoUser">Phone:</span> {user.cellphone}</p>
          <p><span className="infoUser">Address:</span> {user.address}</p>
          <p><span className="infoUser">Age:</span> {user.age}</p>
          <span className="itemAdmin">{admin.toLocaleUpperCase()}</span>
        </>
      ) : (
        <p>Loading...</p>
      )}
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
          {user && <p className="rol">{user.names}</p>}
        </Popover>
      </ConfigProvider>
    </>
  );
};

export default InfoAvatar;

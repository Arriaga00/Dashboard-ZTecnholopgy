import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Logo2 from "../assets/logo2.png";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <>
      <section className="loguin">
        <div className="form">
          <div className="logo">
            <img src={Logo2} alt="logo" />
          </div>
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '25rem',
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item  style={{width : '100%'}}>
              <Input style={{height : '2.5rem' }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" rules={[{required: true,message: "Please input your username!"}]}/>
            </Form.Item>

            <Form.Item style={{width : '100%',}} >
              <Input.Password  style={{height : '2.5rem' , width : '100%' ,}} prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="password" rules={[{required: true,message: "Please input your password!"}]}/>
            </Form.Item>

            <Form.Item >
              <Button
                type="primary"
                htmlType="submit"
                style={{ fontWeight: "bold", paddingInline: "3rem" }}
              >
                Loguin
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Login;

import { Input  } from 'antd';
import { CameraOutlined, HomeOutlined, LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';

const FormUser = ({userRol}) => {

  return (
   <>
    <form action="" className='formCreateUser'>
    <Input placeholder='Document' type='number'/>
    <Input placeholder="Name and LastName" prefix={<UserOutlined />}/>
    <Input placeholder='Email' type='email' prefix={'@'}/>
    <Input placeholder='password' type='password' prefix={<LockOutlined className="site-form-item-icon"/>}/>
    <Input placeholder='Confirm password' type='password' prefix={<LockOutlined className="site-form-item-icon"/>}/>
    <Input placeholder='cellphone' type='text' prefix={<PhoneOutlined />} />
    <Input placeholder='address' type='text' prefix={<HomeOutlined />} />
    <Input placeholder='age' type='number' prefix={<UserOutlined />} />
    <Input placeholder='photo url' type='text' prefix={<CameraOutlined />} />
    <Input placeholder='Rol' type='text' defaultValue={userRol} />
    </form>
   </>
  )
}

export default FormUser
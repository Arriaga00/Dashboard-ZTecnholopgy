import { Input } from "antd"

const FormProduct = () => {
  return (
    <>
    <form action="" className="formProduct">
        <Input name={'productName'} placeholder="Product name" id="productName" type="text" prefix={'📄'}/>
        <Input name={'description'} placeholder="Product description" id="description" type="text" prefix={'📄'} />
        <Input name={'price'} placeholder="Price" id="description" type="number" prefix={'💵'} />
        <Input name={'image'} placeholder="Image url" id="image" type="text" prefix={'📷'} />
    </form>
    </>
  )
}

export default FormProduct
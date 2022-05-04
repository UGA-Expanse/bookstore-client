import {Context, useUserContext} from "../../config/connector";

import Picture from "../../components/Picture"

import {
  PageHeader,
  Checkbox,
  Typography,
  Select,
  Button,
  Divider
} from "antd";

const { CheckboxGroup } = Checkbox;
const { Title, h1 } = Typography;
const { Option } = Select;

const cartItemRowStyle = {
  display: 'flex',
  flexDirection: 'horizontal',
  alignItems: 'center',
  width: '100%'
};
  
const cartItemCheckboxCell = {
  width: '50px',
  textAlign: 'center'
};


const cartItemContentContainer = {
  display: 'flex',
  gap: '20px',
};

const cartItemImageCell = {
  width: '300px',
  textAlign: 'center'
};
const cartItemMetadataCell = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  width: '460px'

};

const cartItemPriceCell = {
  width: '180px',
  textAlign: 'right'
};

const cartContainerHeaderStyle = {
  textAlign: 'end',
  borderBottom: '1px solid #F0F0F0',
  marginBottom: "20px"
};


export const CartRow = ({props: { cart_item_id, quantity, price, book: { title, isbn13, publisher: {publisherName} } }}) => {
    const appContext = useUserContext();
    const { cart, updateCartItem } = appContext;

    function handleQuantityChange(value, options, id) {
        const path = `/cart/${cart.id}/cartitem/${id}?qty=${value}`;
        updateCartItem({path});
    }

    function handleDeleteClick(e, cartItemId) {
      const path = `/cart/${cart.id}/cartitem/${cartItemId}?qty=0`;
      updateCartItem({path});
    }

    console.log("cart_item_id:", cart_item_id);
    
  const view = (
    <>
        <div className="cart-item__row" style={cartItemRowStyle}>
          <div className="cart-item__checkbox-cell" style={cartItemCheckboxCell}>
            <Checkbox value={cart_item_id}/>
          </div>
          <div className="cart-item__image-cell" style={cartItemImageCell}>
            <Picture dim="M" img={`https://covers.openlibrary.org/b/isbn/${isbn13}-M.jpg?default=false`} />
          </div>
          <div className="cart-item__metadata-cell" style={cartItemMetadataCell}>
            <Title level={3}>{title}</Title>
            <div>{publisherName}</div>
            <div>In Stock</div>
            <div>
              <Select defaultValue={quantity} ci={cart_item_id} style={{ width: 120 }} 
                  onChange={(value, options) => handleQuantityChange(value, options, cart_item_id)}>
                <Option key={1} value={1}>Qty: 1</Option>
                <Option key={2} value={2}>Qty: 2</Option>
                <Option key={3} value={3}>Qty: 3</Option>
                <Option key={4} value={4}>Qty: 4</Option>
              </Select>
              <Divider type="vertical" />
              <Button type="primary" shape="round" onClick={(e) => handleDeleteClick(e, cart_item_id)}>Delete</Button>
            </div>
          </div>
          <div className="cart-item__price-cell" style={cartItemPriceCell}>{price}</div>
        </div>
         <div  className="cart-item__row" style={cartItemRowStyle}> <Divider orientation="right"/></div>
         </>
      

  ); // view

  return view;

} // Cart Row

export default CartRow;
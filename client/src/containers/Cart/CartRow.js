import Picture from "../../components/Picture"

import {
  PageHeader,
  Checkbox,
  Typography,
  Select,
  Button
} from "antd";

const { CheckboxGroup } = Checkbox;
const { Title } = Typography;
const { Option } = Select;

const cartItemRowStyle = {
  display: 'flex',
  flexDirection: 'horizontal'
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
  width: '180px',
  textAlign: 'center'
};
const cartItemMetadataCell = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column'

};

const cartItemPriceCell = {
  width: '180px',
  textAlign: 'right'
};


export const CartRow = (props) => {

  const {cartItemId, title, price, qty, book, publisher} =   props;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const view = (

      
        <div className="cart-item__row" style={cartItemRowStyle}>
          <div className="cart-item__checkbox-cell" style={cartItemCheckboxCell}>
            <Checkbox value={cartItemId}/>
          </div>
          <div className="cart-item__image-cell" style={cartItemImageCell}>
            <Picture dim="S" img={`https://covers.openlibrary.org/b/isbn/${book.isbn13}-S.jpg?default=false`} />
          </div>
          <div className="cart-item__metadata-cell" style={cartItemMetadataCell}>
            <Title>{title}</Title>
            <div>{publisher}</div>
            <div>In Stock</div>
            <div>
              <Select defaultValue="{qty}" style={{ width: 120 }} onChange={handleChange}>
                <Option value="1">Qty: 1</Option>
                <Option value="2">Qty: 2</Option>
                <Option value="3">Qty: 3</Option>
                <Option value="4">Qty: 4</Option>
              </Select>
            </div>
          </div>
          <div className="cart-item__price-cell" style={cartItemPriceCell}>{price}</div>
        </div>
      

  ); // view

  return view;

} // Cart Row

export default CartRow;
import React from "react";
import axiosClient from "../config/axios";

const mainStyle = {
  display: 'block',
  textAlign: 'center',
  margin: '0 auto'
}

const boxStyle = {
  paddingTop: "10px",
  fontWeight: "bold"
}

export const Price = props => {
  
  const {bookId} = props;

  const [price, setPrice] = React.useState({});
  
  React.useEffect(() => {
      async function getPrice() {
        const res = await axiosClient.get(`/price/${bookId}`);
        setPrice(res.data);
      }
      getPrice();
        
  }, []);

  const view = (price != null) ? (
    <div style={boxStyle}>
      <p>
        <span aria-hidden="true">
        <span className="a-price-symbol">$</span>
        <span className="a-price-whole">{Number.parseFloat(price.listPrice).toFixed(2)}</span>
        </span>
      </p>
    </div>
  ) : (<></>);

  return view;
}

export default Price;
import { StepBackwardOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';


const BuyNow = props => {

  const {bookId} = props;

    let navigate = useNavigate();

    const handleClick = (e) => {
        navigate("/cart");
    }

    // const btrStyle = {
    //     padding: '10px 50px 30px',
    //     cursor: 'pointer'
    // };

    const view =  (
        <div onClick={handleClick}>
            <span>buy now</span>
        </div>
    ); // view

    return view;

} // AddToCart

export default BuyNow;
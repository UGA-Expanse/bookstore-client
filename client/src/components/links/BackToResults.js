import { StepBackwardOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const BackToResults = props => {

    let navigate = useNavigate();

    const handleClick = (e) => {
        navigate(-1);
    }

    const btrStyle = {
        padding: '10px 50px 30px',
        cursor: 'pointer'
    };

    const view =  (
        <div style={btrStyle} onClick={handleClick}>
            <StepBackwardOutlined />
            <span>back to results</span>
        </div>
    ); // view

    return view;

} // BackToResults

export default BackToResults;
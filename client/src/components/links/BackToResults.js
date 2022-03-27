import { StepBackwardOutlined } from '@ant-design/icons';

const BackToResults = props => {
    const btrStyle = {
        padding: '10px 50px'
    };
    return (
        <div style={btrStyle}>
            <StepBackwardOutlined />
            <span>back to results</span>
        </div>
    ); // return
} // BackToResults

export default BackToResults;
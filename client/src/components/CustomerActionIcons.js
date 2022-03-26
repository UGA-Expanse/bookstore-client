import { Button, Space } from 'antd';
import "./index.css";

export const CustomerActionIcons = props => {
    return(
        <div className={"customer-action-icons-main-div"}>
            <Space>
                <Button type="primary" shape="round"  size={"large"}>
                    Join Now
                </Button>
            </Space>
        </div>
    ); // return
}
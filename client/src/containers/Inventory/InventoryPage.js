import { Card } from 'antd';
import { Card as CC } from '../../components/Card';

export const InventoryPage = () => {
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };

    return (
        <>
            <Card title="Inventory">
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <CC/>
                </Card.Grid>
                <Card.Grid style={gridStyle}><img alt="example" src="images/41QAsBTE9gL._AC_SX368_.jpg" /></Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
        </>
    ); // return
} // export

export default InventoryPage;
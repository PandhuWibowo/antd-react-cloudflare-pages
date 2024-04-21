import { Button, Card, Flex, Image, Typography } from "antd";
import data from "../plantData";

const { Meta } = Card
const ProductList = () => {
    return <>
        <Flex align="center" justify="space-between">
            <Typography.Title level={3} strong className="primary--color">
                My Listings
            </Typography.Title>
            <Button type="link" className="gray--color">View All</Button>
        </Flex>

        <Flex align="center" gap='large'>
            {
                data.map(d => <Card key={data.id} hoverable className="plant-card">
                    <Image src={d.picture} style={{ width: '130px' }} />
                    <Meta title={d.name} style={{ marginTop: '1rem'}} />
                </Card>)
            }
        </Flex>
    </>
};

export default ProductList;

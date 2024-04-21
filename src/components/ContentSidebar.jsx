import { Card, Flex, Typography } from "antd";

const ContentSidebar = () => {
  return (
    <div>
      <Card className="card">
        <Flex vertical gap="large">
          <Typography.Title level={4} strong>
            Today <br /> 5 orders
          </Typography.Title>
          <Typography.Title level={4} strong>
            This Month <br /> 240 orders
          </Typography.Title>
        </Flex>
        {/* <Image
          src="https://png.pngtree.com/png-vector/20201024/ourmid/pngtree-ornamental-plant-in-pot-tray-vector-png-image_2375726.jpg"
          alt="plant"
          style={{
            position: "absolute",
            bottom: -50,
            left: 120,
            height: "300px",
            width: "auto",
          }}
        /> */}
      </Card>
    </div>
  );
};

export default ContentSidebar;

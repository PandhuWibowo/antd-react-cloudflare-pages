import { Avatar, Button, Card, Flex, Tooltip, Typography, Divider } from "antd";

const SellerList = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex vertical="row" gap="small" className="top-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Top Seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>

        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              maxCount={5}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "progress",
              }}
            >
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/funny-asian-woman-wearing-sweater-grimacing-while-posing-front-studio-isolated-beige-wall_171337-92108.jpg?w=1060" />
              </Tooltip>
              <Tooltip title="User 3" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/close-up-young-woman_1048944-20708198.jpg?w=1060" />
              </Tooltip>
              <Tooltip title="User 4" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/red-lips-woman-beauty-face-asian-female-studio-shot_431835-2361.jpg?w=996" />
              </Tooltip>
              <Tooltip title="User 5" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/close-up-beautiful-smiley-woman-posing_23-2149093361.jpg?t=st=1713708265~exp=1713711865~hmac=dbfead90bed65b93624c617ffce0f6a656e25013fbe0cccd93390ddaf722db84&w=740" />
              </Tooltip>
              <Tooltip title="User 6" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/close-up-portrait-woman-with-hydrated-skin_23-2149432199.jpg?t=st=1713708292~exp=1713711892~hmac=da7969c54b630a2d2fee129bbaf2b3aa5df69210d1ff2a3b87b11f5f59bb359c&w=1060" />
              </Tooltip>
              <Tooltip title="User 7" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/close-up-portrait-beautiful-woman_1048944-13001494.jpg?w=1060" />
              </Tooltip>
            </Avatar.Group>

            <Divider type="vertical" className="divider" />

            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1,200 plant sold
              </Typography.Text>
              <Typography.Text type="secondary" strong>
                10 seller
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>

      <Flex vertical="row" gap="small" className="featured-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Featured Seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              maxCount={5}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "progress",
              }}
            >
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/funny-asian-woman-wearing-sweater-grimacing-while-posing-front-studio-isolated-beige-wall_171337-92108.jpg?w=1060" />
              </Tooltip>
              <Tooltip title="User 3" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/close-up-young-woman_1048944-20708198.jpg?w=1060" />
              </Tooltip>
              <Tooltip title="User 4" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/red-lips-woman-beauty-face-asian-female-studio-shot_431835-2361.jpg?w=996" />
              </Tooltip>
              <Tooltip title="User 5" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/close-up-beautiful-smiley-woman-posing_23-2149093361.jpg?t=st=1713708265~exp=1713711865~hmac=dbfead90bed65b93624c617ffce0f6a656e25013fbe0cccd93390ddaf722db84&w=740" />
              </Tooltip>
              <Tooltip title="User 6" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/close-up-portrait-woman-with-hydrated-skin_23-2149432199.jpg?t=st=1713708292~exp=1713711892~hmac=da7969c54b630a2d2fee129bbaf2b3aa5df69210d1ff2a3b87b11f5f59bb359c&w=1060" />
              </Tooltip>
              <Tooltip title="User 7" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/close-up-portrait-beautiful-woman_1048944-13001494.jpg?w=1060" />
              </Tooltip>
            </Avatar.Group>

            <Divider type="vertical" className="divider" />

            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1,530 plant sold
              </Typography.Text>
              <Typography.Text type="secondary" strong>
                13 seller
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default SellerList;

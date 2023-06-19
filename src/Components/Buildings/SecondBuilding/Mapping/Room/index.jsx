import { MainCardWrapper } from "../../../../Generic/styles";
import useQueryHandler from "../../../../../hooks/useQuery";
import { LoadingOutlined, InfoCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { Tooltip } from "antd";

const RoomComponent = ({ values }) => {
  const { clienteValue } = values;
  const { isLoading, data } = useQueryHandler({
    url: `/accomodation/2/user?_id=${clienteValue.userID}`,
    queryKey: `user/${clienteValue.userID}`,
  });
  return (
    <MainCardWrapper.Room color="red">
      {clienteValue.isBooked && (
        <Tooltip title="This place is booked">
          <MainCardWrapper.InfoRoom color="warning">
            <InfoCircleOutlined />
          </MainCardWrapper.InfoRoom>
        </Tooltip>
      )}
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        dayjs(+data.endDate).diff(new Date(), "d")
      )}
    </MainCardWrapper.Room>
  );
};

export default RoomComponent;

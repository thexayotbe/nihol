import { useDispatch } from "react-redux";
import { MainCardWrapper } from "../../../Generic/styles";
import useQueryHandler from "../../../../hooks/useQuery";
import { LoadingOutlined, InfoCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { Tooltip } from "antd";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import { setSelectedUser } from "../../../../redux/userSlice";

const RoomComponent = ({ values }) => {
  const dispatch = useDispatch();
  const { clienteValue, roomID } = values;
  const { isLoading, data } = useQueryHandler({
    url: `/accomodation/${roomID}/user?_id=${clienteValue.userID}`,
    queryKey: `user/${clienteValue.userID}`,
  });
  const clickHandler = () => {
    dispatch(switchUserModalVisibility());
    dispatch(
      setSelectedUser({
        ...values,
        userData: data,
      })
    );
  };
  return (
    <MainCardWrapper.Room color="red" onClick={() => clickHandler()}>
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

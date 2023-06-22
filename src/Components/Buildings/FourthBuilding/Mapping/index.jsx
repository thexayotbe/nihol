import { useTranslation } from "react-i18next";
import { MainCardWrapper } from "../../../Generic/styles";
import { useQueryClient } from "react-query";
import Room from "../../Common/Room";
import EmptyRoom from "../../Common/EmptyRoom";
import BookedRoom from "../../Common/BookedRoom";
import { useDispatch } from "react-redux";
import { switchEmptyModalVisibility } from "../../../../redux/modalSlice";
const typeChecker = ({ clienteValue, roomValue, modalHandler }) => {
  return clienteValue.userID ||
    (clienteValue.userID && clienteValue.isBooked) ? (
    <Room
      key={clienteValue.clienteID}
      values={{ clienteValue, roomValue, roomID: 4 }}
    />
  ) : !clienteValue.isBooked ? (
    <EmptyRoom key={clienteValue.clienteID} onClick={() => modalHandler()} />
  ) : (
    <BookedRoom key={clienteValue.clienteID} />
  );
};
const Maping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/4");
  const dispatch = useDispatch();
  const modalHandler = () => dispatch(switchEmptyModalVisibility());
  return (
    <MainCardWrapper>
      <MainCardWrapper.CardWrapper>
        <MainCardWrapper.RoomsWrapper>
          {data.map((roomValue) => {
            return (
              <MainCardWrapper.RoomWrapper key={roomValue._id}>
                <MainCardWrapper.Title>
                  {roomValue.roomNumber + " " + t("room")}
                </MainCardWrapper.Title>
                <MainCardWrapper.ClientsWrapper>
                  {roomValue.cliente.map((clienteValue) => {
                    return typeChecker({
                      clienteValue,
                      roomValue,
                      modalHandler,
                    });
                  })}
                </MainCardWrapper.ClientsWrapper>
              </MainCardWrapper.RoomWrapper>
            );
          })}
        </MainCardWrapper.RoomsWrapper>
      </MainCardWrapper.CardWrapper>
    </MainCardWrapper>
  );
};

export default Maping;

/* 

<MainCardWrapper.RoomWrapper>
            <MainCardWrapper.Title>1 Room</MainCardWrapper.Title>
            <MainCardWrapper.ClientsWrapper>
              <MainCardWrapper.Room color="red" />
              <MainCardWrapper.Room color="processing" />
            </MainCardWrapper.ClientsWrapper>
          </MainCardWrapper.RoomWrapper>
*/

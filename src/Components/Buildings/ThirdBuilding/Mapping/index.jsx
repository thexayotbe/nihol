import { useTranslation } from "react-i18next";
import { MainCardWrapper } from "../../../Generic/styles";
import { useQueryClient } from "react-query";
import BookedRoom from "./BookedRoom";
import EmptyRoom from "./EmptyRoom";
import Room from "./Room";
import { switchEmptyModalVisibility } from "../../../../redux/modalSlice";
import { useDispatch } from "react-redux";
const typeChecker = ({ clienteValue, roomValue, modalHandler }) => {
  return clienteValue.userID ||
    (clienteValue.userID && clienteValue.isBooked) ? (
    <Room key={clienteValue.clienteID} values={{ clienteValue, roomValue }} />
  ) : !clienteValue.userID ? (
    <BookedRoom key={clienteValue.clienteID} />
  ) : (
    <EmptyRoom key={clienteValue.clienteID} onClick={() => modalHandler()} />
  );
};
const Maping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/3");
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

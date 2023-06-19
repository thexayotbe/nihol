import { useTranslation } from "react-i18next";
import { MainCardWrapper } from "../../../Generic/styles";
import { useQueryClient } from "react-query";
import BookedRoom from "./BookedRoom";
import EmptyRoom from "./EmptyRoom";
import Room from "./Room";
import { useDispatch } from "react-redux";
import { switchEmptyModalVisibility } from "../../../../redux/modalSlice";
const typeChecker = ({ clienteValue, roomValue, modalHandler }) => {
  return clienteValue.userID ||
    (clienteValue.userID && clienteValue.isBooked) ? (
    <Room key={clienteValue.clienteID} values={{ clienteValue, roomValue }} />
  ) : !clienteValue.userID ? (
    <BookedRoom key={clienteValue.clienteID} />
  ) : (
    <EmptyRoom key={clienteValue.clienteID} onClick={() => modalHandler} />
  );
};

const Maping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/2");
  const dispatch = useDispatch();
  const modalHandler = () => dispatch(switchEmptyModalVisibility());
  return (
    <MainCardWrapper>
      <MainCardWrapper.CardWrapper>
        <MainCardWrapper.RoomsWrapper>
          {data?.map((roomValue) => {
            return (
              <MainCardWrapper.RoomWrapper key={roomValue._id}>
                <MainCardWrapper.Title>
                  {roomValue.roomNumber + " " + t("room")}
                </MainCardWrapper.Title>
                <MainCardWrapper.ClientsWrapper>
                  {roomValue.cliente.map((clienteValue) =>
                    typeChecker({ clienteValue, roomValue, modalHandler })
                  )}
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

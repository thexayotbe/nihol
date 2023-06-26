import { useTranslation } from "react-i18next";
import { MainCardWrapper } from "../../../Generic/styles";
import { useQueryClient } from "react-query";
import Room from "../../Common/Room";
import EmptyRoom from "../../Common/EmptyRoom";
import BookedRoom from "../../Common/BookedRoom";
const typeChecker = ({ clienteValue, roomValue, modalHandler }) => {
  return clienteValue.userID ||
    (clienteValue.userID && clienteValue.isBooked) ? (
    <Room
      key={clienteValue.clienteID}
      values={{ clienteValue, roomValue, roomID: 2 }}
    />
  ) : !clienteValue.isBooked ? (
    <EmptyRoom key={clienteValue.clienteID} onClick={() => modalHandler()} />
  ) : (
    <BookedRoom
      key={clienteValue.clienteID}
      values={{ clienteValue, roomValue, roomID: 2 }}
    />
  );
};

const Maping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/2");
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
                    typeChecker({ clienteValue, roomValue })
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

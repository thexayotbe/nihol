import { useTranslation } from "react-i18next";
import { MainCardWrapper } from "../../../Generic/styles";
import { useQueryClient } from "react-query";
const Maping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/4");
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
                    return (
                      <MainCardWrapper.Room
                        color="red"
                        key={clienteValue.clienteID}
                      />
                    );
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

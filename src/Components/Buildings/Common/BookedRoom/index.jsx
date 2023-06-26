import { useDispatch } from "react-redux";
import { MainCardWrapper } from "../../../Generic/styles";
import { setSelectedUser } from "../../../../redux/userSlice";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";

const BookedRoom = ({ values }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(switchUserModalVisibility());
    dispatch(
      setSelectedUser({
        ...values,
      })
    );
  };
  return <MainCardWrapper.Room color="processing" onClick={clickHandler} />;
};

export default BookedRoom;

import { Content } from "../../Generic/styles";
import TitleHandler from "../../Generic/Title";
import { useTranslation } from "react-i18next";
import Maping from "./Mapping";
import { Spin } from "antd";
import useQueryHandler from "../../../hooks/useQuery";
import UserModal from "../Common/UserModal";
import BookedUserAddModal from "../Common/actions/adding/BookedUser";
import AddModal from "../Common/actions/adding/AddUser";
const SecondBuilding = () => {
  const { t } = useTranslation();
  const { isLoading } = useQueryHandler({
    queryKey: "accomodation/2",
    url: "/accomodation/2/room",
  });

  return (
    <Content>
      <AddModal />
      <UserModal />
      <BookedUserAddModal />
      <TitleHandler title={`2 ${t("building")}`} />
      {isLoading ? <Spin /> : <Maping />}
    </Content>
  );
};
export default SecondBuilding;

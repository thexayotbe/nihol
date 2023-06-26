import TitleHandler from "../../Generic/Title";
import { useTranslation } from "react-i18next";
import Maping from "./Mapping";
import { Spin } from "antd";
import { Content } from "../../Generic/styles";
import useQueryHandler from "../../../hooks/useQuery";
import AddModal from "../Common/actions/adding/AddUser";
import UserModal from "../Common/UserModal";
import BookedUserAddModal from "../Common/actions/adding/BookedUser";

const FourtBuilding = () => {
  const { t } = useTranslation();
  const { isLoading } = useQueryHandler({
    queryKey: "accomodation/4",
    url: "/accomodation/4/room",
  });
  return (
    <Content>
      <AddModal />
      <UserModal />
      <BookedUserAddModal />
      <TitleHandler title={`4 ${t("building")}`} />
      {isLoading ? <Spin /> : <Maping />}
    </Content>
  );
};

export default FourtBuilding;

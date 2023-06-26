import { DatePicker, Input } from "antd";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

const useObservingApi = () => {
  const { selectedUser } = useSelector((state) => state.user);
  const { userData } = selectedUser;
  const { RangePicker } = DatePicker;

  const formatData = (value) => {
    const { userData } = selectedUser;
    if (value === "birthDate" || value === "arrivalDate" || value === "endDate")
      return dayjs(Number(userData[value])).format("DD.MM.YYYY");
    else if (value === "hasVoucher")
      return userData[value] ? "Yes" : "Without voucher";
    else if (value === "dayLeft")
      return dayjs(Number(userData.endDate)).diff(new Date(), "d") + 1;
    else if (value === "paymentDifference") {
      return userData.paidByPlasticCard + userData.paidByCash - userData.total;
    } else if (value === "buildingNumber")
      return userData[value].replace("b", "B");
    else return userData[value];
  };

  const filterInput = (name) => {
    if (name === "birthDate") return <DatePicker />;
    else if (name === "dateRange") return <RangePicker />;
    else if (name === "phoneNumber") return <Input addonBefore="+998" />;
    else return <Input />;
  };

  const editingInitialValues = {
    fullName: userData.fullName,
    birthDate: dayjs(Number(userData.birthDate)),
    passportID: userData.passportID,
    phoneNumber: userData.phoneNumber,
    address: userData.address,
    dateRange: [dayjs(+userData.arrivalDate), dayjs(+userData.endDate)],
    dailyPrice: userData.dayCost,
    payCash: userData.paidByCash,
    payCard: userData.paidByPlasticCard,
  };

  return { formatData, editingInitialValues, filterInput };
};

export default useObservingApi;

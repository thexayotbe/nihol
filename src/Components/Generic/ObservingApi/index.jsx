import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";

const useObservingApi = () => {
  const { selectedUser } = useSelector((state) => state.user);
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
  const mapInfo = [
    ["fullName", "Full Name:"],
    ["birthDate", "Birth date:"],
    ["passportID", "Passport Number:"],
    ["phoneNumber", "Phone Number:"],
    ["address", "Address:"],
    ["arrivalDate", "Came date:"],
    ["endDate", "End date:"],
    ["dayLeft", "Remaring Date:"],
    ["dayCost", "Daily Price:"],
    ["total", "Total Price:"],
    ["hasVoucher", "Voucher status:"],
    ["paidByCash", "Paid by Cash:"],
    ["paidByPlasticCard", "Paid by Card:"],
    ["paymentDifference", "Payment difference:"],
    ["buildingNumber", "Building Number:"],
    ["roomNumber", "Room Number:"],
  ];
  return { formatData, mapInfo };
};

export default useObservingApi;

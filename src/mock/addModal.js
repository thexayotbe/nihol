import { DatePicker, Input, Select } from "antd";
const { Option } = Select;
const { RangePicker } = DatePicker;

export const addModalData = [
  { id: "0", name: "fullName", label: "Full Name", element: <Input /> },
  { id: "1", name: "birthDate", label: "Birth Date", element: <DatePicker /> },
  {
    id: "2",
    name: "passportdNumber",
    label: "Passport  Number",
    element: <Input />,
  },
  { id: "3", name: "address", label: "Address", element: <Input /> },
  {
    id: "4",
    name: "phoneNumber",
    label: "Phone Number",
    element: <Input addonBefore="+998" />,
  },
  { id: "5", name: "dataRange", label: "Date Range", element: <RangePicker /> },
  {
    id: "6",
    name: "vouchetCost",
    label: "Voucher cost",
    element: <Input />,
    isVoucher: true,
  },
  {
    id: "7",
    name: "vouchetNumber",
    label: "Voucher number",
    element: <Input />,
    isVoucher: true,
  },
  {
    id: "8",
    name: "placePosition",
    label: "Work place and position",
    element: <Input />,
    isVoucher: true,
  },
  {
    id: "9",
    name: "givenBy",
    label: "Voucher given by (Organization...)",
    element: <Input />,
    isVoucher: true,
  },
  { id: "10", name: "dailyPrice", label: "Daily Price", element: <Input /> },
  {
    id: "11",
    name: "buildingNumber",
    label: "Building Number",
    element: (
      <Select defaultValue={"room2"} allowClear disabled>
        <Option value="room2">Building 2</Option>
        <Option value="room3">Building 3</Option>
        <Option value="room4">Building 4</Option>
      </Select>
    ),
  },
  {
    id: "12",
    name: "roomNumber",
    label: "Room Number",
    element: (
      <Select defaultValue={"1"} allowClear disabled>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
      </Select>
    ),
  },
];

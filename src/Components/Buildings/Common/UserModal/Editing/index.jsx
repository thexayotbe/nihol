import { DatePicker, Form, Input } from "antd";
import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";

const Editing = () => {
  const { RangePicker } = DatePicker;
  const { selectedUser } = useSelector((state) => state.user);
  const userData = selectedUser.userData;
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 32 }}
      layout="vertical"
      initialValues={{
        fullName: userData.fullName,
        birthDate: dayjs(Number(userData.birthDate)),
        passportID: userData.passportID,
        phoneNumber: userData.phoneNumber,
        address: userData.address,
        dateRange: [dayjs(userData.arrivalDate), dayjs(userData.endDate)],
        dailyPrice: userData.dayCost,
        payCash: userData.paidByCash,
        payCard: userData.paidByPlasticCard,
      }}
      autoComplete="off">
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: "Please input your full name!" }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Birth Date"
        name="birthDate"
        rules={[{ required: true, message: "Please select your bithdate!" }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Passport number"
        name="passportID"
        rules={[
          { required: true, message: "Please enter your passport number!" },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone number"
        name="phoneNumber"
        rules={[
          { required: true, message: "Please enter your phone number!" },
        ]}>
        <Input addonBefore="+998" />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please enter your address!" }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Date Range"
        name="dateRange"
        rules={[{ required: true, message: "Please select date range!" }]}>
        <RangePicker format={"DD-MM-YYYY"} />
      </Form.Item>
      <Form.Item
        label="Daily Price"
        name="dailyPrice"
        rules={[{ required: true, message: "Please enter daily price!" }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Pay by cash"
        name="payCash"
        rules={[{ required: true, message: "Please enter amount!" }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Pay by card"
        name="payCard"
        rules={[{ required: true, message: "Please enter amount!" }]}>
        <Input />
      </Form.Item>
    </Form>
  );
};

export default Editing;

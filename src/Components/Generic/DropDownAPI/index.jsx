import React from "react";
import { DropDownItem, DropDownLabel } from "../styles";
import {
  SettingOutlined,
  TranslationOutlined,
  LogoutOutlined,
  ContactsOutlined,
  FileSearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
export const useDropDownApi = () => {
  const { t } = useTranslation();
  return {
    navbarDropDownItems: ({
      settingClickHandler,
      localeClickHandler,
      loginModalClickHandler,
    }) => {
      return [
        {
          label: (
            <DropDownItem onClick={settingClickHandler}>
              <SettingOutlined />
              <DropDownLabel>{t("setting")}</DropDownLabel>
            </DropDownItem>
          ),
          key: "0",
        },
        {
          label: (
            <DropDownItem onClick={localeClickHandler}>
              <TranslationOutlined />
              <DropDownLabel>{t("localing")}</DropDownLabel>
            </DropDownItem>
          ),
          key: "1",
        },

        {
          label: (
            <DropDownItem danger={true} onClick={loginModalClickHandler}>
              <LogoutOutlined />
              <DropDownLabel>{t("log_out")}</DropDownLabel>
            </DropDownItem>
          ),
          key: "3",
        },
      ];
    },
    bookingUserModalItems: () => {
      return [
        {
          label: (
            <DropDownItem>
              <ContactsOutlined /> <DropDownLabel>Activate</DropDownLabel>
            </DropDownItem>
          ),
          key: "0",
        },
        {
          label: (
            <DropDownItem>
              <FileSearchOutlined /> <DropDownLabel>Detailed</DropDownLabel>
            </DropDownItem>
          ),
          key: "1",
        },
        {
          label: (
            <DropDownItem>
              <EditOutlined /> <DropDownLabel>Edit</DropDownLabel>
            </DropDownItem>
          ),
          key: "1",
        },
        {
          label: (
            <DropDownItem danger={true}>
              <DeleteOutlined /> <DropDownLabel>Delete</DropDownLabel>
            </DropDownItem>
          ),
          key: "3",
        },
      ];
    },
  };
};

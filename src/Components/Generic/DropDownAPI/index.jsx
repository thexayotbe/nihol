import React from "react";
import { DropDownItem, DropDownLabel } from "../styles";
import {
  SettingOutlined,
  TranslationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
export const useDropDownApi = () => {
  const { t } = useTranslation();

  return {
    navbarDropDownItems: ({ settingClickHandler, localeClickHandler }) => {
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
            <DropDownItem danger={true}>
              <LogoutOutlined />
              <DropDownLabel>{t("log_out")}</DropDownLabel>
            </DropDownItem>
          ),
          key: "3",
        },
      ];
    },
  };
};

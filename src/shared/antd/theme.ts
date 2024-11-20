import { ThemeConfig } from "antd";

export const themeAntd: ThemeConfig = {
  token: {
    colorPrimary: "#2976EC",
    sizeLG: 58,
  },

  components: {
    Input: {
      colorBgContainer: "#F0F0F0",
      borderRadiusLG: 20,
      paddingBlockLG: 16,
      paddingInlineLG: 16,
      // fontSizeLG: 14,
    },
    Divider: {
      verticalMarginInline: 0,
      textPaddingInline: 0,
    },
    Button: {
      sizeLG: 52,
      defaultBg: "#F6F6F6",
      defaultColor: "#242424",
      defaultBorderColor: "transperent",
    },
    Table: {
      borderRadius: 60,
    },
  },
};

export const secondaryThemeAntd: ThemeConfig = {
  token: {
    colorPrimary: "#FF4A37",
  },
};

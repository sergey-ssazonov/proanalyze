import { ThemeConfig } from "antd";

export const themeAntd: ThemeConfig = {
  token: {
    colorPrimary: "#2976EC",
    sizeLG: 58,

    controlHeight: 40,
    controlHeightLG: 46,
    fontSize: 16,
    // screenLG: 1024,
  },

  components: {
    Input: {
      colorBgContainer: "#F6F6F6",
      colorBorder: "#fff",
      borderRadiusLG: 16,
      fontSizeLG: 16,
      paddingLG: 16,

      // paddingBlockLG: 16,
      // paddingInlineLG: 16,
      // fontSizeLG: 14,
    },
    Select: {
      colorBgContainer: "#F6F6F6",
      colorBorder: "#fff",
      borderRadiusLG: 16,
      fontSizeLG: 16,
      hoverBorderColor: "#2976EC",

      paddingLG: 16,
      // paddingBlockLG: 16,
      // paddingInlineLG: 16,
    },
    Divider: {
      verticalMarginInline: 0,
      textPaddingInline: 0,
    },
    Button: {
      defaultBg: "#F6F6F6",
      defaultColor: "#242424",
      defaultBorderColor: "transperent",
    },
    Table: {
      borderRadius: 60,
    },
    Collapse: {
      // headerPadding: 10,
      borderRadius: 25,
    },
   
  },
};

export const secondaryThemeAntd: ThemeConfig = {
  token: {
    colorPrimary: "#FF4A37",
    controlHeightSM: 20,
  },
  components: {
    Button: {
      contentFontSizeSM: 10,
    },
  },
};

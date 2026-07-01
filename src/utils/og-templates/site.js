import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

// 无记 · 宣纸 + 朱砂
const PAPER = "#faf7f0";
const INK = "#131110";
const VERMILION = "#a8311a";

export default async () => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          background: PAPER,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
        },
        children: [
          // 朱砂竖线（左）
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: 60,
                bottom: 60,
                left: 60,
                width: 3,
                background: VERMILION,
                opacity: 0.7,
              },
            },
          },
          // 内框
          {
            type: "div",
            props: {
              style: {
                border: `3px solid ${INK}`,
                background: PAPER,
                borderRadius: 4,
                display: "flex",
                justifyContent: "center",
                margin: "2.5rem",
                width: "88%",
                height: "80%",
              },
              children: {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    margin: "32px",
                    width: "90%",
                    height: "90%",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "90%",
                          maxHeight: "90%",
                          overflow: "hidden",
                          textAlign: "center",
                        },
                        children: [
                          {
                            type: "p",
                            props: {
                              style: {
                                fontSize: 96,
                                fontWeight: 700,
                                letterSpacing: "0.2em",
                                color: INK,
                                margin: 0,
                              },
                              children: SITE.title,
                            },
                          },
                          {
                            type: "div",
                            props: {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                marginTop: 24,
                              },
                              children: [
                                {
                                  type: "div",
                                  props: {
                                    style: {
                                      width: 60,
                                      height: 2,
                                      background: VERMILION,
                                      marginRight: 16,
                                    },
                                  },
                                },
                                {
                                  type: "p",
                                  props: {
                                    style: {
                                      fontSize: 24,
                                      color: INK,
                                      opacity: 0.7,
                                      margin: 0,
                                    },
                                    children: SITE.desc,
                                  },
                                },
                                {
                                  type: "div",
                                  props: {
                                    style: {
                                      width: 60,
                                      height: 2,
                                      background: VERMILION,
                                      marginLeft: 16,
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          marginBottom: 8,
                          fontSize: 22,
                        },
                        children: [
                          {
                            type: "div",
                            props: {
                              style: {
                                background: VERMILION,
                                color: PAPER,
                                padding: "6px 12px",
                                fontWeight: 700,
                                borderRadius: 2,
                              },
                              children: "無",
                            },
                          },
                          {
                            type: "span",
                            props: {
                              style: {
                                overflow: "hidden",
                                fontWeight: 700,
                                color: INK,
                              },
                              children: new URL(SITE.website).hostname,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(SITE.title + SITE.desc + SITE.website),
    }
  );
};


import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

const PAPER = "#faf7f0";
const INK = "#131110";
const VERMILION = "#a8311a";

export default async post => {
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
                      type: "p",
                      props: {
                        style: {
                          fontSize: 64,
                          fontWeight: 700,
                          maxHeight: "78%",
                          overflow: "hidden",
                          color: INK,
                          lineHeight: 1.3,
                        },
                        children: post.data.title,
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
                                display: "flex",
                                alignItems: "center",
                              },
                              children: [
                                {
                                  type: "div",
                                  props: {
                                    style: {
                                      background: VERMILION,
                                      color: PAPER,
                                      padding: "6px 10px",
                                      fontWeight: 700,
                                      borderRadius: 2,
                                      marginRight: 12,
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
                                    children: post.data.author,
                                  },
                                },
                              ],
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
                              children: SITE.title,
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
      fonts: await loadGoogleFonts(
        post.data.title + post.data.author + SITE.title
      ),
    }
  );
};

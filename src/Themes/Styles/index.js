const position = {
  relative: {
    position: "relative",
  },

  absolute: {
    position: "absolute",
  },

  absoluteFill: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  absoluteTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },

  absoluteLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
  },

  absoluteRight: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
  },

  absoluteBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },

  absoluteTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  absoluteTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
  },

  absoluteBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },

  absoluteBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
};

const text = {
  textCenter: {
    textAlign: "center",
  },

  textJustify: {
    textAlign: "justify",
  },

  textLeft: {
    textAlign: "left",
  },

  textRight: {
    textAlign: "right",
  },
};

const container = {
  center: {
    alignItems: "center",
    justifyContent: "center",
  },

  fill: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
  },

  rowReverse: {
    flexDirection: "row-reverse",
  },

  col: {
    flexDirection: "column",
  },

  colReverse: {
    flexDirection: "column-reverse",
  },

  mainStart: {
    justifyContent: "flex-start",
  },

  mainCenter: {
    justifyContent: "center",
  },

  mainEnd: {
    justifyContent: "flex-end",
  },

  mainSpaceBetween: {
    justifyContent: "space-between",
  },

  mainSpaceAround: {
    justifyContent: "space-around",
  },

  rowMain: {
    flexDirection: "row",
    justifyContent: "center",
  },

  rowCross: {
    flexDirection: "row",
    alignItems: "center",
  },

  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  colMain: {
    flexDirection: "column",
    justifyContent: "center",
  },

  colCross: {
    flexDirection: "column",
    alignItems: "center",
  },

  colCenter: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  fillCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  fillRow: {
    flex: 1,
    flexDirection: "row",
  },

  fillRowReverse: {
    flex: 1,
    flexDirection: "row-reverse",
  },

  fillRowMain: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },

  fillRowCross: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  fillRowCenter: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  fillCol: {
    flex: 1,
    flexDirection: "column",
  },

  fillColReverse: {
    flex: 1,
    flexDirection: "column-reverse",
  },

  fillColMain: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  fillColCross: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  fillColCenter: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export { container, text, position };

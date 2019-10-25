import moment from "moment";
import "moment/locale/tr";

moment.updateLocale("tr", {
  relativeTime: {
    past: "%s",
    ss: "%d saniye",
    m: "1 dakika",
    mm: "%d dakika",
    h: "1 saat",
    hh: "%d saat",
    d: "1 gün",
    dd: "%d gün",
    M: "1 ay",
    MM: "%d ay",
    y: "1 yıl",
    yy: "%d yıl",
  },
});

export default moment;

import $ from "jquery";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
new AirDatepicker("#el", {
  dateFormat(date) {
    return date.toLocaleString("ja", {
      year: "numeric",
      day: "2-digit",
      month: "long",
    });
  },
});

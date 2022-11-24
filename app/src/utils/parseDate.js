import moment from "moment";

export default function parseDate(dateString) {
  return moment(dateString).format("DD-MMM-YY");
}

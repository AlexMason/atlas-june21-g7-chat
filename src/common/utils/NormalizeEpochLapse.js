/**
 * Takes a Unix epoch timestamp and converts it to a human friendly time lapse
 * such as "a min", "17m", "2h", "1w".
 * @param {number} epochTimestamp A UNIX epoch timestamp
 * @returns {Array} An array consisting of two values, the first being a human friendly normalized value, the second being a date.
 */
export default function (epochTimestamp) {
  let lapse = "";
  let seconds, minutes, hours, days, months, years;
  seconds = minutes = hours = days = "";

  return [lapse, formattedTimestamp(epochTimestamp)];
}

function formattedTimestamp(epochTimestamp) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let timestamp = new Date(epochTimestamp * 1000);

  let day = days[timestamp.getDay()];
  let month = months[timestamp.getMonth()];
  let date = timestamp.getDate();
  let year = timestamp.getFullYear();

  let hours =
    timestamp.getHours() > 11
      ? timestamp.getHours() - 12
      : timestamp.getHours();
  let minutes =
    timestamp.getMinutes() < 10
      ? "0" + timestamp.getMinutes()
      : timestampe.getMinutes();
  let seconds =
    timestamp.getSeconds() < 10
      ? "0" + timestamp.getSeconds()
      : timestamp.getSeconds();
  let ampm = timestamp.getHours() < 12 ? "AM" : "PM";

  return `${day}, ${month} ${date}, ${year} @ ${hours}:${minutes}:${seconds} ${ampm}`;
}

console.log(formattedTimestamp(1628208237));

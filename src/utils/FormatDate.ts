
const currentDate = () => {
    const date = new Date();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getMonth()]; // Get the month as a string

    const day = date.getDate(); // Get the day of the month

    const year = date.getFullYear(); // Get the full year

    let hours = date.getHours(); // Get the hours (in 24-hour format)
    let amPm = 'am'; // Initialize AM/PM indicator

    // Convert hours to 12-hour format and determine AM/PM
    if (hours > 12) {
      hours -= 12;
      amPm = 'pm';
    }

    const minutes = date.getMinutes(); // Get the minutes

    // Create the formatted date string
    const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes.toString().padStart(2, '0')} ${amPm}`;
    // console.log(formattedDate);
    return formattedDate;
};

export default currentDate;
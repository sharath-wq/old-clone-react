function calculateDate(timestamp) {
    const date = new Date(timestamp);

    // Array of month abbreviations
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const monthAbbreviation = months[date.getMonth()]; // Get the month abbreviation
    const dayOfMonth = date.getDate(); // Get the day of the month

    return `${monthAbbreviation} ${dayOfMonth}`;
}

export default calculateDate;

// code your solution here
function yearWin(recordYear) {
    if (recordYear.result == "W") {
        return true;
    }
    return false;
}
function superbowlWin(records) {

    if (records.find(yearWin)) {
        return records.find(yearWin).year;
    }
    return undefined;
}record.result
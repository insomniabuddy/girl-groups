const ASC_ORDER = 'asc';
const DESC_ORDER = 'desc';

const defaultPage = 1;
const defaultResults = 10;

const buildStars = (counter) => {
    var heart = '&#129505;';
    var star = '&#11088;';
    var fives = Math.floor(counter / 5);
    var ones = counter % 5;
    var string = '';

    if (fives > 0) {
        for (var i = 0; i < fives; i++) {
            string += heart;
        }
    }
    if (ones > 0) {
        for (var i = 0; i < ones; i++) {
            string += star;
        }
    }

    return string;
};

const strDateToNumber = (strDate) => {
    var split = strDate.split("-");
    var year = parseInt(split[0], 10);
    var month = parseInt(split[1], 10);
    var day = parseInt(split[2], 10);
    return year * 10000 + month * 100 + day;
};

const strTimeToNumber = (strTime) => {
    var split = strTime.split(":");
    var minute = parseInt(split[0], 10);
    var hour = parseInt(split[1], 10);
    return hour * 100 + minute;
};

const resetPagination = () => {
    $('#page-txt').val(defaultPage);
    $('#results-per-page-txt').val(defaultResults);
};
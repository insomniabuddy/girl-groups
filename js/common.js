if (!window.IdolCommon) {
    window.IdolCommon = {};
}

$(function () {
    $('#last-updated').text('Last updated: 17/03/2023');
});

IdolCommon.getTableCss = function (count) {
    if (count > 10) {
        return 'table-danger';
    } else if (count > 5 && count <= 10) {
        return 'table-warning';
    } else {
        return 'table-success';
    }
};

IdolCommon.getStars = function (count) {
    var heart = '&#129505;';
    var star = '&#11088;';
    var fives = Math.floor(count / 5);
    var ones = count % 5;
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

IdolCommon.onlyNumber = function (event) {
    var asciiCode = event.which ? event.which : event.keyCode;
    if (asciiCode > 31 && (asciiCode < 48 || asciiCode > 57)) {
        return false;
    }
    return true;
};

IdolCommon.getZodiacSign = function (zodiac) {
    switch (zodiac) {
        case 1:
            return '&#9800';
        case 2:
            return '&#9801';
        case 3:
            return '&#9802';
        case 4:
            return '&#9803';
        case 5:
            return '&#9804';
        case 6:
            return '&#9805';
        case 7:
            return '&#9806';
        case 8:
            return '&#9807';
        case 9:
            return '&#9808';
        case 10:
            return '&#9809';
        case 11:
            return '&#9810';
        case 12:
            return '&#9811';
        default:
            return '';
    }
};

IdolCommon.getChineseZodiacSign = function (zodiac) {
    switch (zodiac) {
        case 1:
            return '&#128000';
        case 2:
            return '&#128002';
        case 3:
            return '&#128005';
        case 4:
            return '&#128007';
        case 5:
            return '&#128009';
        case 6:
            return '&#128013';
        case 7:
            return '&#128014';
        case 8:
            return '&#128016';
        case 9:
            return '&#128018';
        case 10:
            return '&#128019';
        case 11:
            return '&#128021';
        case 12:
            return '&#128022';
        default:
            return '';
    }
};

IdolCommon.dateData = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60
};

IdolCommon.intToDate = function (date, hour) {
    return new Date(Math.trunc(date / 10000), (Math.trunc(date / 100) % 100) - 1, date % 100, Math.trunc(hour / 100), hour % 100);
};

IdolCommon.dateDifference = function (dateStartStr, hourStartStr, dateEndStr, hourEndStr) {
    var dateStartInt = parseInt(dateStartStr);
    var hourStartInt = parseInt(hourStartStr);
    var dateEndInt = parseInt(dateEndStr);
    var hourEndInt = parseInt(hourEndStr);

    var dateStart = IdolCommon.intToDate(dateStartInt, hourStartInt);
    var dateEnd = IdolCommon.intToDate(dateEndInt, hourEndInt);

    var result = {};
    var difference = Math.abs(dateEnd - dateStart) / 1000;

    Object.keys(IdolCommon.dateData).forEach(function (key) {
        result[key] = Math.floor(difference / IdolCommon.dateData[key]);
        difference -= result[key] * IdolCommon.dateData[key];
    });

    var string = '';
    if (result['year'] > 0) {
        string += result['year'] + ' years, ';
        string += result['month'] + ' months, ';
        string += result['day'] + ' days, ';
        string += result['hour'] + ' hours, ';
        string += result['minute'] + ' minutes';
    } else if (result['month'] > 0) {
        string += result['month'] + ' months, ';
        string += result['day'] + ' days, ';
        string += result['hour'] + ' hours, ';
        string += result['minute'] + ' minutes';
    } else if (result['day'] > 0) {
        string += result['day'] + ' days, ';
        string += result['hour'] + ' hours, ';
        string += result['minute'] + ' minutes';
    } else if (result['hour'] > 0) {
        string += result['hour'] + ' hours, ';
        string += result['minute'] + ' minutes';
    } else {
        string += result['minute'] + ' minutes';
    }

    return string;
};

IdolCommon.getBothDates = function (perDateStr, perHourStr, gerDateStr, gerHourStr) {
    return perDateStr + ' ' + perHourStr + ' (GMT-5)<br/>' + gerDateStr + ' ' + gerHourStr + ' (GMT+2)';
};

IdolCommon.calculateGap = function (prevDate, currDate) {
    var prevArr = prevDate.split('_');
    var currArr = currDate.split('_');
    return IdolCommon.dateDifference(prevArr[0], prevArr[1], currArr[0], currArr[1]);
};

IdolCommon.getTimePassed = function (perDate, perHour, gerDate, gerHour) {
    var date = new Date();
    var theDate = perDate;
    var theHour = perHour;
    if (!date.toString().includes('GMT-0500')) {
        theDate = gerDate;
        theHour = gerHour;
    }
    var currentDate = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    var currentHour = date.getHours() * 100 + date.getMinutes();

    var prevDate = theDate + '_' + theHour;
    var todayDate = currentDate + '_' + currentHour;

    return IdolCommon.calculateGap(prevDate, todayDate);
};

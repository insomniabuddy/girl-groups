if (!window.IdolCommon) {
    window.IdolCommon = {};
}

$(function () {
    $('#last-updated').text('Last updated: 17/10/2022');
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
            return '♈️';
        case 2:
            return '♉️';
        case 3:
            return '♊️';
        case 4:
            return '♋️';
        case 5:
            return '♌️';
        case 6:
            return '♍️';
        case 7:
            return '♎️';
        case 8:
            return '♏️';
        case 9:
            return '♐️';
        case 10:
            return '♑️';
        case 11:
            return '♒️';
        case 12:
            return '♓️';
        default:
            return '';
    }
};
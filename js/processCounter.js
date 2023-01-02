var currentCounter = [];

artistNameDir = 'asc';
groupNameDir = 'asc';
counter1Dir = 'asc';
counter2Dir = 'asc';
counterTotalDir = 'asc';
timePassedDir = 'asc';

if (!window.IdolCounters) {
    window.IdolCounters = {};
}

$(function () {
    $('.input-number').keypress(IdolCommon.onlyNumber);

    $('#btn-search').click(IdolCounters.search);
    $('#btn-clear').click(IdolCounters.clear);

    $('#obArtistName').click(IdolCounters.orderByArtist);
    $('#obGroupName').click(IdolCounters.orderByGroup);
    $('#obCounter1').click(IdolCounters.orderByCounter1);
    $('#obCounter2').click(IdolCounters.orderByCounter2);
    $('#obCounterTotal').click(IdolCounters.orderByCounterTotal);
    $('#obTimePassed').click(IdolCounters.orderByTimePassed);

    IdolCounters.populate();
});

IdolCounters.populate = function () {
    if (!currentCounter || currentCounter.length == 0) {
        currentCounter = counter;
    }

    var $tbody = $('#counters-tbody');
    var $tfoot = $('#counters-tfoot');

    var total1 = 0;
    var total2 = 0;
    var total = 0;

    var string = '';
    currentCounter.forEach(function (elem) {
        string += '<tr class="' + IdolCommon.getTableCss(elem.countTotal) + '">';
        string += '<td class="text-center"><img src="img/' + elem.imageName + '.jpg" alt="' + elem.imageName + '" /></td>';
        string += '<td>' + elem.artistName + '</td>';
        string += '<td>' + elem.groupName + '</td>';
        string += '<td class="text-end">' + IdolCommon.getStars(elem.count1) + '&nbsp;&nbsp;&nbsp;' + '<b>' + elem.count1 + '</b>' + '</td>';
        string += '<td class="text-end">' + IdolCommon.getStars(elem.count2) + '&nbsp;&nbsp;&nbsp;' + '<b>' + elem.count2 + '</b>' + '</td>';
        string += '<td class="text-end">' + IdolCommon.getStars(elem.countTotal) + '&nbsp;&nbsp;&nbsp;' + '<b>' + elem.countTotal + '</b>' + '</td>';
        string += '<td class="text-center last-date">' + IdolCommon.getBothDates(elem.perDateStr, elem.perHourStr, elem.gerDateStr, elem.gerHourStr) + '</td>';
        string += '<td class="text-center last-date">' + IdolCommon.getTimePassed(elem.perDate, elem.perHour, elem.gerDate, elem.getHour) + '</td>';
        string += '</tr>';

        total1 += elem.count1;
        total2 += elem.count2;
        total += elem.countTotal;
    });

    $tbody.html(string);

    $tfoot.html('<tr class="table-dark"><td></td><td></td><td></td><td class="text-end">' + total1 + '</td><td class="text-end">' + total2 + '</td><td class="text-end">' + total + '</td><td></td><td></td></tr>');
};

IdolCounters.clear = function () {
    $('.form-control').val('');
    artistNameDir = 'asc';
    groupNameDir = 'asc';
    counter1Dir = 'asc';
    counter2Dir = 'asc';
    counterTotalDir = 'asc';
    IdolCounters.orderByArtist();
};

IdolCounters.search = function () {
    var artistName = $('#artistName').val();
    var groupName = $('#groupName').val();
    var count1Start = $('#count1Start').val();
    var count1End = $('#count1End').val();
    var count2Start = $('#count2Start').val();
    var count2End = $('#count2End').val();
    var countTotalStart = $('#countTotalStart').val();
    var countTotalEnd = $('#countTotalEnd').val();

    currentCounter = [];

    var found = IdolCounters.searchByArtist(artistName);
    if (found) {
        found = IdolCounters.searchByGroup(groupName);
        if (found) {
            found = IdolCounters.searchByCounter1(count1Start, count1End);
            if (found) {
                found = IdolCounters.searchByCounter2(count2Start, count2End);
                if (found) {
                    found = IdolCounters.searchByCounterTotal(countTotalStart, countTotalEnd);
                }
            }
        }
    }

    IdolCounters.populate();
};

IdolCounters.searchByArtist = function (artistName) {
    if (!currentCounter || currentCounter.length == 0) {
        currentCounter = counter;
    }

    var result = [];
    currentCounter.forEach(function (elem) {
        if (elem.artistName.toUpperCase().includes(artistName.toUpperCase())) {
            result.push(elem);
        }
    });
    currentCounter = result;

    return currentCounter && currentCounter.length > 0;
};

IdolCounters.searchByGroup = function (groupName) {
    if (!currentCounter || currentCounter.length == 0) {
        currentCounter = counter;
    }

    var result = [];
    currentCounter.forEach(function (elem) {
        if (elem.groupName.toUpperCase().includes(groupName.toUpperCase())) {
            result.push(elem);
        }
    });
    currentCounter = result;

    return currentCounter && currentCounter.length > 0;
};

IdolCounters.searchByCounter1 = function (start, end) {
    start = start ? start : 0;
    end = end ? end : 999;
    if (!currentCounter || currentCounter.length == 0) {
        currentCounter = counter;
    }

    var result = [];
    currentCounter.forEach(function (elem) {
        if (elem.count1 >= start && elem.count1 <= end) {
            result.push(elem);
        }
    });
    currentCounter = result;

    return currentCounter && currentCounter.length > 0;
};

IdolCounters.searchByCounter2 = function (start, end) {
    start = start ? start : 0;
    end = end ? end : 999;
    if (!currentCounter || currentCounter.length == 0) {
        currentCounter = counter;
    }

    var result = [];
    currentCounter.forEach(function (elem) {
        if (elem.count2 >= start && elem.count2 <= end) {
            result.push(elem);
        }
    });
    currentCounter = result;

    return currentCounter && currentCounter.length > 0;
};

IdolCounters.searchByCounterTotal = function (start, end) {
    start = start ? start : 0;
    end = end ? end : 999;
    if (!currentCounter || currentCounter.length == 0) {
        currentCounter = counter;
    }

    var result = [];
    currentCounter.forEach(function (elem) {
        if (elem.countTotal >= start && elem.countTotal <= end) {
            result.push(elem);
        }
    });
    currentCounter = result;

    return currentCounter && currentCounter.length > 0;
};

IdolCounters.orderByArtist = function () {
    if (!currentCounter || currentCounter.length == 0) {
        currentCounter = counter;
    }

    currentCounter.sort((a, b) => {
        var artistA = a.artistName.toUpperCase();
        var artistB = b.artistName.toUpperCase();
        if (artistNameDir == 'asc') {
            if (artistA < artistB) {
                return -1;
            } else if (artistA > artistB) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (artistA < artistB) {
                return 1;
            } else if (artistA > artistB) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    artistNameDir = artistNameDir == 'asc' ? 'desc' : 'asc';

    IdolCounters.populate();
};

IdolCounters.orderByGroup = function () {
    if (!currentCounter || currentCounter.length == 0) {
        currentCounter = counter;
    }

    currentCounter.sort((a, b) => {
        var groupA = a.groupName.toUpperCase();
        var groupB = b.groupName.toUpperCase();
        if (groupNameDir == 'asc') {
            if (groupA < groupB) {
                return -1;
            } else if (groupA > groupB) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (groupA < groupB) {
                return 1;
            } else if (groupA > groupB) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    groupNameDir = groupNameDir == 'asc' ? 'desc' : 'asc';

    IdolCounters.populate();
};

IdolCounters.orderByCounter1 = function () {
    if (!currentCounter || currentCounter.length == 0) {
        currentCounter = counter;
    }

    currentCounter.sort((a, b) => counter1Dir == 'asc' ? a.count1 - b.count1 : b.count1 - a.count1);

    counter1Dir = counter1Dir == 'asc' ? 'desc' : 'asc';

    IdolCounters.populate();
};

IdolCounters.orderByCounter2 = function () {
    if (!currentCounter || currentCounter.length == 0) {
        currentCounter = counter;
    }

    currentCounter.sort((a, b) => counter2Dir == 'asc' ? a.count2 - b.count2 : b.count2 - a.count2);

    counter2Dir = counter2Dir == 'asc' ? 'desc' : 'asc';

    IdolCounters.populate();
};

IdolCounters.orderByCounterTotal = function () {
    if (!currentCounter || currentCounter.length == 0) {
        currentCounter = counter;
    }

    currentCounter.sort((a, b) => counterTotalDir == 'asc' ? a.countTotal - b.countTotal : b.countTotal - a.countTotal);

    counterTotalDir = counterTotalDir == 'asc' ? 'desc' : 'asc';

    IdolCounters.populate();
};

IdolCounters.orderByTimePassed = function() {
    if (!currentCounter || currentCounter.length == 0) {
        currentCounter = counter;
    }

    currentCounter.sort((a, b) => timePassedDir == 'asc' ? a.timePassedOrder - b.timePassedOrder : b.timePassedOrder - a.timePassedOrder);

    timePassedDir = timePassedDir == 'asc' ? 'desc' : 'asc';

    IdolCounters.populate();
};
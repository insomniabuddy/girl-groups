var currentHistory = [];

artistNameDir = 'asc';
groupNameDir = 'asc';
perDateDir = 'asc';
personDir = 'asc';

if (!window.IdolHistory) {
    window.IdolHistory = {};
}

$(function () {
    $('.input-number').keypress(IdolCommon.onlyNumber);

    $('#btn-search').click(IdolHistory.search);
    $('#btn-clear').click(IdolHistory.clear);

    $('#obArtistName').click(IdolHistory.orderByArtist);
    $('#obGroupName').click(IdolHistory.orderByGroup);
    $('#obPerDate').click(IdolHistory.orderByPerDate);
    $('#obPerson').click(IdolHistory.orderByPerson);

    IdolHistory.populate();
});

IdolHistory.populate = function () {
    if (!currentHistory || currentHistory.length == 0) {
        currentHistory = historyDates;
    }

    var $tbody = $('#history-tbody');
    var $tfoot = $('#history-tfoot');

    var total1 = 0, total2 = 0, total = 0;

    var string = '';
    var prevDate = '';
    var first = true;
    currentHistory.forEach(function (elem) {
        string += '<tr class="table-' + (elem.person == 1 ? 'info' : 'success') + '">';
        string += '<td class="text-end">' + elem.historyId + '.</td>';
        string += '<td class="text-center"><img src="img/' + elem.imageName + '.jpg" alt="' + elem.imageName + '" /></td>';
        string += '<td>' + elem.artistName + '</td>';
        string += '<td>' + elem.groupName + '</td>';
        string += '<td class="text-center">' + elem.perDateStr + '</td>';
        string += '<td class="text-center">' + elem.perHourStr + '</td>';
        string += '<td class="text-center">' + elem.gerDateStr + '</td>';
        string += '<td class="text-center">' + elem.gerHourStr + '</td>';
        string += '<td class="text-center">' + elem.person + '</td>';

        if (first) {
            first = false;
            string += '<td class="text-center">---</td>';
        } else {
            var gap = IdolCommon.calculateGap(prevDate, elem.perDate + '_' + elem.perHour);
            string += '<td class="text-center">' + gap + '</td>';
        }

        prevDate = elem.perDate + '_' + elem.perHour;

        total1 = elem.person == 1 ? total1 + 1 : total1;
        total2 = elem.person == 2 ? total2 + 1 : total2;
        total++;
    });

    $tbody.html(string);
    $tfoot.html('<tr class="table-dark"><td colspan="6"></td><td colspan="4" class="text-end">Person1 : ' + total1 + '&nbsp;&nbsp;&nbsp;Person2 : ' + total2 + '&nbsp;&nbsp;&nbsp;Total : ' + total + '</td></tr>');
};

IdolHistory.clear = function () {
    $('.form-control').val('');
    $('.form-select').val('-1');
    $('#gmt').val('1');
    artistNameDir = 'asc';
    groupNameDir = 'asc';
    perDateDir = 'asc';
    personDir = 'asc';
    IdolHistory.orderByArtist();
};

IdolHistory.search = function () {
    var artistName = $('#artistName').val();
    var groupName = $('#groupName').val();
    var perDateStart = $('#perDateStart').val();
    var perDateEnd = $('#perDateEnd').val();
    var perHourStart = $('#perHourStart').val();
    var perHourEnd = $('#perHourEnd').val();
    var person = $('#person').val();
    var gmt = $('#gmt').val();

    currentHistory = [];

    var found = IdolHistory.searchByArtist(artistName);
    if (found) {
        found = IdolHistory.searchByGroup(groupName);
        if (found) {
            found = IdolHistory.searchByPerson(person);
            if (found) {
                found = IdolHistory.searchByPerDate(perDateStart, perDateEnd, gmt);
                if (found) {
                    found = IdolHistory.searchByPerHour(perHourStart, perHourEnd, gmt);
                }
            }
        }
    }

    IdolHistory.populate();
};

IdolHistory.searchByArtist = function (artistName) {
    if (!currentHistory || currentHistory.length == 0) {
        currentHistory = historyDates;
    }

    var result = [];
    currentHistory.forEach(function (elem) {
        if (elem.artistName.toUpperCase().includes(artistName.toUpperCase())) {
            result.push(elem);
        }
    });
    currentHistory = result;

    return currentHistory && currentHistory.length > 0;
};

IdolHistory.searchByGroup = function (groupName) {
    if (!currentHistory || currentHistory.length == 0) {
        currentHistory = historyDates;
    }

    var result = [];
    currentHistory.forEach(function (elem) {
        if (elem.groupName.toUpperCase().includes(groupName.toUpperCase())) {
            result.push(elem);
        }
    });
    currentHistory = result;

    return currentHistory && currentHistory.length > 0;
};

IdolHistory.searchByPerDate = function (start, end, gmt) {
    start = start ? start : 19000101;
    end = end ? end : 20991212;
    if (!currentHistory || currentHistory.length == 0) {
        currentHistory = historyDates;
    }

    var result = [];
    currentHistory.forEach(function (elem) {
        if (gmt == 1) {
            if (elem.perDate >= start && elem.perDate <= end) {
                result.push(elem);
            }
        }
        if (gmt == 2) {
            if (elem.gerDate >= start && elem.gerDate <= end) {
                result.push(elem);
            }
        }
    });
    currentHistory = result;

    return currentHistory && currentHistory.length > 0;
};

IdolHistory.searchByPerHour = function (start, end, gmt) {
    start = start ? start : 0000;
    end = end ? end : 2359;
    if (!currentHistory || currentHistory.length == 0) {
        currentHistory = historyDates;
    }

    var result = [];
    currentHistory.forEach(function (elem) {
        if (gmt == 1) {
            if (elem.perHour >= start && elem.perHour <= end) {
                result.push(elem);
            }
        }
        if (gmt == 2) {
            if (elem.gerHour >= start && elem.gerHour <= end) {
                result.push(elem);
            }
        }
    });
    currentHistory = result;

    return currentHistory && currentHistory.length > 0;
};

IdolHistory.searchByPerson = function (person) {
    if (!currentHistory || currentHistory.length == 0) {
        currentHistory = historyDates;
    }

    if (person != -1) {
        var result = [];
        currentHistory.forEach(function (elem) {
            if (elem.person == person) {
                result.push(elem);
            }
        });
        currentHistory = result;
    }

    return currentHistory && currentHistory.length > 0;
};

IdolHistory.orderByArtist = function () {
    if (!currentHistory || currentHistory.length == 0) {
        currentHistory = historyDates;
    }

    currentHistory.sort((a, b) => {
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

    IdolHistory.populate();
};

IdolHistory.orderByGroup = function () {
    if (!currentHistory || currentHistory.length == 0) {
        currentHistory = historyDates;
    }

    currentHistory.sort((a, b) => {
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

    IdolHistory.populate();
};

IdolHistory.orderByPerDate = function () {
    if (!currentHistory || currentHistory.length == 0) {
        currentHistory = historyDates;
    }

    //currentHistory.sort((a, b) => perDateDir == 'asc' ? a.perDate - b.perDate : b.perDate - a.perDate);

    currentHistory.sort((a, b) => {
        var perDateA = a.perDate;
        var perDateB = b.perDate;
        var idA = a.historyId;
        var idB = b.historyId;
        if (perDateDir == 'asc') {
            if (perDateA == perDateB) {
                return idA - idB;
            } else {
                return perDateA - perDateB;
            }
        } else {
            if (perDateA == perDateB) {
                return idB - idA;
            } else {
                return perDateB - perDateA;
            }
        }
    });

    perDateDir = perDateDir == 'asc' ? 'desc' : 'asc';

    IdolHistory.populate();
};

IdolHistory.orderByPerson = function () {
    if (!currentHistory || currentHistory.length == 0) {
        currentHistory = historyDates;
    }

    currentHistory.sort((a, b) => personDir == 'asc' ? a.person - b.person : b.person - a.person);

    personDir = personDir == 'asc' ? 'desc' : 'asc';

    IdolHistory.populate();
};
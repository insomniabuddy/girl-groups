var historyArray = historyData;
var searchResults = historyData.length;

var artistOrderBy = ASC_ORDER;
var groupOrderBy = ASC_ORDER;
var dateOrderBy = ASC_ORDER;
var personOrderBy = ASC_ORDER;

const filterResults = (filterCriteria) => {
    historyArray = historyData;
    searchResults = historyData.length;

    historyArray = historyArray.filter(history => {
        const artistNameFilter = filterCriteria.artistName ? history.artistName.toUpperCase() === filterCriteria.artistName.toUpperCase() : true;
        const groupNameFilter = filterCriteria.groupName ? history.groupName.toUpperCase() === filterCriteria.groupName.toUpperCase() : true;
        var dateFilter = true;
        if (filterCriteria.fromDate || filterCriteria.toDate) {
            var fromT = 19000000;
            var toT = 21000000;
            if (filterCriteria.fromDate) {
                fromT = strDateToNumber(filterCriteria.fromDate);
            }
            if (filterCriteria.toDate) {
                toT = strDateToNumber(filterCriteria.toDate);
            }
            if (filterCriteria.timezone === '1') {
                dateFilter = history.perDate >= fromT && history.perDate <= toT;
            }
            if (filterCriteria.timezone === '2') {
                dateFilter = history.gerDate >= fromT && history.gerDate <= toT;
            }
        }
        var timeFilter = true;
        if (filterCriteria.fromTime || filterCriteria.toTime) {
            var fromT = 19000000;
            var toT = 21000000;
            if (filterCriteria.fromTime) {
                fromT = strDateToNumber(filterCriteria.fromTime);
            }
            if (filterCriteria.toTime) {
                toT = strDateToNumber(filterCriteria.toTime);
            }
            if (filterCriteria.timezone === '1') {
                timeFilter = history.perHour >= fromT && history.perHour <= toT;
            }
            if (filterCriteria.timezone === '2') {
                timeFilter = history.gerHour >= fromT && history.gerHour <= toT;
            }
        }
        const personFilter = filterCriteria.person !== '0' ? history.person === parseInt(filterCriteria.person) : true;

        return artistNameFilter && groupNameFilter && dateFilter && timeFilter && personFilter;
    });

    searchResults = historyArray.length;

    return historyArray.slice(filterCriteria.startIndex, filterCriteria.endIndex);
};

const orderByArtist = () => {
    historyArray.sort((a, b) => {
        var artistA = a.artistName.toUpperCase();
        var artistB = b.artistName.toUpperCase();
        if (artistOrderBy === ASC_ORDER) {
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

    artistOrderBy = artistOrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const orderByGroup = () => {
    historyArray.sort((a, b) => {
        var groupA = a.groupName.toUpperCase();
        var groupB = b.groupName.toUpperCase();
        if (groupOrderBy === ASC_ORDER) {
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
    groupOrderBy = groupOrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const orderByDate = () => {
    historyArray.sort((a, b) => {
        if (dateOrderBy == ASC_ORDER) {
            return a.perDate - b.perDate;
        } else {
            return b.perDate - a.perDate;
        }
    });
    dateOrderBy = dateOrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const orderByPerson = () => {
    historyArray.sort((a, b) => {
        if (personOrderBy == ASC_ORDER) {
            return a.person - b.person;
        } else {
            return b.person - a.person;
        }
    });
    personOrderBy = personOrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const clearFilters = () => {
    historyArray = historyData;
    searchResults = historyData.length;

    artistOrderBy = ASC_ORDER;
    groupOrderBy = ASC_ORDER;
    dateOrderBy = ASC_ORDER;
    personOrderBy = ASC_ORDER;

    $('.form-control').val('');
    $('select.form-control').val('0');
    $('#timezone-select').val('1');

    resetPagination();
};

const populateHistory = () => {
    var cardsText = '<div class="search-results-label">Search results: ' + searchResults + '</div>';
    historyArray.forEach(element => {
        cardsText += '<div class="card">';
        cardsText += '  <div class="row no-gutters">';
        cardsText += '    <div class="col-md-2">';
        cardsText += '      <img src="img/' + element.imageName + '.jpg" class="card-img" alt="Profile Pic">';
        cardsText += '    </div>';
        cardsText += '    <div class="col-md-10">';
        cardsText += '      <div class="card-body">';
        cardsText += '        <div class="row">';
        cardsText += '          <div class="col-md-12">';
        cardsText += '            <h5 class="card-title">' + element.id + '. ' + element.artistName + ' - ' + element.groupName + '</h5>';
        cardsText += '          </div>';
        cardsText += '          <div class="col-md-4">';
        cardsText += '            <p>Date (GMT -5): <b>' + element.perDateStr + '</b></p>';
        cardsText += '          </div>';
        cardsText += '          <div class="col-md-5">';
        cardsText += '            <p>Hour (GMT -5): <b>' + element.perHourStr + '</b></p>';
        cardsText += '          </div>';
        cardsText += '          <div class="col-md-4">';
        cardsText += '            <p>Date (GMT +2): <b>' + element.gerDateStr + '</b></p>';
        cardsText += '          </div>';
        cardsText += '          <div class="col-md-5">';
        cardsText += '            <p>Hour (GMT +2): <b>' + element.gerHourStr + '</b></p>';
        cardsText += '          </div>';
        cardsText += '          <div class="col-md-12">';
        cardsText += '            <p>Person: <b>' + element.person + '</b></p>';
        cardsText += '          </div>';
        cardsText += '        </div>';
        cardsText += '      </div>';
        cardsText += '    </div>';
        cardsText += '  </div>';
        cardsText += '</div>';
    });
    $('#history-container').html(cardsText);
};

(function () {
    $('#clear-button').click(() => {
        clearFilters();
        $('#search-button').click();
    });

    $('#search-button').click(() => {
        const pageTxtVal = $('#page-txt').val();
        const resultsPerPageTxtVal = $('#results-per-page-txt').val();

        if (!pageTxtVal) {
            alert('Page required.');
            return;
        }
        if (!resultsPerPageTxtVal) {
            alert('Results per page required.');
            return;
        }

        const currentPage = parseInt($('#page-txt').val());
        const pageSize = parseInt($('#results-per-page-txt').val());

        if (currentPage < 1) {
            alert('Page must be greater than 0.');
            return;
        }
        if (pageSize < 1) {
            alert('Results per page must be greater than 0.');
            return;
        }

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const filterCriteria = {
            artistName: $('#artist-txt').val(),
            groupName: $('#group-txt').val(),
            fromDate: $('#date-from-txt').val(),
            toDate: $('#date-to-txt').val(),
            fromTime: $('#time-from-txt').val(),
            toTime: $('#time-to-txt').val(),
            person: $('#person-select').val(),
            timezone: $('#timezone-select').val(),
            startIndex: startIndex,
            endIndex: endIndex
        };

        historyArray = filterResults(filterCriteria);

        populateHistory();
    });

    $('#order-by-artist-link').click(() => { orderByArtist(); populateHistory(); });
    $('#order-by-group-link').click(() => { orderByGroup(); populateHistory(); });
    $('#order-by-date-link').click(() => { orderByDate(); populateHistory(); });
    $('#order-by-person-link').click(() => { orderByPerson(); populateHistory(); });

    resetPagination();

    $('#search-button').click();
})();
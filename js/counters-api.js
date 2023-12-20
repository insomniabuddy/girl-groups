var countersArray = countersData;
var searchResults = countersData.length;

var artistOrderBy = ASC_ORDER;
var groupOrderBy = ASC_ORDER;
var count1OrderBy = ASC_ORDER;
var count2OrderBy = ASC_ORDER;
var countTotalOrderBy = ASC_ORDER;

const filterResults = (filterCriteria) => {
    countersArray = countersData;
    searchResults = countersData.length;

    countersArray = countersArray.filter(artist => {
        const artistNameFilter = filterCriteria.artistName ? artist.artistName.toUpperCase() === filterCriteria.artistName.toUpperCase() : true;
        const groupNameFilter = filterCriteria.groupName ? artist.groupName.toUpperCase() === filterCriteria.groupName.toUpperCase() : true;
        var count1Filter = true;
        if (filterCriteria.from1 || filterCriteria.to1) {
            if (!filterCriteria.from1) {
                filterCriteria.from1 = 0;
            }
            if (!filterCriteria.to1) {
                filterCriteria.to1 = 1000;
            }
            count1Filter = artist.counter1 >= filterCriteria.from1 && artist.counter1 <= filterCriteria.to1;
        }
        var count2Filter = true;
        if (filterCriteria.from2 || filterCriteria.to2) {
            if (!filterCriteria.from2) {
                filterCriteria.from2 = 0;
            }
            if (!filterCriteria.to2) {
                filterCriteria.to2 = 1000;
            }
            count2Filter = artist.counter2 >= filterCriteria.from2 && artist.counter2 <= filterCriteria.to2;
        }
        var countTotalFilter = true;
        if (filterCriteria.fromTotal || filterCriteria.toTotal) {
            if (!filterCriteria.fromTotal) {
                filterCriteria.fromTotal = 0;
            }
            if (!filterCriteria.toTotal) {
                filterCriteria.toTotal = 1000;
            }
            countTotalFilter = artist.counterTotal >= filterCriteria.fromTotal && artist.counterTotal <= filterCriteria.toTotal;
        }
        return artistNameFilter && groupNameFilter && count1Filter && count2Filter && countTotalFilter;;
    });

    searchResults = countersArray.length;

    return countersArray.slice(filterCriteria.startIndex, filterCriteria.endIndex);
};

const orderByArtist = () => {
    countersArray.sort((a, b) => {
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
    countersArray.sort((a, b) => {
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

const orderByCount1 = () => {
    countersArray.sort((a, b) => {
        if (count1OrderBy == ASC_ORDER) {
            return a.counter1 - b.counter1;
        } else {
            return b.counter1 - a.counter1;
        }
    });
    count1OrderBy = count1OrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const orderByCount2 = () => {
    countersArray.sort((a, b) => {
        if (count2OrderBy == ASC_ORDER) {
            return a.counter2 - b.counter2;
        } else {
            return b.counter2 - a.counter2;
        }
    });
    count2OrderBy = count2OrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const orderByCountTotal = () => {
    countersArray.sort((a, b) => {
        if (countTotalOrderBy == ASC_ORDER) {
            return a.counterTotal - b.counterTotal;
        } else {
            return b.counterTotal - a.counterTotal;
        }
    });
    countTotalOrderBy = countTotalOrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const clearFilters = () => {
    countersArray = countersData;
    searchResults = countersData.length;
    artistOrderBy = ASC_ORDER;
    groupOrderBy = ASC_ORDER;
    count1OrderBy = ASC_ORDER;
    count2OrderBy = ASC_ORDER;
    countTotalOrderBy = ASC_ORDER;

    $('.form-control').val('');

    resetPagination();
};

const populateCounters = () => {
    var cardsText = '<div class="search-results-label">Search results: ' + searchResults + '</div>';
    countersArray.forEach(element => {
        cardsText += '<div class="card">';
        cardsText += '  <div class="row no-gutters">';
        cardsText += '    <div class="col-md-2">';
        cardsText += '      <img src="img/' + element.imageName + '.jpg" class="card-img" alt="Profile Pic">';
        cardsText += '    </div>';
        cardsText += '    <div class="col-md-10">';
        cardsText += '      <div class="card-body">';
        cardsText += '        <div class="row">';
        cardsText += '          <div class="col-md-12">';
        cardsText += '            <h5 class="card-title">' + element.artistName + ' - ' + element.groupName + '</h5>';
        cardsText += '          </div>';
        cardsText += '          <div class="col-md-12">';
        cardsText += '            <p>Count1: <b>' + element.counter1 + '</b>&nbsp;&nbsp;&nbsp;' + buildStars(element.counter1) + '</p>';
        cardsText += '          </div>';
        cardsText += '          <div class="col-md-12">';
        cardsText += '            <p>Count2: <b>' + element.counter2 + '</b>&nbsp;&nbsp;&nbsp;' + buildStars(element.counter2) + '</p>';
        cardsText += '          </div>';
        cardsText += '          <div class="col-md-12">';
        cardsText += '            <p>Total: <b>' + element.counterTotal + '</b>&nbsp;&nbsp;&nbsp;' + buildStars(element.counterTotal) + '</p>';
        cardsText += '          </div>';
        cardsText += '        </div>';
        cardsText += '      </div>';
        cardsText += '    </div>';
        cardsText += '  </div>';
        cardsText += '</div>';
    });
    $('#counters-container').html(cardsText);
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
            from1: $('#count-1-from-txt').val(),
            to1: $('#count-1-to-txt').val(),
            from2: $('#count-2-from-txt').val(),
            to2: $('#count-2-to-txt').val(),
            fromTotal: $('#count-total-from-txt').val(),
            toTotal: $('#count-total-to-txt').val(),
            startIndex: startIndex,
            endIndex: endIndex
        };

        countersArray = filterResults(filterCriteria);

        populateCounters();
    });

    $('#order-by-artist-link').click(() => { orderByArtist(); populateCounters(); });
    $('#order-by-group-link').click(() => { orderByGroup(); populateCounters(); });
    $('#order-by-count-1-link').click(() => { orderByCount1(); populateCounters(); });
    $('#order-by-count-2-link').click(() => { orderByCount2(); populateCounters(); });
    $('#order-by-count-total-link').click(() => { orderByCountTotal(); populateCounters(); });

    resetPagination();

    $('#search-button').click();
})();

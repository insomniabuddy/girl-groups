var monthCountersArray = monthCountersData;
var searchResults = monthCountersData.length;

var dateOrderBy = ASC_ORDER;

const filterResults = (filterCriteria) => {
    monthCountersArray = monthCountersData;
    searchResults = monthCountersData.length;

    monthCountersArray = monthCountersArray.filter(element => {
        var dateFilter = true;
        var dateSearch = 0;
        var onlyYear = true;
        if (filterCriteria.year !== '0' || filterCriteria.month !== '0') {
            if (filterCriteria.year !== '0') {
                dateSearch = parseInt(filterCriteria.year);
            }
            if (filterCriteria.month !== '0') {
                dateSearch = dateSearch * 100 + parseInt(filterCriteria.month);
                onlyYear = false;
            }
            if (onlyYear) {
                dateFilter = element.monthDate / 100 == dateSearch;
            } else {
                dateFilter = element.monthDate === dateSearch;
            }
        }
        return dateFilter;
    });
    console.dir(monthCountersArray);
    searchResults = monthCountersArray.length;
    return monthCountersArray;
};

const orderByDate = () => {
    monthCountersArray.sort((a, b) => {
        if (dateOrderBy == ASC_ORDER) {
            return a.monthDate - b.monthDate;
        } else {
            return b.monthDate - a.monthDate;
        }
    });
    dateOrderBy = dateOrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const clearFilters = () => {
    monthCountersArray = monthCountersData;
    searchResults = monthCountersData.length;

    dateOrderBy = ASC_ORDER;

    $('select.form-control').val('0');
};

const populateMonthCounters = () => {
    var cardsText = '<div class="search-results-label">Search results: ' + searchResults + '</div>';

    monthCountersArray.forEach(element => {
        cardsText += '<div class="card">';
        cardsText += '  <div class="row no-gutters">';
        cardsText += '    <div class="col-md-12">';
        cardsText += '      <div class="card-body">';
        cardsText += '        <div class="row">';
        cardsText += '          <div class="col-md-12">';
        cardsText += '            <h5 class="card-title">' + element.monthDateStr.toUpperCase() + '</h5>';
        cardsText += '          </div>';
        element.list.forEach(item => {
            cardsText += '<div class="col-md-12">';
            cardsText += '  <div class="card subcard">';
            cardsText += '    <div class="card-body">';
            cardsText += '      <p class="card-subtitle mb-2"><b>' + item.quantity + ' times</b></p>';
            cardsText += '      <ul class="list-unstyled custom-list">';
            item.artists.forEach(artist => {
                cardsText += '<li class="profile-card card">';
                cardsText += '  <img src="img/' + artist.imageName + '.jpg" class="card-img-top" alt="Profile Pic">';
                cardsText += '  <div class="card-body">';
                cardsText += '    <p class="font-weight-bold">' + artist.artistName + '<br>' + artist.groupName + '</p>';
                cardsText += '  </div>';
                cardsText += '</li>';
            });
            cardsText += '      </ul>';
            cardsText += '    </div>';
            cardsText += '  </div>';
            cardsText += '</div>';
        });
        cardsText += '        </div>';
        cardsText += '      </div>';
        cardsText += '    </div>';
        cardsText += '  </div>';
        cardsText += '</div>';
    });

    // monthCountersArray.forEach(element => {
    //     cardsText += '<div class="card">';
    //     cardsText += '  <div class="row no-gutters">';
    //     cardsText += '    <div class="col-md-12">';
    //     cardsText += '      <div class="card-body">';
    //     cardsText += '        <div class="row">';
    //     cardsText += '          <div class="col-md-12">';
    //     cardsText += '            <h5 class="card-title">' + element.monthDateStr + '</h5>';
    //     cardsText += '          </div>';
    //     element.list.forEach(item => {
    //         cardsText += '          <div class="col-md-2">';
    //         cardsText += '            <p class="card-subtitle mb-2 text-muted"><b>' + item.quantity + ' times</b></p>';
    //         cardsText += '          </div>';
    //         cardsText += '          <div class="col-md-10">';
    //         cardsText += '            <ul class="list-unstyled custom-list">';
    //         cardsText += '              <li class="d-flex align-items-center">';
    //         item.artists.forEach(artist => {
    //             cardsText += '                <div class="person">';
    //             cardsText += '                  <img src="img/' + artist.imageName + '.jpg" class="rounded-circle mr-3" alt="Profile Pic" style="width: 50px; height: 50px;">';
    //             cardsText += '                  <p class="font-weight-bold mr-2">' + artist.artistName + ' - ' + artist.groupName + '</p>';
    //             cardsText += '                </div>';
    //         });
    //         cardsText += '              </li>';
    //         cardsText += '            </ul>';
    //         cardsText += '          </div>';
    //     });
    //     cardsText += '        </div>';
    //     cardsText += '      </div>';
    //     cardsText += '    </div>';
    //     cardsText += '  </div>';
    //     cardsText += '</div>';
    // });

    $('#month-counters-container').html(cardsText);
};

(function () {
    $('#clear-button').click(() => {
        clearFilters();
        $('#search-button').click();
    });

    $('#search-button').click(() => {
        if ($('#year-select').val() === '0' && $('#month-select').val() !== '0') {
            alert('Must select year.');
            return;
        }

        const filterCriteria = {
            year: $('#year-select').val(),
            month: $('#month-select').val()
        };

        monthCountersArray = filterResults(filterCriteria);

        populateMonthCounters();
    });

    $('#order-by-date-link').click(() => { orderByDate(); populateMonthCounters(); });

    $('#search-button').click();
})();
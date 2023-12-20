var artistsArray = artistsData;
var searchResults = artistsData.length;

var artistOrderBy = ASC_ORDER;
var groupOrderBy = ASC_ORDER;
var ageOrderBy = ASC_ORDER;
var birthdayOrderBy = ASC_ORDER;
var countryOrderBy = ASC_ORDER;
var zodiacOrderBy = ASC_ORDER;
var chineseZodiacOrderBy = ASC_ORDER;

const populateCountries = () => {
    var countriesText = '<option value="0">Any</option>';
    countriesData.forEach(element => {
        countriesText += '<option value="' + element.countryId + '">' + element.countryName + '</option>';
    });
    $('#country-select').html(countriesText);
};

const filterResults = (filterCriteria) => {
    artistsArray = artistsData;
    searchResults = artistsData.length;

    artistsArray = artistsArray.filter(artist => {
        const artistNameFilter = filterCriteria.artistName ? artist.artistName.toUpperCase() === filterCriteria.artistName.toUpperCase() : true;
        const groupNameFilter = filterCriteria.groupName ? artist.groupName.toUpperCase() === filterCriteria.groupName.toUpperCase() : true;
        var ageFilter = true;
        if (filterCriteria.fromAge || filterCriteria.toAge) {
            if (!filterCriteria.fromAge) {
                filterCriteria.fromAge = 0;
            }
            if (!filterCriteria.toAge) {
                filterCriteria.toAge = 100;
            }
            ageFilter = artist.age >= filterCriteria.fromAge && artist.age <= filterCriteria.toAge;
        }
        var birthdayFilter = true;
        if (filterCriteria.fromBirthday || filterCriteria.toBirthday) {
            var from = 19000000;
            var to = 21000000;
            if (filterCriteria.fromBirthday) {
                from = strDateToNumber(filterCriteria.fromBirthday);
            }
            if (filterCriteria.toBirthday) {
                to = strDateToNumber(filterCriteria.toBirthday);
            }
            birthdayFilter = artist.birthdayNumber >= from && artist.birthdayNumber <= to;
        }
        var countryFilter = true;
        if (filterCriteria.country !== '0') {
            countryFilter = artist.countryId === parseInt(filterCriteria.country);
        }
        var zodiacFilter = true;
        if (filterCriteria.zodiac !== '0') {
            zodiacFilter = artist.zodiacId === parseInt(filterCriteria.zodiac);
        }
        var chineseZodiacFilter = true;
        if (filterCriteria.chineseZodiac !== '0') {
            chineseZodiacFilter = artist.chineseZodiacId === parseInt(filterCriteria.chineseZodiac);
        }
        return artistNameFilter && groupNameFilter && ageFilter && birthdayFilter && countryFilter && zodiacFilter && chineseZodiacFilter;
    });

    searchResults = artistsArray.length;

    return artistsArray.slice(filterCriteria.startIndex, filterCriteria.endIndex);
};

const orderByArtist = () => {
    artistsArray.sort((a, b) => {
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
    artistsArray.sort((a, b) => {
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

const orderByAge = () => {
    artistsArray.sort((a, b) => {
        if (ageOrderBy == ASC_ORDER) {
            return a.age - b.age;
        } else {
            return b.age - a.age;
        }
    });
    ageOrderBy = ageOrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const orderByBirthday = () => {
    artistsArray.sort((a, b) => {
        if (birthdayOrderBy == ASC_ORDER) {
            return a.birthdayNumber - b.birthdayNumber;
        } else {
            return b.birthdayNumber - a.birthdayNumber;
        }
    });
    birthdayOrderBy = birthdayOrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const orderByCountry = () => {
    artistsArray.sort((a, b) => {
        var countryA = a.country.toUpperCase();
        var countryB = b.country.toUpperCase();
        if (countryOrderBy === ASC_ORDER) {
            if (countryA < countryB) {
                return -1;
            } else if (countryA > countryB) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (countryA < countryB) {
                return 1;
            } else if (countryA > countryB) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    countryOrderBy = countryOrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const orderByZodiac = () => {
    artistsArray.sort((a, b) => {
        var zodiacA = a.zodiac.toUpperCase();
        var zodiacB = b.zodiac.toUpperCase();
        if (zodiacOrderBy === ASC_ORDER) {
            if (zodiacA < zodiacB) {
                return -1;
            } else if (zodiacA > zodiacB) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (zodiacA < zodiacB) {
                return 1;
            } else if (zodiacA > zodiacB) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    zodiacOrderBy = zodiacOrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const orderByChineseZodiac = () => {
    artistsArray.sort((a, b) => {
        var chineseZodiacA = a.chineseZodiac.toUpperCase();
        var chineseZodiacB = b.chineseZodiac.toUpperCase();
        if (chineseZodiacOrderBy === ASC_ORDER) {
            if (chineseZodiacA < chineseZodiacB) {
                return -1;
            } else if (chineseZodiacA > chineseZodiacB) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (chineseZodiacA < chineseZodiacB) {
                return 1;
            } else if (chineseZodiacA > chineseZodiacB) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    chineseZodiacOrderBy = chineseZodiacOrderBy === ASC_ORDER ? DESC_ORDER : ASC_ORDER;
};

const clearFilters = () => {
    artistsArray = artistsData;
    searchResults = artistsData.length;

    artistOrderBy = ASC_ORDER;
    groupOrderBy = ASC_ORDER;
    ageOrderBy = ASC_ORDER;
    birthdayOrderBy = ASC_ORDER;
    countryOrderBy = ASC_ORDER;
    zodiacOrderBy = ASC_ORDER;
    chineseZodiacOrderBy = ASC_ORDER;

    $('.form-control').val('');
    $('select.form-control').val('0');

    resetPagination();
};

const populateArtists = () => {
    var cardsText = '<div class="search-results-label">Search results: ' + searchResults + '</div>';
    artistsArray.forEach(element => {
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
        cardsText += '          <div class="col-md-6">';
        cardsText += '            <p>Age: <b>' + element.age + '</b></p>';
        cardsText += '          </div>';
        cardsText += '          <div class="col-md-6">';
        cardsText += '            <p>Birthday: <b>' + element.birthday + '</b></p>';
        cardsText += '          </div>';
        cardsText += '          <div class="col-md-12">';
        cardsText += '            <p>Country: <b>' + element.country + '</b></p>';
        cardsText += '          </div>';
        cardsText += '          <div class="col-md-6">';
        cardsText += '            <p>Zodiac: <b>' + element.zodiac + '</b></p>';
        cardsText += '          </div>';
        cardsText += '          <div class="col-md-6">';
        cardsText += '            <p>Chinese Zodiac: <b>' + element.chineseZodiac + '</b></p>';
        cardsText += '          </div>';
        cardsText += '        </div>';
        cardsText += '      </div>';
        cardsText += '    </div>';
        cardsText += '  </div>';
        cardsText += '</div>';
    });
    $('#artists-container').html(cardsText);
};

(function () {
    populateCountries();

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
            fromAge: $('#age-from-txt').val(),
            toAge: $('#age-to-txt').val(),
            fromBirthday: $('#birthday-from-txt').val(),
            toBirthday: $('#birthday-to-txt').val(),
            country: $('#country-select').val(),
            zodiac: $('#zodiac-select').val(),
            chineseZodiac: $('#chinese-zodiac-select').val(),
            startIndex: startIndex,
            endIndex: endIndex
        };

        artistsArray = filterResults(filterCriteria);

        populateArtists();
    });

    $('#order-by-artist-link').click(() => { orderByArtist(); populateArtists(); });
    $('#order-by-group-link').click(() => { orderByGroup(); populateArtists(); });
    $('#order-by-age-link').click(() => { orderByAge(); populateArtists(); });
    $('#order-by-birthday-link').click(() => { orderByBirthday(); populateArtists(); });
    $('#order-by-country-link').click(() => { orderByCountry(); populateArtists(); });
    $('#order-by-zodiac-link').click(() => { orderByZodiac(); populateArtists(); });
    $('#order-by-chinese-zodiac-link').click(() => { orderByChineseZodiac(); populateArtists(); });

    resetPagination();

    $('#search-button').click();
})();
var currentArtists = [];

artistNameDir = 'asc';
groupNameDir = 'asc';
ageDir = 'asc';
zodiacDir = 'asc';
chineseZodiacDir = 'asc';
positionsDir = 'asc';
agencyDir = 'asc';
birthDateDir = 'asc';
bloodTypeDir = 'asc';
heightDir = 'asc';
fandomDir = 'asc';
cityDir = 'asc';
countryDir = 'asc';
biasDir = 'asc';

if (!window.IdolArtists) {
    window.IdolArtists = {};
}

$(function () {
    $('.input-number').keypress(IdolCommon.onlyNumber);

    $('#btn-search').click(IdolArtists.search);
    $('#btn-clear').click(IdolArtists.clear);

    $('#obArtistName').click(IdolArtists.orderByArtist);
    $('#obGroupName').click(IdolArtists.orderByGroup);

    $('#obAge').click(IdolArtists.orderByAge);
    $('#obZodiac').click(IdolArtists.orderByZodiac);
    $('#obChineseZodiac').click(IdolArtists.orderByChineseZodiac);
    $('#obPositions').click(IdolArtists.orderByPositions);
    $('#obAgency').click(IdolArtists.orderByAgency);
    $('#obBirthDate').click(IdolArtists.orderByBirthDate);
    $('#obBloodType').click(IdolArtists.orderByBloodType);
    $('#obHeight').click(IdolArtists.orderByHeight);
    $('#obFandom').click(IdolArtists.orderByFandom);
    $('#obCity').click(IdolArtists.orderByCity);
    $('#obCountry').click(IdolArtists.orderByCountry);
    $('#obBias').click(IdolArtists.orderByBias);

    IdolArtists.populate();
});

IdolArtists.populate = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    var $tbody = $('#artists-tbody');

    var string = '';
    currentArtists.forEach(function (elem) {
        string += '<tr>';
        string += '<td class="text-center"><img src="img/' + elem.imageName + '.jpg" alt="' + elem.imageName + '" /></td>';
        string += '<td>' + elem.artistName + '</td>';
        string += '<td>' + elem.groupName + '</td>';
        string += '<td>' + elem.birthDateStr + '</td>';
        string += '<td class="text-center">' + elem.age + '</td>';
        string += '<td class="text-center">' + elem.zodiac + IdolCommon.getZodiacSign(elem.zodiacId) + '</td>';
        string += '<td class="text-center">' + elem.chineseZodiac + '</td>';
        string += '<td>' + elem.agency + '</td>';
        string += '<td class="text-center">' + elem.bloodType + '</td>';
        string += '<td class="text-center">' + elem.heightStr + ' cm</td>';
        string += '<td>' + elem.fandom + '</td>';
        string += '<td>' + elem.positions + '</td>';
        string += '<td>' + elem.city + '</td>';
        string += '<td>' + elem.country + '</td>';
        string += '<td>' + elem.biasStr + '</td>';
        string += '</tr>';
    });

    $tbody.html(string);
};

IdolArtists.clear = function () {
    $('.form-control').val('');
    $('.form-select').val('-1');
    artistNameDir = 'asc';
    groupNameDir = 'asc';
    ageDir = 'asc';
    zodiacDir = 'asc';
    chineseZodiacDir = 'asc';
    positionsDir = 'asc';
    agencyDir = 'asc';
    birthDateDir = 'asc';
    bloodTypeDir = 'asc';
    heightDir = 'asc';
    fandomDir = 'asc';
    cityDir = 'asc';
    countryDir = 'asc';
    biasDir = 'asc';
    IdolArtists.orderByArtist();
};

IdolArtists.search = function () {
    var artistName = $('#artistName').val();
    var groupName = $('#groupName').val();
    var ageStart = $('#ageStart').val();
    var ageEnd = $('#ageEnd').val();
    var zodiac = $('#zodiac').val();
    var chineseZodiac = $('#chineseZodiac').val();
    var positions = $('#positions').val();
    var agency = $('#agency').val();
    var birthDateStart = $('#birthDateStart').val();
    var birthDateEnd = $('#birthDateEnd').val();
    var bloodType = $('#bloodType').val();
    var heightStart = $('#heightStart').val();
    var heightEnd = $('#heightEnd').val();
    var fandom = $('#fandom').val();
    var city = $('#city').val();
    var country = $('#country').val();
    var bias = $('#bias').val();

    currentArtists = [];

    var found = IdolArtists.searchByArtist(artistName);
    if (found) {
        found = IdolArtists.searchByGroup(groupName);
        if (found) {
            found = IdolArtists.searchByAge(ageStart, ageEnd);
            if (found) {
                found = IdolArtists.searchByZodiac(zodiac);
                if (found) {
                    found = IdolArtists.searchByChineseZodiac(chineseZodiac);
                    if (found) {
                        found = IdolArtists.searchByPositions(positions);
                        if (found) {
                            found = IdolArtists.searchByAgency(agency);
                            if (found) {
                                found = IdolArtists.searchByBirthDate(birthDateStart, birthDateEnd);
                                if (found) {
                                    found = IdolArtists.searchByBloodType(bloodType);
                                    if (found) {
                                        found = IdolArtists.searchByHeight(heightStart, heightEnd);
                                        if (found) {
                                            found = IdolArtists.searchByFandom(fandom);
                                            if (found) {
                                                found = IdolArtists.searchByCity(city);
                                                if (found) {
                                                    found = IdolArtists.searchByCountry(country);
                                                    if (found) {
                                                        found = IdolArtists.searchByBias(bias);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    IdolArtists.populate();
};

IdolArtists.searchByArtist = function (artistName) {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    var result = [];
    console.log('');
    currentArtists.forEach(function (elem) {
        if (elem.artistName.toUpperCase().includes(artistName.toUpperCase())) {
            console.log(elem.artistName);
            result.push(elem);
        }
    });
    currentArtists = result;

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByGroup = function (groupName) {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    var result = [];
    console.log('');
    currentArtists.forEach(function (elem) {
        if (elem.groupName.toUpperCase().includes(groupName.toUpperCase())) {
            console.log(elem.groupName);
            result.push(elem);
        }
    });
    currentArtists = result;

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByAge = function (start, end) {
    start = start ? start : 0;
    end = end ? end : 999;
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    var result = [];
    console.log('');
    currentArtists.forEach(function (elem) {
        if (elem.age >= start && elem.age <= end) {
            console.log(elem.age);
            result.push(elem);
        }
    });
    currentArtists = result;

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByZodiac = function (zodiac) {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    if (zodiac != -1) {
        var result = [];
        currentArtists.forEach(function (elem) {
            if (elem.zodiacId == zodiac) {
                result.push(elem);
            }
        });
        currentArtists = result;
    }

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByChineseZodiac = function (chineseZodiac) {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    if (chineseZodiac != -1) {
        var result = [];
        currentArtists.forEach(function (elem) {
            if (elem.chineseZodiacId == chineseZodiac) {
                result.push(elem);
            }
        });
        currentArtists = result;
    }

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByPositions = function (positions) {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    var result = [];
    currentArtists.forEach(function (elem) {
        if (elem.positions.toUpperCase().includes(positions.toUpperCase())) {
            result.push(elem);
        }
    });
    currentArtists = result;

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByAgency = function (agency) {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    var result = [];
    currentArtists.forEach(function (elem) {
        if (elem.agency.toUpperCase().includes(agency.toUpperCase())) {
            result.push(elem);
        }
    });
    currentArtists = result;

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByBirthDate = function (start, end) {
    start = start ? start : 19000101;
    end = end ? end : 20991212;
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    var result = [];
    currentArtists.forEach(function (elem) {
        if (elem.birthDate >= start && elem.birthDate <= end) {
            result.push(elem);
        }
    });
    currentArtists = result;

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByBloodType = function (bloodType) {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    console.log('type = ' + bloodType);

    if (bloodType != -1) {
        var result = [];
        currentArtists.forEach(function (elem) {
            if (elem.bloodType == bloodType) {
                result.push(elem);
            }
        });
        currentArtists = result;
    }

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByHeight = function (start, end) {
    start = start ? start : 0;
    end = end ? end : 999;
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    var result = [];
    currentArtists.forEach(function (elem) {
        if (elem.height >= start && elem.height <= end) {
            result.push(elem);
        }
    });
    currentArtists = result;

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByFandom = function (fandom) {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    var result = [];
    currentArtists.forEach(function (elem) {
        if (elem.fandom.toUpperCase().includes(fandom.toUpperCase())) {
            result.push(elem);
        }
    });
    currentArtists = result;

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByCity = function (city) {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    var result = [];
    currentArtists.forEach(function (elem) {
        if (elem.city.toUpperCase().includes(city.toUpperCase())) {
            result.push(elem);
        }
    });
    currentArtists = result;

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByCountry = function (country) {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    var result = [];
    currentArtists.forEach(function (elem) {
        if (elem.country.toUpperCase().includes(country.toUpperCase())) {
            result.push(elem);
        }
    });
    currentArtists = result;

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.searchByBias = function (bias) {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    if (bias != -1) {
        var result = [];
        currentArtists.forEach(function (elem) {
            if (bias == -2) {
                if (elem.bias != 0) {
                    result.push(elem);
                }
            } else {
                if (elem.bias == bias) {
                    result.push(elem);
                }
            }
        });
        currentArtists = result;
    }

    return currentArtists && currentArtists.length > 0;
};

IdolArtists.orderByArtist = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => {
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

    IdolArtists.populate();
};

IdolArtists.orderByGroup = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => {
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

    IdolArtists.populate();
};

IdolArtists.orderByAge = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => ageDir == 'asc' ? a.age - b.age : b.age - a.age);

    ageDir = ageDir == 'asc' ? 'desc' : 'asc';

    IdolArtists.populate();
};

IdolArtists.orderByZodiac = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => {
        var zodiacA = a.zodiac.toUpperCase();
        var zodiacB = b.zodiac.toUpperCase();
        if (zodiacDir == 'asc') {
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

    zodiacDir = zodiacDir == 'asc' ? 'desc' : 'asc';

    IdolArtists.populate();
};

IdolArtists.orderByChineseZodiac = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => {
        var chineseZodiacA = a.chineseZodiac.toUpperCase();
        var chineseZodiacB = b.chineseZodiac.toUpperCase();
        if (chineseZodiacDir == 'asc') {
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

    chineseZodiacDir = chineseZodiacDir == 'asc' ? 'desc' : 'asc';

    IdolArtists.populate();
};

IdolArtists.orderByPositions = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => {
        var positionsA = a.positions.toUpperCase();
        var positionsB = b.positions.toUpperCase();
        if (positionsDir == 'asc') {
            if (positionsA < positionsB) {
                return -1;
            } else if (positionsA > positionsB) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (positionsA < positionsB) {
                return 1;
            } else if (positionsA > positionsB) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    positionsDir = positionsDir == 'asc' ? 'desc' : 'asc';

    IdolArtists.populate();
};

IdolArtists.orderByAgency = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => {
        var agencyA = a.agency.toUpperCase();
        var agencyB = b.agency.toUpperCase();
        if (agencyDir == 'asc') {
            if (agencyA < agencyB) {
                return -1;
            } else if (agencyA > agencyB) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (agencyA < agencyB) {
                return 1;
            } else if (agencyA > agencyB) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    agencyDir = agencyDir == 'asc' ? 'desc' : 'asc';

    IdolArtists.populate();
};

IdolArtists.orderByBirthDate = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => birthDateDir == 'asc' ? a.birthDate - b.birthDate : b.birthDate - a.birthDate);

    birthDateDir = birthDateDir == 'asc' ? 'desc' : 'asc';

    IdolArtists.populate();
};

IdolArtists.orderByBloodType = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => {
        var bloodTypeA = a.bloodType.toUpperCase();
        var bloodTypeB = b.bloodType.toUpperCase();
        if (bloodTypeDir == 'asc') {
            if (bloodTypeA < bloodTypeB) {
                return -1;
            } else if (bloodTypeA > bloodTypeB) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (bloodTypeA < bloodTypeB) {
                return 1;
            } else if (bloodTypeA > bloodTypeB) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    bloodTypeDir = bloodTypeDir == 'asc' ? 'desc' : 'asc';

    IdolArtists.populate();
};

IdolArtists.orderByHeight = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => heightDir == 'asc' ? a.height - b.height : b.height - a.height);

    heightDir = heightDir == 'asc' ? 'desc' : 'asc';

    IdolArtists.populate();
};

IdolArtists.orderByFandom = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => {
        var fandomA = a.fandom.toUpperCase();
        var fandomB = b.fandom.toUpperCase();
        if (fandomDir == 'asc') {
            if (fandomA < fandomB) {
                return -1;
            } else if (fandomA > fandomB) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (fandomA < fandomB) {
                return 1;
            } else if (fandomA > fandomB) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    fandomDir = fandomDir == 'asc' ? 'desc' : 'asc';

    IdolArtists.populate();
};

IdolArtists.orderByCity = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => {
        var cityA = a.city.toUpperCase();
        var cityB = b.city.toUpperCase();
        if (cityDir == 'asc') {
            if (cityA < cityB) {
                return -1;
            } else if (cityA > cityB) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (cityA < cityB) {
                return 1;
            } else if (cityA > cityB) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    cityDir = cityDir == 'asc' ? 'desc' : 'asc';

    IdolArtists.populate();
};

IdolArtists.orderByCountry = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => {
        var countryA = a.country.toUpperCase();
        var countryB = b.country.toUpperCase();
        if (countryDir == 'asc') {
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

    countryDir = countryDir == 'asc' ? 'desc' : 'asc';

    IdolArtists.populate();
};

IdolArtists.orderByBias = function () {
    if (!currentArtists || currentArtists.length == 0) {
        currentArtists = artists;
    }

    currentArtists.sort((a, b) => biasDir == 'asc' ? a.bias - b.bias : b.bias - a.bias);

    biasDir = biasDir == 'asc' ? 'desc' : 'asc';

    IdolArtists.populate();
};

const getAge = (date) => {
    var actualDate = new Date();
    var actualYear = actualDate.getFullYear();
    var actualMonth = actualDate.getMonth() + 1;
    var actualDay = actualDate.getDay();

    var bornDay = date.split('-')[2];
    var bornMonth = date.split('-')[1];
    var bornYear = date.split('-')[0];

    var age = actualYear - bornYear;

    if(actualMonth < bornMonth)
        age--;
    else
        if(actualMonth == bornMonth)
            if(actualDay < bornDay)
                age--;

    return age;
}

module.exports = { getAge };

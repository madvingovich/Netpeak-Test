

//meke options for contact form select
var countries = {
    ukraine: ['Киев','Харьков','Одесса','Днепр','Запорожье','Львов','Кривой Рог','Николаев','Мариуполь','Луганск','Макеевка','Севастополь','Херсон','Полтава','Чернигов','Черкассы','Сумы','Житомир','Днепродзержинск','Кировоград','Хмельницкий','Ровно','Ивано-Франковск','Луцк','Белая Церковь','Моего города нет в списке:('],
    russia: ['Москва','Санкт-Петербург','Новосибирск','Екатеринбург','Нижний Новгород','Казань','Челябинск','Омск','Самара','Ростов-на-Дону','Уфа','Красноярск','Пермь','Воронеж','Волгоград','Моего города нет в списке:(']
};

var countrySelect = document.querySelector('.country'),
    town = document.querySelector('.city');

function pushCities (arrayWithCities) {
    arrayWithCities.forEach(function (city) {
        var opt = document.createElement('option');
        opt.innerHTML = city;
        town.appendChild(opt);
    })
}

function removeOldOptions () {
    [].forEach.call(town.querySelectorAll('option'),function (e) {
        e.parentNode.removeChild(e);
    });
}

function createCities () {
    if(countrySelect.value === 'Ukraine') {
        removeOldOptions();
        var cities = countries['ukraine'];
        pushCities(cities);
    } else if (countrySelect.value === 'Russia') {
        removeOldOptions();
        var cities = countries['russia'];
        pushCities(cities);
    } else {
        removeOldOptions();
        pushCities(['City']);
    }
}

createCities();

countrySelect.addEventListener('change',function () {
    createCities();
});
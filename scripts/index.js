let car = {
    manufacturer: "Audi",
    model: "A4",
    YearOfIssue: 2018,
    averageSpeed: 40,

    carInfo: function() {
        let myInfo = '';
        myInfo += `1.\nИнфо об авто:\n`;
        myInfo += `01. Производитель: ${car.manufacturer}\n`;
        myInfo += `02. Модель: ${car.model}\n`;
        myInfo += `03. Год выпуска: ${car.YearOfIssue} г.\n`;
        myInfo += `04. Средняя скорость: ${car.averageSpeed} км/ч`;
        return myInfo;
    },

    timeCount: function (distance) {
        let _time = distance/this.averageSpeed;
        _time += _time / 4;
        return `2.\nДля преодоления ${distance} км,\nнеобходимо затратить ${_time.toFixed(0)} часов`;
    },

    numOfYears: function() {
        let currentDate = new Date();
        let resultDate = currentDate.getFullYear() - this.YearOfIssue;
        return `3.\n${resultDate} лет прошло с момента выпуска авто`;
    }
    
};

// 1
alert(car.carInfo());
// 2
alert(car.timeCount(+prompt('Введите расстояние(км):')));
// 3
alert(car.numOfYears());
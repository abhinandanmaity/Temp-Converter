function convert() {

    const temp = document.getElementById("temp");
    const unit = document.getElementById("default");

    // console.log(temp.value)
    // console.log(unit.value)

    const tempValue = parseFloat(temp.value);
    const unitValue = unit.value;

    if (unitValue == "Celsius") {

        let Fahrenheitvalue = (tempValue * 9 / 5) + 32;
        let Kelvinvalue = (Fahrenheitvalue - 32) * 5 / 9 + 273.15;
        Celsius.innerHTML = tempValue;
        Fahrenheit.innerHTML = Fahrenheitvalue.toFixed(2);
        Kelvin.innerHTML = Kelvinvalue.toFixed(2);

    } else if (unitValue == "Fahrenheit") {

        let Celsiusvalue = (tempValue - 32) * 5 / 9;
        let Kelvinvalue = (tempValue - 32) * 5 / 9 + 273.15;
        Fahrenheit.innerHTML = tempValue;
        Celsius.innerHTML = Celsiusvalue.toFixed(2);
        Kelvin.innerHTML = Kelvinvalue.toFixed(2);

    } else {

        let Celsiusvalue = tempValue - 273.15;
        let Fahrenheitvalue = (Celsiusvalue * 9 / 5) + 32;
        Kelvin.innerHTML = tempValue;
        Fahrenheit.innerHTML = Fahrenheitvalue.toFixed(2);
        Celsius.innerHTML = Celsiusvalue.toFixed(2);
    }
}
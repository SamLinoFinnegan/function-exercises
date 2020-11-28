function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius / 5) * 9 + 32;
    console.log(celsius + "°C is " + fahrenheit + "°F");

};
celsiusToFahrenheit(30);

function fahrenheitToCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    console.log(celsius + "°C is " + fahrenheit + "°F");

};
fahrenheitToCelsius(86);
let kelvin = 293
console.log(kelvin)
console.log(typeof kelvin)
/*I named the variable for Kelvin "kelvin" and set the value equal to a number. Because the value of the variable kelvin will change as the temperatures change, I used the let variable*/
let celcius = (kelvin -= 273) 
console.log(celcius)
/*I named the variable for Celcius celcius and set it equal to the value of Kelvin (represented by the variable kelvin) minus 273. Because the value of the variable celcius will change, I used the let variable. I used the -= operator for the Kelvin to Celicius conversion calculation.*/
let farenheit = (celcius * (9/5) + 32)
console.log(farenheit)
/*I used the variable farenheit to represent the value for farenheit. I set farenheit equal to the prescribed equation, using celcius as the variable to represent the celcius value. Because the value of the farenheit variable will change, I used the let variable.*/ 
console.log(Math.floor(farenheit))
/*I used the Math.floor built-in object to round farenheit to a whole number, instead of a decimal. The provided numbers already produce a whole number. In order to test my code's functionality, I temporarily changed the value of the variable kelvin to 300, which produced a farenheit value of 19.4. Using the .floor() object produced a value of 19. I then returned variable kelvin to its orignial value of 273.*/
console.log(`The temperature is ${farenheit} degrees Farenheit.`)
kelvin = 0 
console.log(kelvin)
celcius = (kelvin -= 273)
console.log(celcius)
farenheit = (celcius * (9/5) + 32)
console.log(farenheit)
console.log(Math.floor(farenheit))
//0 Kelvin in Farenheit is -460
kelvin = 0
celcius = (kelvin -= 273)
console.log(celcius)
let newton = (celcius * (33/100))
console.log(newton)
console.log(Math.floor(newton))
console.log(`The temperature is ${newton} degrees Newton.`)
/* I used string interpolation to embed the variable newton into the string. */




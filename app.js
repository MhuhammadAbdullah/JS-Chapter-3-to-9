// Chapter : 03 VARIABLES FOR NUMBERS

// Question : 01

// var age = ("I am 18 year old")
// alert(age)

// Question : 02

// var visited = ("Your have visited this site 14 time")
// alert(visited)

// Question : 03

// var birthYear = ("My birth year is 2005 <br/> Data type of my declared variable is number");
// document.write(birthYear);

// Question : 04

// var onlineStore = ("<b>John Doe</b> ordered 5 <b>T-shirt's</b> on <b>XYZ</b> Clothing store");
// document.write(onlineStore );


// Chapter : 04 VARIABLE NAMES: LEGAL & ILLEGAL 
// Question : 01
// var x, y, z;
// var x=web, y=app, z=development

// Question : 02
// Legal Variable Names

// var userName;
// var $amount;
// var _total;
// var user2;
// var camelCaseExample;

// Illegal Variable Names

// var 2user;
// var user-name
// var user name;
// var var;
// var @amount;

// Question : 03

// var a = ("<h1>Rules for naming JS variables</h1><br/><br/><br/>");
// document.write(a);

// var b = ("Variable names can only contain <strong>numbers</strong>,<strong> $</strong> and<strong>_</strong>. For example: $my_1stVariable<br>");
// document.write(b);

// var c = ("Variables must begin with a <strong>letters</strong>, <strong>$</strong> or <strong>_</strong>. For example: $name,_name or name<br>");
// document.write(c);

// var d = ("Variable names are case <strong>Sensitive</strong><br>");
// document.write(d);

// var e = ("Variable names should not be JS <strong>keyword</strong><br>");
// document.write(e);


// Chapter : 05 MATH EXPRESSIONS
// Question : 01

// var number1 = 3;
// var number2 = 5;
// var sum = number1 + number2;
// document.write("Sum of " + number1 + " and " + number2 + " is: " + sum);

// Question : 02

// Take two numbers
// var number1 = 20;  // You can change this value
// var number2 = 10;  // You can change this value

// // Perform arithmetic operations
// var difference = number1 - number2;
// var product = number1 * number2;
// var quotient = number1 / number2;
// var modulus = number1 % number2;

// // Show the results in the browser
// document.write("<h1>Arithmetic Operations</h1>");
// document.write("<p>The difference when " + number1 + " is subtracted from " + number2 + " is: " + difference + "</p>");
// document.write("<p>The product of " + number1 + " and " + number2 + " is: " + product + "</p>");
// document.write("<p>The quotient when " + number1 + " is divided by " + number2 + " is: " + quotient + "</p>");
// document.write("<p>The modulus when " + number1 + " is divided by " + number2 + " is: " + modulus + "</p>");

// Question : 03

// var math;
// document.write("Value after variable declaration is: " + math + "<br>");

// math = 5;
// document.write("Initial value: " + math + "<br>");

// math++;
// document.write("Value after increment is: " + math + "<br>");

// math += 7;
// document.write("Value after addition is: " + math + "<br>");

// math--;
// document.write("Value after decrement is: " + math + "<br>");

// var remainder = math % 3;
// document.write("The remainder is : " + remainder + "<br>");

// Question : 04

// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;

// document.write("The cost of buying 5 movie tickets is: " + totalCost + " PKR");

// Question : 05

// var table;
// document.write("<h1>Table of 7</h1> <br>")
// document.write("7 x 1 = 7 <br>");
// document.write("7 x 2 = 14 <br>");
// document.write("7 x 3 = 21 <br>");
// document.write("7 x 4 = 28 <br>");
// document.write("7 x 5 = 35 <br>");
// document.write("7 x 6 = 42 <br>");
// document.write("7 x 7 = 49 <br>");
// document.write("7 x 8 = 56 <br>");
// document.write("7 x 9 = 63 <br>");
// document.write("7 x 10 = 70 <br>");


// Question : 06

// let celsiusTemperature = 30; // Example Celsius temperature

// let fahrenheitFromCelsius = (celsiusTemperature * 9/5) + 32;
// document.write(celsiusTemperature + "°C is " + fahrenheitFromCelsius + "°F <br>");

// let fahrenheitTemperature = 86; // Example Fahrenheit temperature

// let celsiusFromFahrenheit = (fahrenheitTemperature - 32) * 5/9;
// document.write(fahrenheitTemperature + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C");

// Question : 07

// var priceItem1 = 150;
// var priceItem2 = 200;
// var quantityItem1 = 2;
// var quantityItem2 = 1;
// var shippingCharges = 50;
// var totalItem1Cost = priceItem1 * quantityItem1;
// var totalItem2Cost = priceItem2 * quantityItem2;
// var subtotal = totalItem1Cost + totalItem2Cost;
// var totalCost = subtotal + shippingCharges;

// document.write("<h2>Receipt</h2>");
// document.write("Price of item 1: " + priceItem1 + " PKR<br>");
// document.write("Price of item 2: " + priceItem2 + " PKR<br>");
// document.write("Ordered quantity of item 1: " + quantityItem1 + "<br>");
// document.write("Ordered quantity of item 2: " + quantityItem2 + "<br>");
// document.write("Total cost for item 1: " + totalItem1Cost + " PKR<br>");
// document.write("Total cost for item 2: " + totalItem2Cost + " PKR<br><br>");

// document.write("Subtotal: " + subtotal + " PKR<br>");
// document.write("Shipping charges: " + shippingCharges + " PKR<br>");
// document.write("<h3>Total cost: " + totalCost + " PKR</h3>");


// Question : 08

// var totalMarks = 500;
// var marksObtained = 425;
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h2>Percentage Calculation</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%");

// Question : 09

// var amountUSD = 10; 
// var amountSAR = 25;

// var exchangeRateUSDToPKR = 278.64;
// var exchangeRateSARToPKR = 74.26;
// var totalPKR = (amountUSD * exchangeRateUSDToPKR) + (amountSAR * exchangeRateSARToPKR);

// document.write("<h2>Currency Conversion</h2>");
// document.write("1 USD = " + exchangeRateUSDToPKR + " PKR <br> ");
// document.write("1 SAR = " + exchangeRateSARToPKR + " PKR <br><br> ");
// document.write("10 USD = " + 2786.36 + " PKR <br> ");
// document.write("25 SAR = " + 1856.38 + " PKR <br><br> ");
// document.write("Total in Pakistani Rupees: " + totalPKR.toFixed(2) + " PKR");

// Question : 10

// var number = 8;
// var result = ((number + 5) * 10) / 2;

// document.write("<h2>Arithmetic Operations</h2>");
// document.write("Initial number: " + number + "<br>");
// document.write("Result after operations: " + result);

// Question : 11

// var currentYear = 2024;
// var birthYear = 1990;

     
// var ageThisYear = currentYear - birthYear;

// var ageLastYear = ageThisYear - 1;

// document.write("<h1>They are either " + ageLastYear + " or " + ageThisYear + " years old</h1>");


// Question : 12

// var heading = "<h1>The Geometrizer</h1>"
// var circleRadius = "Radius of a circle<br>"

// var radius = 10 ;          
// var pi = 3.142;
                       
// var circumference = 2 * pi * radius;       
// var area = pi * radius * radius;
        
// document.write(heading)
// document.write(circleRadius)              
// document.write("The circumference is " + circumference.toFixed(2));
// document.write("The area is " + area.toFixed(2));


// Question : 13

// var chocolates = "chocolates"; 

// var currentAge = 18; 
// var maxAge = 80; 

// var amountPerDay = 3; 

// var yearsLeft = maxAge - currentAge; 
// var totalAmountNeeded = yearsLeft * 365 * amountPerDay; 

// document.write("<h1>You will need " + totalAmountNeeded + " " + chocolates + " to last you until the ripe old age of " + maxAge + ".</h1>");


// Chapter : 06 MATH EXPRESSIONS
// Question : 01

// Initializing the variable 'a' with the value 10
// var a = 10;

// // Displaying the initial value of 'a'
// document.write("<h2>Result:</h2>");
// document.write("The value of a is: " + a + "<br><hr><br>");

// // Pre-increment operation
// document.write("The value of ++a is: " + ++a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// // Post-increment operation
// document.write("The value of a++ is: " + a++ + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// // Pre-decrement operation
// document.write("The value of --a is: " + --a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// // Post-decrement operation
// document.write("The value of a-- is: " + a-- + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// Question : 02

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// // Initializing variables a and b
// var a = 2, b = 1;

// // Performing the operations and storing the result
// var result = --a - --b + ++b + b--;

// // Logging the values of a, b, and result to the console
// document.write("Value of a:", a + "<br>");
// document.write("Value of b:", b + "<br>");
// document.write("Value of result:", result);


// Question : 03

// var userName = prompt("Please Enter Your username")
// alert("Hello, " + userName + " Welcom to this Website!")

// Question : 04


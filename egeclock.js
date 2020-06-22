var startDate = new Date("June 17, 2020 10:00:00").getTime();   



var Math_countDownDate = new Date("July 10, 2020 10:00:00").getTime();

var Math_delta_startdown = Math_countDownDate - startDate;

//console.log(delta_startdown);

Math_clockege();

function Math_clockege() {

    var now = new Date().getTime();
    
    var distance = Math_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("math-countdown-weeks").innerHTML = 0; 
        document.getElementById("math-countdown-days").innerHTML = 0; 
        document.getElementById("math-countdown-hours").innerHTML = 0; 
        document.getElementById("math-countdown-minutes").innerHTML = 0; 
        document.getElementById("math-countdown-seconds").innerHTML = 0; 

        document.getElementById("math-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/Math_delta_startdown;

        document.getElementById("math-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("math-countdown-weeks").innerHTML = weeks; 
        document.getElementById("math-countdown-days").innerHTML = days; 
        document.getElementById("math-countdown-hours").innerHTML = hours; 
        document.getElementById("math-countdown-minutes").innerHTML = minutes; 
        document.getElementById("math-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('Math_clockege()', 1);
}


var Inf_countDownDate = new Date("July 3, 2020 10:00:00").getTime();

var Inf_delta_startdown = Inf_countDownDate - startDate;

Inf_clockege();

function Inf_clockege() {

    var now = new Date().getTime();
    
    var distance = Inf_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("inf-countdown-weeks").innerHTML = 0; 
        document.getElementById("inf-countdown-days").innerHTML = 0; 
        document.getElementById("inf-countdown-hours").innerHTML = 0; 
        document.getElementById("inf-countdown-minutes").innerHTML = 0; 
        document.getElementById("inf-countdown-seconds").innerHTML = 0; 

        document.getElementById("inf-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/Inf_delta_startdown;

        document.getElementById("inf-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("inf-countdown-weeks").innerHTML = weeks; 
        document.getElementById("inf-countdown-days").innerHTML = days; 
        document.getElementById("inf-countdown-hours").innerHTML = hours; 
        document.getElementById("inf-countdown-minutes").innerHTML = minutes; 
        document.getElementById("inf-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('Inf_clockege()', 1);
}


var Rus_countDownDate = new Date("July 6, 2020 10:00:00").getTime();

var Rus_delta_startdown = Rus_countDownDate - startDate;

Rus_clockege();

function Rus_clockege() {

    var now = new Date().getTime();
    
    var distance = Rus_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("rus-countdown-weeks").innerHTML = 0; 
        document.getElementById("rus-countdown-days").innerHTML = 0; 
        document.getElementById("rus-countdown-hours").innerHTML = 0; 
        document.getElementById("rus-countdown-minutes").innerHTML = 0; 
        document.getElementById("rus-countdown-seconds").innerHTML = 0; 

        document.getElementById("rus-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/Rus_delta_startdown;

        document.getElementById("rus-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("rus-countdown-weeks").innerHTML = weeks; 
        document.getElementById("rus-countdown-days").innerHTML = days; 
        document.getElementById("rus-countdown-hours").innerHTML = hours; 
        document.getElementById("rus-countdown-minutes").innerHTML = minutes; 
        document.getElementById("rus-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('Rus_clockege()', 1);
}


var Rus7_countDownDate = new Date("July 7, 2020 10:00:00").getTime();

var Rus7_delta_startdown = Rus7_countDownDate - startDate;

Rus7_clockege();

function Rus7_clockege() {

    var now = new Date().getTime();
    
    var distance = Rus7_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("rus7-countdown-weeks").innerHTML = 0; 
        document.getElementById("rus7-countdown-days").innerHTML = 0; 
        document.getElementById("rus7-countdown-hours").innerHTML = 0; 
        document.getElementById("rus7-countdown-minutes").innerHTML = 0; 
        document.getElementById("rus7-countdown-seconds").innerHTML = 0; 

        document.getElementById("rus7-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/Rus7_delta_startdown;

        document.getElementById("rus7-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("rus7-countdown-weeks").innerHTML = weeks; 
        document.getElementById("rus7-countdown-days").innerHTML = days; 
        document.getElementById("rus7-countdown-hours").innerHTML = hours; 
        document.getElementById("rus7-countdown-minutes").innerHTML = minutes; 
        document.getElementById("rus7-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('Rus7_clockege()', 1);
}


var Phys_countDownDate = new Date("July 13, 2020 10:00:00").getTime();

var Phys_delta_startdown = Phys_countDownDate - startDate;

Phys_clockege();

function Phys_clockege() {

    var now = new Date().getTime();
    
    var distance = Phys_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("phys-countdown-weeks").innerHTML = 0; 
        document.getElementById("phys-countdown-days").innerHTML = 0; 
        document.getElementById("phys-countdown-hours").innerHTML = 0; 
        document.getElementById("phys-countdown-minutes").innerHTML = 0; 
        document.getElementById("phys-countdown-seconds").innerHTML = 0; 

        document.getElementById("phys-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/Phys_delta_startdown;

        document.getElementById("phys-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("phys-countdown-weeks").innerHTML = weeks; 
        document.getElementById("phys-countdown-days").innerHTML = days; 
        document.getElementById("phys-countdown-hours").innerHTML = hours; 
        document.getElementById("phys-countdown-minutes").innerHTML = minutes; 
        document.getElementById("phys-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('Phys_clockege()', 1);
}
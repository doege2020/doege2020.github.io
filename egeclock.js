/*

    Зачем сюда-то смотреть?
    Иди ботай
    
    Да, тут много говнокода

*/


const startDate = new Date("June 17, 2020 10:00:00").getTime();   



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
        /*
        document.getElementById("inf-countdown-weeks").innerHTML = 0; 
        document.getElementById("inf-countdown-days").innerHTML = 0; 
        document.getElementById("inf-countdown-hours").innerHTML = 0; 
        document.getElementById("inf-countdown-minutes").innerHTML = 0; 
        document.getElementById("inf-countdown-seconds").innerHTML = 0; 

        document.getElementById("inf-egeprogress").value = 100;
        */

        document.getElementById("inf-countdown").style.display = "none";
        document.getElementById("inf-egeprogress").style.display = "none";

        document.getElementById("inf-notify").style.display = "block";
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


var Soc_countDownDate = new Date("July 16, 2020 10:00:00").getTime();

var Soc_delta_startdown = Phys_countDownDate - startDate;

Soc_clockege();

function Soc_clockege() {

    var now = new Date().getTime();
    
    var distance = Soc_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("soc-countdown-weeks").innerHTML = 0; 
        document.getElementById("soc-countdown-days").innerHTML = 0; 
        document.getElementById("soc-countdown-hours").innerHTML = 0; 
        document.getElementById("soc-countdown-minutes").innerHTML = 0; 
        document.getElementById("soc-countdown-seconds").innerHTML = 0; 

        document.getElementById("soc-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/Soc_delta_startdown;

        document.getElementById("soc-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("soc-countdown-weeks").innerHTML = weeks; 
        document.getElementById("soc-countdown-days").innerHTML = days; 
        document.getElementById("soc-countdown-hours").innerHTML = hours; 
        document.getElementById("soc-countdown-minutes").innerHTML = minutes; 
        document.getElementById("soc-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('Soc_clockege()', 1);
}


var Chem_countDownDate = new Date("July 16, 2020 10:00:00").getTime();

var Chem_delta_startdown = Chem_countDownDate - startDate;

Chem_clockege();

function Chem_clockege() {

    var now = new Date().getTime();
    
    var distance = Chem_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("chem-countdown-weeks").innerHTML = 0; 
        document.getElementById("chem-countdown-days").innerHTML = 0; 
        document.getElementById("chem-countdown-hours").innerHTML = 0; 
        document.getElementById("chem-countdown-minutes").innerHTML = 0; 
        document.getElementById("chem-countdown-seconds").innerHTML = 0; 

        document.getElementById("chem-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/Chem_delta_startdown;

        document.getElementById("chem-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("chem-countdown-weeks").innerHTML = weeks; 
        document.getElementById("chem-countdown-days").innerHTML = days; 
        document.getElementById("chem-countdown-hours").innerHTML = hours; 
        document.getElementById("chem-countdown-minutes").innerHTML = minutes; 
        document.getElementById("chem-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('Chem_clockege()', 1);
}


var Bio_countDownDate = new Date("July 20, 2020 10:00:00").getTime();

var Bio_delta_startdown = Bio_countDownDate - startDate;

Bio_clockege();

function Bio_clockege() {

    var now = new Date().getTime();
    
    var distance = Bio_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("bio-countdown-weeks").innerHTML = 0; 
        document.getElementById("bio-countdown-days").innerHTML = 0; 
        document.getElementById("bio-countdown-hours").innerHTML = 0; 
        document.getElementById("bio-countdown-minutes").innerHTML = 0; 
        document.getElementById("bio-countdown-seconds").innerHTML = 0; 

        document.getElementById("bio-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/Bio_delta_startdown;

        document.getElementById("bio-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("bio-countdown-weeks").innerHTML = weeks; 
        document.getElementById("bio-countdown-days").innerHTML = days; 
        document.getElementById("bio-countdown-hours").innerHTML = hours; 
        document.getElementById("bio-countdown-minutes").innerHTML = minutes; 
        document.getElementById("bio-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('Bio_clockege()', 1);
}


var Lang20_countDownDate = new Date("July 20, 2020 10:00:00").getTime();

var Lang20_delta_startdown = Lang20_countDownDate - startDate;

Lang20_clockege();

function Lang20_clockege() {

    var now = new Date().getTime();
    
    var distance = Lang20_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("lang20-countdown-weeks").innerHTML = 0; 
        document.getElementById("lang20-countdown-days").innerHTML = 0; 
        document.getElementById("lang20-countdown-hours").innerHTML = 0; 
        document.getElementById("lang20-countdown-minutes").innerHTML = 0; 
        document.getElementById("lang20-countdown-seconds").innerHTML = 0; 

        document.getElementById("lang20-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/Lang20_delta_startdown;

        document.getElementById("lang20-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("lang20-countdown-weeks").innerHTML = weeks; 
        document.getElementById("lang20-countdown-days").innerHTML = days; 
        document.getElementById("lang20-countdown-hours").innerHTML = hours; 
        document.getElementById("lang20-countdown-minutes").innerHTML = minutes; 
        document.getElementById("lang20-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('Lang20_clockege()', 1);
}


var Lang22_countDownDate = new Date("July 22, 2020 10:00:00").getTime();

var Lang22_delta_startdown = Lang22_countDownDate - startDate;

Lang22_clockege();

function Lang22_clockege() {

    var now = new Date().getTime();
    
    var distance = Lang22_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("lang22-countdown-weeks").innerHTML = 0; 
        document.getElementById("lang22-countdown-days").innerHTML = 0; 
        document.getElementById("lang22-countdown-hours").innerHTML = 0; 
        document.getElementById("lang22-countdown-minutes").innerHTML = 0; 
        document.getElementById("lang22-countdown-seconds").innerHTML = 0; 

        document.getElementById("lang22-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/Lang22_delta_startdown;

        document.getElementById("lang22-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("lang22-countdown-weeks").innerHTML = weeks; 
        document.getElementById("lang22-countdown-days").innerHTML = days; 
        document.getElementById("lang22-countdown-hours").innerHTML = hours; 
        document.getElementById("lang22-countdown-minutes").innerHTML = minutes; 
        document.getElementById("lang22-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('Lang22_clockege()', 1);
}


var Lang23_countDownDate = new Date("July 23, 2020 10:00:00").getTime();

var Lang23_delta_startdown = Lang23_countDownDate - startDate;

Lang23_clockege();

function Lang23_clockege() {

    var now = new Date().getTime();
    
    var distance = Lang23_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("lang23-countdown-weeks").innerHTML = 0; 
        document.getElementById("lang23-countdown-days").innerHTML = 0; 
        document.getElementById("lang23-countdown-hours").innerHTML = 0; 
        document.getElementById("lang23-countdown-minutes").innerHTML = 0; 
        document.getElementById("lang23-countdown-seconds").innerHTML = 0; 

        document.getElementById("lang23-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/Lang23_delta_startdown;

        document.getElementById("lang23-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("lang23-countdown-weeks").innerHTML = weeks; 
        document.getElementById("lang23-countdown-days").innerHTML = days; 
        document.getElementById("lang23-countdown-hours").innerHTML = hours; 
        document.getElementById("lang23-countdown-minutes").innerHTML = minutes; 
        document.getElementById("lang23-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('Lang23_clockege()', 1);
}

var His_countDownDate = new Date("July 13, 2020 10:00:00").getTime();

var His_delta_startdown = His_countDownDate - startDate;

His_clockege();

function His_clockege() {

    var now = new Date().getTime();
    
    var distance = His_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("his-countdown-weeks").innerHTML = 0; 
        document.getElementById("his-countdown-days").innerHTML = 0; 
        document.getElementById("his-countdown-hours").innerHTML = 0; 
        document.getElementById("his-countdown-minutes").innerHTML = 0; 
        document.getElementById("his-countdown-seconds").innerHTML = 0; 

        document.getElementById("his-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/His_delta_startdown;

        document.getElementById("his-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("his-countdown-weeks").innerHTML = weeks; 
        document.getElementById("his-countdown-days").innerHTML = days; 
        document.getElementById("his-countdown-hours").innerHTML = hours; 
        document.getElementById("his-countdown-minutes").innerHTML = minutes; 
        document.getElementById("his-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('His_clockege()', 1);
}

var Lit_countDownDate = new Date("July 3, 2020 10:00:00").getTime();

var Lit_delta_startdown = Lit_countDownDate - startDate;

Lit_clockege();

function Lit_clockege() {

    var now = new Date().getTime();
    
    var distance = Lit_countDownDate - now;

    if (distance <= 0) {
        document.getElementById("lit-countdown-weeks").innerHTML = 0; 
        document.getElementById("lit-countdown-days").innerHTML = 0; 
        document.getElementById("lit-countdown-hours").innerHTML = 0; 
        document.getElementById("lit-countdown-minutes").innerHTML = 0; 
        document.getElementById("lit-countdown-seconds").innerHTML = 0; 

        document.getElementById("lit-egeprogress").value = 100;
    }
            
    else{

        var progress = (now - startDate)/Lit_delta_startdown;

        document.getElementById("lit-egeprogress").value = progress*100;

        //console.log(progress.toFixed(3))

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        days = days - weeks * 7;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((distance % (1000 * 60)));

        var deltaMilliseconds = milliseconds - seconds*1000;

        document.getElementById("lit-countdown-weeks").innerHTML = weeks; 
        document.getElementById("lit-countdown-days").innerHTML = days; 
        document.getElementById("lit-countdown-hours").innerHTML = hours; 
        document.getElementById("lit-countdown-minutes").innerHTML = minutes; 
        document.getElementById("lit-countdown-seconds").innerHTML = seconds; 
    }

    window.setTimeout('Lit_clockege()', 1);
}

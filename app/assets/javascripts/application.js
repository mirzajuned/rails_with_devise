// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.easing.min
//= require jquery.simpleWeather
//= require jquery.simpleWeather.min
//= require jquery-1.8.3.min
//= require moment
//= require bootstrap-datetimepicker
//= require bootstrap-sprockets
//= require_tree .


var tid = setInterval(tagline_vertical_slide, 2500);
function tagline_vertical_slide() {
    var curr = $("#tagline1 ul li.active");
    curr.removeClass("active").addClass("vs-out");
    setTimeout(function () {
        curr.removeClass("vs-out");
    }, 500);

    var nextTag = curr.next('li');
    if (!nextTag.length) {
        nextTag = $("#tagline1 ul li").first();
    }
    nextTag.addClass("active");
}
$.simpleWeather({
    location: 'Sydney',
    woeid: '',
    unit: 'f',
    success: function(weather) {
        html = '<h2>'+weather.city+'<i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        //html += '<ul><li>'+weather.city+'</li>';
        // html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
        // html += '<li class="currently">'+weather.currently+'</li>';
        html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

        $("#weather").html(html);
    },
    error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
    }
});
$.simpleWeather({
    location: 'Delhi',
    woeid: '',
    unit: 'f',
    success: function(weather) {
        html = '<h2>'+weather.city+'<i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        //html += '<ul><li>'+weather.city+'</li>';
        // html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
        // html += '<li class="currently">'+weather.currently+'</li>';
        html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

        $("#weather2").html(html);
    },
    error: function(error) {
        $("#weathe2").html('<p>'+error+'</p>');
    }
});
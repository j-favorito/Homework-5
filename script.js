$(document).ready(function(){
    var currentTime=moment().format('MMMM Do YYYY, h:mm:ss a');
    var currentDay = $("#currentDay");
    var timeBlocks = $(".timeBlocks");
    currentDay.text(currentTime);
    for(var i=0;i<9;i++){
        var hourElement=$("<div>");
        var textElement=$("<textarea>");
        var saveElement=$("<button>");
        hourElement.attr("class","col-lg-2 hour");
        if(i+9<12){
        hourElement.text(i+9+":00 AM");
        }
        else if(i+9===12){
            hourElement.text(i+9+":00 PM");
        }
        else if(i+9>12){
            hourElement.text(i-3+":00 PM");
        }
        textElement.attr("class","col-lg-8 time-block past");
        saveElement.attr("class","col-lg-2 saveBtn fas fa-save");
        timeBlocks.append(hourElement,textElement,saveElement);
    }
});
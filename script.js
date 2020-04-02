$(document).ready(function(){
    let currentTime=moment().format('MMMM Do YYYY, h:mm:ss a');
    let currentTimeBlock=moment("LT"); 
    let currentDay = $("#currentDay");
    let timeBlocks = $(".timeBlocks");
    let savedSchedule =[];
    currentDay.text(currentTime);

    console.log(currentTimeBlock);
    //creates text boxes
    for(let i=0;i<9;i++){
        let hourElement=$("<div>");
        let textElement=$("<textarea>");
        let saveElement=$("<button>");
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
        textElement.addClass("text_"+i)
        saveElement.attr("class","col-lg-2 saveBtn fas fa-save");
        saveElement.addClass("button_"+i)
        let storedSchedule = localStorage.getItem("schedule_"+i);
        textElement.val(storedSchedule);
        timeBlocks.append(hourElement,textElement,saveElement);
    }
    save(0);
    save(1);
    save(2);
    save(3);
    save(4);
    save(5);
    save(6);
    save(7);
    save(8);

function save(button){
    $(".button_"+button).on("click",function(){
        var newText=$(".text_"+button).val();
        localStorage.setItem("schedule_"+button,newText)
    })
}
    

});

// var storedScores = JSON.parse(localStorage.getItem("allSaves"))
// if(storedScores!==null){
//     savedScores.push(storedScores);
// }
// savedScores.push(userData);
// localStorage.setItem("allSaves", JSON.stringify(savedScores));
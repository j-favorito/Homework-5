$(document).ready(function(){
    //retrieves current time from moment
    let currentTime=moment().format('MMMM Do YYYY, h:mm:ss a');
    //retrieves id for the date text
    let currentDay = $("#currentDay");
    //retrieves class to append time blocks to
    let timeBlocks = $(".timeBlocks");
    //saves moment into a variable
    let now=moment();
    //retrieves current hour from moment variable
    let hour = now.get('hour');
    //sets the current time as the currentDay text
    currentDay.text(currentTime);

    //creates text boxes,hour labels, and save buttons
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
        //adds classes to text boxes and save buttons, including index classes
        textElement.attr("class","col-lg-8 time-block");
        textElement.addClass("text_"+i)
        saveElement.attr("class","col-lg-2 saveBtn fas fa-save");
        saveElement.addClass("button_"+i);
        //changes background color of time boxes based on the current hour
        if(hour<9){
            textElement.addClass("future");
        }
        else if(hour>=9  && hour<=17){
            if(hour-9===i){
            textElement.addClass("present");
            }
            else if(hour-9<i){
            textElement.addClass("future");
            }
            else{
            textElement.addClass("past");
            }
        }
        else{
            textElement.addClass("past")
        }
        //sets the text in text boxes as whatever is saved in corresponding schedule local storage
        let storedSchedule = localStorage.getItem("schedule_"+i);
        textElement.val(storedSchedule);
        timeBlocks.append(hourElement,textElement,saveElement);
    }
    //calls a save function depending on which save button is pressed
    for(let i=0;i<9;i++){
        save(i);
    }


    //save function
function save(button){
    $(".button_"+button).on("click",function(){
        //saves text in whichever text area corresponds to the button you clicked
        let newText=$(".text_"+button).val();
        localStorage.setItem("schedule_"+button,newText)
    })
}
    

});

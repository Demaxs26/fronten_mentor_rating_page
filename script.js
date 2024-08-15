

// when the page is fully loaded it create the rate to check
document.addEventListener("DOMContentLoaded", (event) => {
    let option = ``
    for (let i = 0; i <= 4; i++){
        option += `<div class = "option-case" onclick = "f_select(${i})">${i+1}</div>`;
        
    }

    // add html in the div "notation-place"
    document.getElementById("notation-place").innerHTML = option;
  });


// function used when the user click on a rate
function f_select(number){

    
    const note_place = document.getElementById('notation-place').children[number];

    // check if the rate is already selected and unselecte it if its the case
    if ( note_place.classList.contains("selected")){
        note_place.classList.remove("selected");
    }else{
        // check for each rate if his already selectioned and unselected it 
        for (i = 0 ; i <= 4; i++){
            let text_case = document.getElementById('notation-place').children[i];
            if (text_case.classList.contains("selected")){
                text_case.classList.remove("selected");
            }
            
        }
        
        note_place.classList.add("selected");
    }

    

}


//return the selected rate
function f_select_number(){
    // check for all rate if it been selected
    for (i= 0 ; i<=4; i++){
        let text_case = document.getElementById('notation-place').children[i];

        //the note is selected when his "classlist " contain the class "selected"
        if (text_case.classList.contains("selected")){

            // return the selected rate
            return i+1
        }
    }
}


// function used when the user click on the "submit " button
function f_submit(){

    if (f_select_number() == undefined){
        return alert("you must give a grade before submiting !")
    }else{
           //unshow the rating page 
        document.getElementById("section-rating").style.display =  "none"; 

        //add the rate selectionned by the user in the page, using "f_selct_number" to get  the selected rate
        document.querySelector(".information").innerHTML = `You selected ${f_select_number()} out of 5`;

        // show the thanks page
        document.getElementById('section-thank').style.display = "block";
    }
 
}

//listening for the click on the submit button
document.querySelector("button").addEventListener("click", f_submit);


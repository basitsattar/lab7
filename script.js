var form_created=false;
function add_input(type){
    var form = document.getElementById("form");
    
    if(type <7){
        var input = document.createElement("input");
        var name = prompt("Name of input");
        input.name = name;
        input.value = prompt("Value of input");
        
        var label = document.createElement("label");
        label.innerHTML=name;

        if(type ==1){
            input.type = "text";
        }
        if(type ==2){
            input.type = "password";

        } 
        if(type ==3){
            input.type = "number";
        } 
        if(type ==4){
            input.type = "radio";
        } 
        if(type ==5){
            input.type = "checkbox";
        } 
        if(type ==6){
            input.type = "file";
        } 
    }
    if(type ==7){
        var input = document.createElement("textarea");
        input.name = prompt("Name of input");
        input.value = prompt("Value of input");
    }
    if(type ==8){
        var input = document.createElement("keygen");
        input.name = prompt("Name of keygen");
        //input.value = prompt("Value of keygen");
    }
    if(type == 9){
        var input = document.createElement("select");
        input.name = prompt("Name of select element");
        var number = prompt("Enter number of options");
        
        for(i=0;i<number;i++){
            var option = document.createElement("option");
            option.value= prompt("Value of option");
            option.text= prompt("Text of option");
            input.appendChild(option);
        }
    }
    
    if(type == 10){
        var input = document.createElement("datalist");
        input.name = prompt("Name of datalist element");
        input.value = prompt("Value of input");
        var number = prompt("Enter number of datalist elements");
        
        for(i=0;i<number;i++){
            var option = document.createElement("option");
            option.value= prompt("Value of option");
            option.text= prompt("Text of option");
            input.appendChild(option);
        }
    }
    
    //form.insertBefore (label,form.lastChild);
    form.insertBefore (input,form.lastChild);
}

function add_form(){
    
    var container = document.getElementById("form_div");
    var form = document.createElement("form");
    form.id= "form";
    form.action="#";
    var submit = document.createElement("input");
    submit.type="submit";
    submit.name="submit";
    form.appendChild(submit);
    container.appendChild(form);
    form_created= true;
    document.getElementById("actions").style.display ="block";
    document.getElementById("hide").style.display ="none";
}

function add_element(type){
    if(form_created){
        add_input(type);
    }else{
        alert("Please create form first");
    }
}


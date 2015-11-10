var form_created=false;
var json;
function add_input(type){
    var form = document.getElementById("form");
    
    if(type <7){
        var input = document.createElement("input");
        var name = prompt("Name of input");
        input.name = name;
        var value= prompt("Value of input");
        input.value = value;
        
        var label = document.createElement("label");
        label.innerHTML=name;

        if(type ==1){
            input.type = "text";
            json+='{"element":"input", "type":"text","name":"'+name+'","value":"'+value+'"},';
        }
        if(type ==2){
            input.type = "password";
            json+='{"element":"input", "type":"password","name":"'+name+'","value":"'+value+'"},';

        } 
        if(type ==3){
            input.type = "number";
            json+='{"element":"input", "type":"number","name":"'+name+'","value":"'+value+'"},';

        } 
        if(type ==4){
            input.type = "radio";
            json+='{"element":"input", "type":"radio","name":"'+name+'","value":"'+value+'"},';

        } 
        if(type ==5){
            input.type = "checkbox";
            json+='{"element":"input", "type":"checkbox","name":"'+name+'","value":"'+value+'"},';

        } 
        if(type ==6){
            input.type = "file";
            json+='{"element":"input", "type":"file","name":"'+name+'","value":"'+value+'"},';

        } 
    }
    if(type ==7){
        var input = document.createElement("textarea");
        var name= prompt("Name of input");
        input.name = name;
        var value = prompt("Value of input");
        input.value = value;
        json+='{"element":"input", "type":"textarea","name":"'+name+'","value":"'+value+'"},';

    }
    if(type ==8){
        var input = document.createElement("keygen");
        var name = prompt("Name of keygen");
        input.name = name;
        json+='{"element":"input", "type":"textarea","name":"'+name+'","value":""},';
    }
    if(type == 9){
        var input = document.createElement("select");
        var name = prompt("Name of select element");
        input.name = name;
        json+='{"element":"select","name":"'+name+'" ,"options":[';
        var number = prompt("Enter number of options");
        
        for(i=0;i<number;i++){
            var option = document.createElement("option");
            var value = prompt("Value of option");
            var text = prompt("Text of option");
            option.value= value;
            option.text= text;
            
            json+='{"value":"'+value+'","text":"'+text+'"},';
            input.appendChild(option);
        }
        json+=']}';
    }
    
    if(type == 10){
        var input = document.createElement("datalist");
        var name = prompt("Name of datalist element");
        input.name = name;
        var value = prompt("Value of input");
        input.value = value;
        
        json+='{"element":"datalist","name":"'+name+'" , "value":"'+value+'" , "options":[';
        var number = prompt("Enter number of datalist elements");
        
        for(i=0;i<number;i++){
            var option = document.createElement("option");
            option.value= prompt("Value of option");
            option.text= prompt("Text of option");
            json+='{"value":"'+option.value+'","text":"'+option.text+'"},';
            input.appendChild(option);
        }
        json+=']},';
    }
    
    //form.insertBefore (label,form.lastChild);
    form.insertBefore (input,form.lastChild);
    

}

function add_form(){
    
    var container = document.getElementById("form_div");
    var form = document.createElement("form");
    form.id= "form";
    form.action="#";
    form.onsubmit = "submitted()";
    var submit = document.createElement("input");
    submit.type="button";
    submit.name="submit";
    submit.value = "Submit me";
    submit.id = "submit";
    submit.onclick="submitted()";
    form.appendChild(submit);
    container.appendChild(form);
    form_created= true;
    document.getElementById("actions").style.display ="block";
    document.getElementById("hide").style.display ="none";
    
    json = '{"form":[';
    document.getElementById("submit").addEventListener("click", function () {
        submitted();
    });

}

function add_element(type){
    if(form_created){
        add_input(type);
    }else{
        alert("Please create form first");
    }
}
function submitted(){
    json = json.substring(0, json.length - 1);
    json+="]}";
    localStorage.setItem("json", json);
    alert(localStorage.getItem("json"));
}


function readJson(){
    if(!form_created){
        add_form();
    }
    var fetched_json = localStorage.getItem("json");
    var obj=JSON.parse(fetched_json);
    for(var i=0; i<obj.form.length;i++){
        var input = document.createElement(obj.form[i].element);
        input.name = obj.form[i].name;
        input.value = obj.form[i].value;
        input.type = obj.form[i].type;
        form.insertBefore (input,form.lastChild);
    }
    alert(obj.form[0].name);
}

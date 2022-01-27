var fieldEmail;
var fieldPassword;

$(document).ready(function() {
    $("button").click(function() {
        var x = $("form").serializeArray();
        $.each(x, function(i, field) {
            //$("#output").append(field.name + ":"+ field.value + " ");
             fieldEmail = x[0].value;
             fieldPassword = x[1].value;
             if(fieldEmail==" " || fieldPassword==" ")
             {
                 alert("field is empty");
             }
             myFun(fieldEmail,fieldPassword);

        });
    });
});

function myFun(fieldEmail,fieldPassword){
$.getJSON('https://mycode.free.beeceptor.com/list', function(data)
{
    Object.keys(data).forEach(function(key) {
        var value = data[key];
        var key = key;
        if(fieldEmail==key && fieldPassword==value)
        {
            alert("Successfully login");
            window.location.replace("https://vitkar.tech");
            return;
            
        }
        else if(fieldEmail!=key && fieldPassword!=value)
        {
            alert("Wrong Credi")
            return;
        }
       
    });
});
}


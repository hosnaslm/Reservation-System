 document.getElementById('submitDate').addEventListener("click",myfunction);
//var lists = document.getElementsByClassName('list-group');
var day ;
 console.log(persianJs("345").englishNumber()._str);

function myfunction()
{
    day = document.getElementById('inputGroupSelect04').selectedIndex;
    var div = document.getElementById(day);
    console.log(day);
    var input1 = document.getElementById('from').value;
    var input2 = document.getElementById('to').value;
    console.log(input1);
    console.log(input2);

    if(div==null)
    {
        var farsyday = persianJs(day).englishNumber()._str;
        div = document.getElementById('cards');
        var string = '<div  id ="'+day+'" class="list-group">\n' +
            '        <button  type="button" class="list-group-item list-group-item-action active ">\n' +
            '            ۱۳۹۷/۱/'+farsyday+'\n' +
            '        </button>'+
            '<button type="button" class="list-group-item list-group-item-action" >ساعت  '+input1+' تا '+input2+'<img src="x.svg" style="padding-left: 60%"></button>';
        div.insertAdjacentHTML('beforeend',string);

    }
    else
    {

        var string = '<button type="button" class="list-group-item list-group-item-action" >ساعت  '+input1+' تا '+input2+'<img src="x.svg" style="padding-left: 60%"></button>';
        div.insertAdjacentHTML('beforeend',string);
    }


}

 $(document).ready(function(){
     $("#accept").click(function(){
         $("p").css({"background-color": "yellow", "font-size": "200%"});
     });
 });
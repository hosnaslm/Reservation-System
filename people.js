var d = document.getElementById('peopleCards');
var i =2;
var string =' <div  class="list-group">\n' +
    '        <button  type="button" class="list-group-item list-group-item-action active ">\n' +
    '            ۱۳۹۷/۱/۱۳\n' +
    '        </button>\n' +
    '        <button id="timeButton2" type="button" class="list-group-item list-group-item-action" data-toggle="modal" data-target="#exampleModalCenter">ساعت ۱۲ تا ۱</button>\n' +
    '        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">\n' +
    '            <div class="modal-dialog modal-dialog-centered" role="document">\n' +
    '                <div class="modal-content">\n' +
    '                    <div class="modal-header">\n' +
    '                        <h5 class="modal-title" id="exampleModalLongTitle">رزرو </h5>\n' +
    '                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
    '                            <span aria-hidden="true">&times;</span>\n' +
    '                        </button>\n' +
    '                    </div>\n' +
    '                    <div class="modal-body">\n' +
    '                     آیا این زمان را میخواهید؟\n' +
    '                    </div>\n' +
    '                    <div class="modal-footer">\n' +
    '                        <button type="button" class="btn btn-secondary" data-dismiss="modal">خیر</button>\n' +
    '                        <button id="yesbutton2" type="button" class="btn btn-primary" data-dismiss="modal">بله</button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>';
d.insertAdjacentHTML('beforeend',string);

document.getElementById("testyes").addEventListener('click',clickOn);
document.getElementById('backButton').addEventListener('click',function () {
    console.log('clicked3');
    window.location = 'home3.html';
});
// document.getElementById("yesbutton2").addEventListener('click',clickOn2);

// function clickOn2()
// {
//     console.log('clicked2');
//     document.getElementById('timeButton2').disabled=true;
//     document.getElementById('timeButton2').setAttribute("style","background-color: rgba(0,123,255,0.17)");
//
//
// }

 function clickOn()
 {
     console.log('clicked');
       document.getElementById('testtime').disabled=true;
       document.getElementById('testtime').setAttribute("style","background-color: rgba(0,123,255,0.17)");

 }


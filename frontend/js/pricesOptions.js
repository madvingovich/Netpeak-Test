


//make my beauty select block
var selectOptions = document.querySelector('.select-options');

function addOptions (val) {

    // add <options></options>

    if(typeof val !== 'number') throw new Error('function "addOptions" must be called with number parameter');

    for (var i = 1; i <= val; i++) {
        var opt = document.createElement('div');
        opt.classList.add('option');
        opt.innerHTML = i;
        selectOptions.appendChild(opt);
    }
}

addOptions(5);

var select = document.getElementById('select'),
    options = document.querySelectorAll('.option'),
    check = 1;



document.getElementById('options').style.display = "none";

select.style.display = "inline-block";


select.addEventListener('click', function () {
    if(check) {
        selectOptions.style.height = options.length * 40 + 'px';
        select.classList.add('select-active');
        check = 0;
    } else {
        selectOptions.style.height = 0;
        select.classList.remove('select-active');
        check = 1;
    }
});

for (var i = 0; i < options.length; i++) {             //write chosen option is select
    options[i].addEventListener('click',function () {
        select.querySelector('p').innerHTML = this.firstChild.textContent;
    });
}

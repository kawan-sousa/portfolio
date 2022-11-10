var
forItemList = [].slice.call(document.querySelectorAll('.form-item')),
inputLst = [].slice.call(document.querySelectorAll('.form-npt'));

inputLst.pop()
forItemList.pop()

inputLst.forEach((el, index) => {
    
    addEventListener('focusin', inFocus);
    addEventListener('focusout', outFocus);
});

function inFocus(e){
    if(e.target.value.length > 0) return;

    let formField = e.target.closest('.form-field');
    
    formField.classList.add('focus');
}

function outFocus(e){
    if(e.target.value.length > 0) return;
    let formField = e.target.closest('.form-field');
    formField.classList.remove('focus');
}

// form validator
formValidator()

function formValidator(){

    inputLst[0].addEventListener('input', onInput);
    inputLst[1].addEventListener('input', onInput);
}

function onInput(e){
    let
    regEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'),
    el = e.target;
    if(regEx.test(el.textContent)){
        console.log('ok');
    }

    if(el.id == 'npt-name'){
        tstName()
    }
}

function tstName(){
    this.regEx = new RegExp('[a-z,A-z]');

    console.log(regEx.test(el))
}

// console.log(inputLst)
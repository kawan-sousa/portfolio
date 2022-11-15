const
inputLst = [].slice.call(document.querySelectorAll('.form-npt')),
regExLst = {
    name: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
    mail: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    subject: /^.{7,1000}$/,
    text: /^.{30,1000}$/
},
errorMsgLst = {
    name: "apenas letras neste campo!",
    mail: "formato de e-mail inválido!",
    subject: "minimo de 7 caracteres neste campo!",
    text: "minimo de ao menos 30 caracteres no texto!"
}

inputLst.splice(-1)

inputLst.forEach((el) => {
    addEventListener('focusin', onFocus);
    addEventListener('focusout', outFocus);
});

function onFocus(e){
    if(e.target.value.length > 0 || e.target.id == 'npt-submit') return;

    const inptEl = e.target,
    formField = e.target.closest('.form-field');
    formField.classList.add('focus');
}

function outFocus(e){
    if(e.target.id == 'npt-submit') return;
    const inptEl = e.target,
    formField = e.target.closest('.form-field');

    tstName(inptEl, formField);
    if(e.target.value.length > 0) return;
    formField.classList.remove('focus');
}

function tstName(nptEl, frmField){ //using regular expressions tests if the field is valid if invalid, shows an error message
    const
    nptName = nptEl.id.substring(4),
    regEx = new RegExp(regExLst[nptName]),
    frmItem = frmField.closest('.form-item'),
    errorMsgEl = frmItem.querySelector('.field-error');

    if(regEx.test(nptEl.value)) frmItem.classList.remove('invalid');

    else if(nptEl.value == 0) {
        errorMsgEl.textContent = 'todos campos são obrigatórios!';
        frmItem.classList.add('invalid');
    }
    else{
        errorMsgEl.textContent = errorMsgLst[nptName];
        frmItem.classList.add('invalid');
    }
    
}

const submitInptEl = document.querySelector('#npt-submit');

submitInptEl.addEventListener('click', onSubmit);

function onSubmit(e){
    const formIsVld = checkFormValidity();

    if(formIsVld)return;
    else{
        e.preventDefault();
        e.target.closest('.form-item').classList.add('invalid')
    }
}

function checkFormValidity(){
    let validity = true;
    inputLst.forEach((el)=>{
        const
        value = el.value,
        elName = el.id.substring(4),
        regEx = new RegExp(regExLst[elName])

        if(!regEx.test(value)){
            validity = false;
            return;
        } 
    })
    return validity;
}
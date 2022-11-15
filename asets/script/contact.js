const
forItemList = [].slice.call(document.querySelectorAll('.form-item')),
inputLst = [].slice.call(document.querySelectorAll('.form-npt')),
regExLst = {
    name: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
    mail: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    subject: /^.{7,1000}$/,
    text: /^.{20,1000}$/
},
errorMsgLst = {
    name: "não são aceitos caracteres especiais ou números",
    mail: "formato de e-mail inválido",
    subject: "minimo de 7 caracteres neste campo",
    text: "minimo de ao menos 20 caracteres no texto"
}

inputLst.pop()
forItemList.pop()

inputLst.forEach((el, index) => {
    
    addEventListener('focusin', inFocus);
    addEventListener('focusout', outFocus);
});

function inFocus(e){
    if(e.target.value.length > 0) return;

    const inptEl = e.target,
    formField = e.target.closest('.form-field');

    
    formField.classList.add('focus');
}

function outFocus(e){
    const inptEl = e.target,
    formField = e.target.closest('.form-field');

    tstName(inptEl, formField);
    if(e.target.value.length > 0) return;
    formField.classList.remove('focus');
}

function tstName(nptEl, frmField){
    const nptName = nptEl.id.substring(4),
    regEx = new RegExp(regExLst[nptName]),
    errorMsgEl = frmField.closest('.form-item').querySelector('.field-error');

    console.log(regEx.test(nptEl.value));
    if(regEx.test(nptEl.value)) errorMsgEl.classList.remove('active');

    else if(nptEl.value == 0) {
        errorMsgEl.textContent = 'Este campo é obrigatório';
        errorMsgEl.classList.add('active');
    }
    else{
        errorMsgEl.textContent = errorMsgLst[nptName];
        errorMsgEl.classList.add('active');
    }
    
}
const
inputLst = [].slice.call(document.querySelectorAll('.form-npt')),
regExLst = {
    name: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
    mail: /^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}/,
    subject: /^.{7,1000}$/,
    text: /^.{30,1000}$/
},
errorMsgLst = {
    name: "apenas letras neste campo!",
    mail: "formato de e-mail inválido!",
    subject: "minimo de 7 caracteres neste campo!",
    text: "minimo de ao menos 30 caracteres no texto!"
},
form = document.querySelector('.contact-form');
var formData= {
    name: '',
    mail: '',
    subject: '',
    text:''
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

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    const formIsVld = checkFormValidity();

    if(!formIsVld){
        document.querySelector('#form-submit').classList.add('invalid');

        }
        
        //usando uma API envia um e-mail para o dono do site
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "kawansousa.dev@gmail.com",
            Password : "578C9527F8F8A097FD66969B0261C8DA4A04",
            To : 'kawansousa.dev@gmail.com',
            From : "kawansousa.dev@gmail.com",
            Subject : "contact using form portifolio",
            Body : `<b>name: </b>${formData.name}
                    <br>
                    <b>e-mail: </b>${formData.mail}
                    <br>
                    <b>subject: </b>${formData.subject}
                    <br>` + formData.text
        }).then(
          message => alert(message)
        );
    }

function checkFormValidity(){
    let validity = true;
    inputLst.forEach((el)=>{
        const
        value = el.value,
        elName = el.id.substring(4),
        regEx = new RegExp(regExLst[elName])

        formData[elName] = value;

        if(!regEx.test(value)){
            validity = false;
            return;
        } 
    })
    return validity;
}

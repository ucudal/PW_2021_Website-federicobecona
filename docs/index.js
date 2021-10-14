const mailOpenModalBtns = document.getElementsByClassName('mail-modal-open')
const mailCloseModalBtn = document.getElementById('mail-modal-close')
const mailModalContainer = document.getElementById('mail-modal-container')
const mailSendModal = document.getElementById('mail-modal-send')
const mailNotifierModal = document.getElementById('mail-modal-notifier')

const cvOpenModalBtns = document.getElementsByClassName('cv-modal-open')
const cvCloseModalBtn = document.getElementById('cv-modal-close')
const cvModalContainer = document.getElementById('cv-modal-container')
const cvModalText = document.getElementById('cv-modal-text')

let modalFrom_name = document.getElementById('from_name')
let modalMessage = document.getElementById('message')

var listModalTexts = ["Desde el año 2018 estudio la carrera de ingeniería en informática.", 
                    "A principios de 2021 obtuve el título intermedio de analista en informática.", 
                    "Realicé exámenes de cambridge ESOL obteniendo el First en el año 2015."]

for (var i = 0, len = mailOpenModalBtns.length; i < len; i++) {
    mailOpenModalBtns[i].onclick = toggleModalHandler
}
mailCloseModalBtn.onclick = toggleModalHandler

mailSendModal.addEventListener("submit",(e)=>{
    e.preventDefault()
    let templateParams = {
        from_name: modalFrom_name.value,
        message: modalMessage.value
    }
    mailNotifierModal.textContent = "Enviando..."
    emailjs.send('mail', 'template_dfpsj68', templateParams)
    .then(function(response) {
        mailNotifierModal.textContent = "Mensaje enviado"
    }, function(error) {
        mailNotifierModal.textContent = "Ha habido un error"
    });
})

for (let i = 0; i < listModalTexts.length; i++) {
    cvOpenModalBtns[i].addEventListener('click', function() {
        cvToggleModalHandler(listModalTexts[i])
    })
}
cvCloseModalBtn.onclick = cvToggleModalHandler


window.onclick = function(event) {
    if (event.target == mailModalContainer) {
        toggleModalHandler()
    }
    if (event.target == cvModalContainer) {
        cvToggleModalHandler()
    }
}

function toggleModalHandler() {
    toggleModal(mailModalContainer)
    mailNotifierModal.textContent = ""
    modalFrom_name.value = ""
    modalMessage.value = ""
}

function cvToggleModalHandler(text) {
    cvModalText.textContent = text
    toggleModal(cvModalContainer)
}

function toggleModal(modal){
    if(modal.classList.contains("invisible")){
        modal.classList.remove("invisible")
    }else{
        modal.classList.add("invisible")
    }
}
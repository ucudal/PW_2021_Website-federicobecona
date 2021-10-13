const openModalBtn = document.getElementById('modal-open')
const closeModalBtn = document.getElementById('modal-close')
const sendModal = document.getElementById('modal-send')
const notifierModal = document.getElementById('modal-notifier')
const modalContainer = document.getElementById('modal-container')
let modalFrom_name = document.getElementById('from_name')
let modalMessage = document.getElementById('message')
openModalBtn.onclick = toggleModalHandler
closeModalBtn.onclick = toggleModalHandler

window.onclick = function(event) {
    if (event.target == modalContainer) {
        toggleModalHandler()
    }
}

sendModal.addEventListener("submit",(e)=>{
    
    e.preventDefault()
    let templateParams = {
        from_name: modalFrom_name.value,
        message: modalMessage.value
    }
    notifierModal.textContent = "Enviando..."
    emailjs.send('mail', 'template_dfpsj68', templateParams)
    .then(function(response) {
        notifierModal.textContent = "Mensaje enviado"
    }, function(error) {
        notifierModal.textContent = "Ha habido un error"
    });
} )


function toggleModalHandler() {
    if(modalContainer.classList.contains("invisible")){
        modalContainer.classList.remove("invisible")
    }else{
        modalContainer.classList.add("invisible")
    }
    notifierModal.textContent = ""
    modalFrom_name.value = ""
    modalMessage.value = ""
}
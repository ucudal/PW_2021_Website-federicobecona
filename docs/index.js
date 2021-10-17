const mailOpenModalBtns = document.getElementsByClassName('mail-modal-open')
const mailCloseModalBtn = document.getElementById('mail-modal-close')
const mailModalContainer = document.getElementById('mail-modal-container')
const mailSendModal = document.getElementById('mail-modal-send')
const mailNotifierModal = document.getElementById('mail-modal-notifier')

const cvOpenModalBtns = document.getElementsByClassName('cv-modal-open')
const cvCloseModalBtn = document.getElementById('cv-modal-close')
const cvModalContent = document.getElementById('cv-modal-content')
const cvModalContainer = document.getElementById('cv-modal-container')
const cvModalText = document.getElementById('cv-modal-text')

let modalFrom_name = document.getElementById('from_name')
let modalMessage = document.getElementById('message')

var listModalTexts = ["Desde el año 2018 estudio la carrera de ingeniería en informática.", 
                    "A principios de 2021 obtuve el título intermedio de analista en informática.", 
                    "Realicé exámenes ESOL de la Universidad de Cambridge obteniendo el First en el año 2015.  "]
var linksMatrix = [
                ["Proyecto", "Lenguajes y Herramientas", ""],
                ["Inteligencia Artificial I", "Python, SciKitLearn, RapidMiner, Excel", "https://federicobecona.github.io/Machine-Learning-Portfolio/home"],
                ["Sistemas Operativos", "Java", "https://github.com/federicobecona/Operating-Systems"], 
                ["Programación I", "Python", "https://github.com/federicobecona/Programming-I"], 
                ["Programación II", "C#", "https://github.com/federicobecona/Programming-II"],
                ["Física I", "Python", "https://github.com/federicobecona/Physics-I-simulations"],
                ["Programación funcional", "Haskell", "https://github.com/federicobecona/Functional-programming"],
                ["Sistemas embebidos", "C", "https://github.com/federicobecona/Embedded-Systems"],
                ["Bases de datos", "Java", "https://github.com/federicobecona/Databases"]
            ]

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
    cvModalContent.innerHTML = "";
    let p = document.createElement('p')
    p.textContent = listModalTexts[i]
    cvModalContent.appendChild(p)
    if(i==0){
        var myTableDiv = cvModalContent
        var table = document.createElement('TABLE')
        table.style.marginTop = "20px"
        myTableDiv.appendChild(table)
        table.border='1'
        var tableBody = document.createElement('TBODY')
        table.appendChild(tableBody)
        for (let i=0; i<linksMatrix.length; i++){
            var tr = document.createElement('TR')
            tableBody.appendChild(tr)
            for (let j=0; j<2; j++){
                var td = document.createElement('TD')
                var node
                node = document.createTextNode(linksMatrix[i][j])
                td.width='200'
                if(i==0){
                        td.style.fontWeight = 'bold'
                }
                if(j==0 && i!=0){
                        node = document.createElement('a')
                        node.textContent = linksMatrix[i][j]
                        node.style.color = 'blue'
                        node.href = linksMatrix[i][2]
                }
                td.appendChild(node)
                tr.appendChild(td);
            }
        }
    }
    toggleModal(cvModalContainer)
    })
}

cvCloseModalBtn.addEventListener('click', function() {
    toggleModal(cvModalContainer)
})

window.onclick = function(event) {
    if (event.target == mailModalContainer) {
        toggleModalHandler()
    }
    if (event.target == cvModalContainer) {
        toggleModal(cvModalContainer)
    }
}

function toggleModalHandler() {
    toggleModal(mailModalContainer)
    mailNotifierModal.textContent = ""
    modalFrom_name.value = ""
    modalMessage.value = ""
}

function toggleModal(modal){
    if(modal.classList.contains("invisible")){
        modal.classList.remove("invisible")
    }else{
        modal.classList.add("invisible")
    }
}
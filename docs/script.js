var listModalTexts = ["⚡Dato de color: soy de Peñarol"]
var imagesLinks = ["https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0426%2Fr692907_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg"]

const mailOpenModalBtns = document.getElementsByClassName('mailModal__openButton')
const mailCloseModalBtn = document.getElementById('mailModal__closeButton')
const mailModalContainer = document.getElementById('mailModal__container')
const mailSendModal = document.getElementById('mailModal__form')
const mailNotifierModal = document.getElementById('mailModal__notifier')
let modalFrom_name = document.getElementById('mailModal__from_name')
let modalMessage = document.getElementById('mailModal__message')
const cvOpenModalBtns = document.getElementsByClassName('cvModal__openButton')
const cvCloseModalBtn = document.getElementById('cvModal__closeButton')
const cvModalContent = document.getElementById('cvModal__mainContent')
const cvModalContainer = document.getElementById('cvModal__container')
const cvModalText = document.getElementById('cvModal__text')



let url = "https://pw2021-apinode-federicobecona.federicobecona.repl.co/experiencia-laboral"
fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
}).then(function(response) {
    response.text().then(function(ans){
        let exp = JSON.parse(ans)
        let divs = [document.getElementById('exp1'), 
            document.getElementById('exp2'),
         document.getElementById('exp3')
        ]
        for(i=0; i<ans.length; i++){
            if(exp[i]){
                let empresa = document.createElement("p")
                empresa.style.fontWeight = 'bold'
                empresa.style.fontSize = 'x-large'
                let puesto = document.createElement("p")
                let descripcion = document.createElement("p")
                let fechas = document.createElement("p")
                empresa.textContent = exp[i].empresa
                puesto.textContent = exp[i].puesto
                descripcion.textContent = exp[i].descripcion
                fechas.textContent = exp[i].fechaInicio.toString().split('T')[0] + 
                    ", " + exp[i].fechaFin.toString().split('T')[0]
                divs[i].appendChild(empresa)
                divs[i].appendChild(puesto)
                divs[i].appendChild(descripcion)
                divs[i].appendChild(fechas)
            }
        }
    })
})



mailSendModal.addEventListener("submit",(e)=>{
    e.preventDefault()
    let msg = {
        nombreContacto: modalFrom_name.value,
        mensaje: modalMessage.value
    }
    mailNotifierModal.textContent = "Enviando..."
    let url = "https://pw2021-apinode-federicobecona.federicobecona.repl.co/hacer-cookie"
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(msg)
    }).then(function(response) {
        response.text().then(function(res){
            console.log(res)
            mailNotifierModal.textContent = res
        })
    })
})




function toggleModal(modal){
    if(modal.classList.contains("invisible")){
        modal.classList.remove("invisible")
    }else{
        modal.classList.add("invisible")
    }
}
function toggleModalHandler() {
    toggleModal(mailModalContainer)
    mailNotifierModal.textContent = ""
    modalFrom_name.value = ""
    modalMessage.value = ""
}
window.onclick = function(event) {
    if (event.target == mailModalContainer) {
        toggleModalHandler()
    }
    if (event.target == cvModalContainer) {
        toggleModal(cvModalContainer)
    }
}
for (var i = 0, len = mailOpenModalBtns.length; i < len; i++) {
    mailOpenModalBtns[i].onclick = toggleModalHandler
}
mailCloseModalBtn.onclick = toggleModalHandler
cvCloseModalBtn.addEventListener('click', function() {
    toggleModal(cvModalContainer)
})







for (let i = 0; i < listModalTexts.length; i++) {
    cvOpenModalBtns[i].addEventListener('click', function() {
    cvModalContent.innerHTML = ""
    var h = document.createElement('h6')
    h.textContent = listModalTexts[i]
    cvModalContent.appendChild(h)
    if(i==0){
        h.classList.add("font-bold")
        let img = document.createElement('img')
        img.setAttribute('src', imagesLinks[0]);
        img.setAttribute('alt', 'Estadio de Peñarol');
        img.classList.add("rounded-full")
        cvModalContent.appendChild(img)
    }
    toggleModal(cvModalContainer)
    })
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header")   
    header.classList.toggle("sticky-navbar", window.scrollY > 0)
})
const openModalBtn = document.getElementById('modal-open')
const closeModalBtn = document.getElementById('modal-close')
const modalContainer = document.getElementById('modal-container')

openModalBtn.onclick = openModalHandler
closeModalBtn.onclick = closeModalHandler
closeModalHandler()

function openModalHandler() {
    modalContainer.classList.remove("invisible")
}
function closeModalHandler() {
    modalContainer.classList.add("invisible")
}

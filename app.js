$(".card").on("click", function() {
        $(".detail").addClass("active");
});

$(".close-detail").on("click", function() {
        $(".detail").removeClass("active");
});

$(".menu-bar").on("click", function() {
        $(".sidebar").addClass("active");
});

$(".logo").on("click", function() {
        $(".sidebar").removeClass("active");
});

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay');
const main = document.getElementById('main');
const detail = document.getElementById('detail');
const sidebar = document.getElementById('sidebar');

openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
                const modal = document.querySelector(button.dataset.modalTarget);
                openModal(modal)
        })
})

main.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
                closeModal(modal)
        })
})

sidebar.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
                closeModal(modal)
        })
})

closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
                const modal = button.closest('.modal')
                closeModal(modal)
        })
})

function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
}

function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
}


const refs = {
    menu: document.querySelector('.menu-item'),
    nav: document.querySelector('.modal-nav'),
    burger: document.querySelector('.burger-btn'),
    modal: document.querySelector('.header-modal'),
    modalNavList: document.querySelector('.modal-list'),
  };
  
  document.addEventListener('click', menuControl);
  
  function menuControl(event) {
    if (
      refs.menu.contains(event.target) &&
      !refs.nav.classList.contains('is-visible')
    ) {
      refs.nav.classList.add('is-visible');
    } else {
      refs.nav.classList.remove('is-visible');
    }
  }
  
  // ========MOBILE MENU=========
  refs.burger.addEventListener('click', openModalMenu);
  function openModalMenu() {
    refs.modal.classList.add('modal-is-visible');
    document.body.classList.add('no-scroll');
  }
  
  refs.modal.addEventListener('click', closeModalMenu);
  function closeModalMenu(event) {
    if (
      event.target.closest('.modal-close-icon') ||
      event.target.closest('.modal-item') ||
      event.target.closest('.order-btn-modal')
    ) {
      refs.modal.classList.remove('modal-is-visible');
      document.body.classList.remove('no-scroll');
    }
  }
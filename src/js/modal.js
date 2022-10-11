// Get the button that opens the modal
var btn = document.querySelectorAll('button.modal-open-button');

// All page modals
var modals = document.querySelectorAll('.backdrop');

// Get the <span> element that closes the modal
var close = document.getElementsByClassName('modal__close');

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute('href'));
    modal.classList.remove('is-hidden');
  };
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function (e) {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined')
        modals[index].classList.add('is-hidden');
    }
  };
}
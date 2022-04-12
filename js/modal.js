let modal = function () {
  // Beginning of Modal
  let modalContainer = document.querySelector('#modal-container');

  //Function creating modal and elements
  function showModal(title, text, imgSrc) {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let myImage = document.createElement('img');
    myImg.src = imgSrc;
    modal.appendChild(myImage);

    let closeButtonElement = document.createElement('button')
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.creatElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  // Removes modal
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  // Event listener to close modal when Escape pressed
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  // Target set for clicking directly on overlay
  modalContainer.addEventListener('click', (e) ===> {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
//End of Modal

//Adds return statment
return {
  showModal: showModal,
  hideModal: hideModal,
};

})();

// This JavaScript Code controls the popup ability of different profiles on the About Us Page. 
function openPopup(button) {
    var popup = button.nextElementSibling;
    var overlay = document.querySelector('.overlay');
  
    popup.classList.add('show');
    overlay.classList.add('show');
  }
  
  function closePopup(span) {
    var popup = span.closest('.popup');
    var overlay = document.querySelector('.overlay');
  
    popup.classList.remove('show');
    overlay.classList.remove('show');
  }
  
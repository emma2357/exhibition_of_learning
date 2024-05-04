function toggleText(button) {
    var hiddenText = button.nextElementSibling;
    var expandMoreIcon = button.querySelector('.expandMore');
    var expandLessIcon = button.querySelector('.expandLess');
  
    if (hiddenText.classList.contains('hidden-text')) {
      hiddenText.classList.remove('hidden-text');
      expandMoreIcon.style.display = 'none';
      expandLessIcon.style.display = 'inline-block';
    } else {
      hiddenText.classList.add('hidden-text');
      expandMoreIcon.style.display = 'inline-block';
      expandLessIcon.style.display = 'none';
    }
  }
  
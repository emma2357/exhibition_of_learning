function showSidebar() {
    // querySelector: https://www.w3schools.com/jsref/met_document_queryselector.asp
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.add('show-sidebar');
    }
    
    function hideSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.remove('show-sidebar');
    }
    
    //ensuring that the sidebar collapses if the screen is expanded while the sidebar is open. 
    window.addEventListener('resize', function() {
      const screenWidth = window.innerWidth;
    
      if (screenWidth > 800) {
        hideSidebar();
      }
    });
    
    // adding event listenders: https://www.w3schools.com/jsref/met_win_addeventlistener.asp
    window.addEventListener('scroll', function() {
      var navbar = document.getElementById('navbar');
    // Check if the user has scrolled beyond the top of the page
    // window scrollY property: https://www.w3schools.com/jsref/prop_win_scrolly.asp
      if (window.scrollY > 0) {
        navbar.classList.add('nav-shadow'); // Add border class to the navbar
      } 
      else {
        navbar.classList.remove('nav-shadow'); // Remove border class
      }
    });
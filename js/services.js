function clickItem(buttonId, showId, hideId1, hideId2, hideId3) {
    document.getElementById(buttonId).addEventListener('click', function() {
        document.getElementById(showId).style.display = 'block';
        document.getElementById(hideId1).style.display = 'none';
        document.getElementById(hideId2).style.display = 'none';
        document.getElementById(hideId3).style.display = 'none';
    });
}

// Adding event listeners for buttons
clickItem('mobileApp', 'commerceService', 'responsiveService', 'cmsSystemService', 'DevelopmentService');
clickItem('webDev', 'responsiveService', 'cmsSystemService', 'DevelopmentService', 'commerceService' );
clickItem('gameDev', 'cmsSystemService', 'responsiveService', 'DevelopmentService', 'commerceService');
clickItem('development' , 'DevelopmentService', 'cmsSystemService', 'responsiveService', 'commerceService' )
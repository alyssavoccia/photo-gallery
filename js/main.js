/*=======================
   SEARCH BAR
=======================*/

$(document).ready(function() {
    var images = document.getElementsByTagName('a');
    $('#search-input').on('keyup', function() {
        // Stores users input into search variable
        var search = $(this).val().toLowerCase();
        // Check for string in the description
        for (i = 0; i < images.length; i++) {
            textVal = images[i].getAttribute('data-caption');
            if (textVal.toLowerCase().indexOf(search) > -1) {
                images[i].style.display = '';
            } else {
                images[i].style.display = 'none';
            }
        }
    });
});



/*=======================
   FANCYBOX
=======================*/

$('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    buttons: [
        "close"
    ]
});
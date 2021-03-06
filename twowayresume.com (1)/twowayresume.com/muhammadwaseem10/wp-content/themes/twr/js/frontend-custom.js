jQuery('.gallery-item').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});

jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});

jQuery('.single-item').magnificPopup({
    type: 'image',
});
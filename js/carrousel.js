const flktyBanner = new Flickity('.banner-slider', {
        // options
        pageDots: true,
        resize: true,
        contain: true,
        setGallerySize: false
});


const flkty = new Flickity('.categorias__carrousel', {
        // options
        pageDots: false,
        resize: true,
        contain: true,
        groupCells: true,
        groupCells: window.innerWidth <= 1024 ? 4 : 5,

});

const flkty2 = new Flickity('.mais-vendidos__carrousel', {
        // options
        pageDots: false,
        resize: false,
        contain: true,

});

const flkty3 = new Flickity('.melhores-ofertas__carrousel', {
        // options
        pageDots: false,
        resize: true,
        contain: true,

});

const flkty4 = new Flickity('.tambem-compraram__carrousel', {
        // options
        pageDots: false,
        resize: true,
        contain: true,

});

const flkty5 = new Flickity('.lojas-parceiras__container', {
        // options
        pageDots: false,
        resize: true,
        contain: true,

});

const flkty6 = new Flickity('.produtos-patrocionados__carrousel', {
        // options
        pageDots: false,
        resize: true,
        contain: true,

});
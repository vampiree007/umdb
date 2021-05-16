var slider = tns({
    container: '.my-slider',
    items: 1,
    controls: false,
    controlsContainer: ['.prev', '.next'],
    nav: false,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 5
      },
      1300:{
        items: 5
      }
    }
});

const gotoPrev = () => {
    slider.goTo('prev');
}
const gotoNext = () => {
    slider.goTo('next');
}

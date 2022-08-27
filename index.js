$('.link').click(function () {
  $('.link').addClass('active').not(this).removeClass('active');
});

let current = 0;
let left = 37.5;
let top = 300;
const container = $('.slider-container');
let slide = $('.slider-item');
slide.eq(current).attr('id', 'focus');

if (current == 0) {
  $('#left').css('display', 'none');
}

if (window.screen.width < 500) {
  $('#right').click(() => {
    if (current < slide.length - 1) {
      current += 1;
      top -= 110;
      slide.eq(current).attr('id', 'focus');
      slide.not(slide.eq(current)).removeAttr('id');
      slide.eq(current).css('transform', `translateY(${top}%)`);
      slide
        .not(slide.eq(current))
        .css('transform', `translateY(${top}%) scale(0.6)`);
    }
    if (current != 0) {
      $('#left').css('display', 'initial');
    }
    if (current == slide.length - 1) {
      $('#right').css('display', 'none');
    }
  });

  $('#left').click(() => {
    if (current > 0) {
      current -= 1;
      top += 110;
      slide.eq(current).attr('id', 'focus');
      slide.not(slide.eq(current)).removeAttr('id');
      slide.eq(current).css('transform', `translateY(${top}%)`);
      slide
        .not(slide.eq(current))
        .css('transform', `translateY(${top}%) scale(0.6)`);
    }
    if (current == 0) {
      $('#left').css('display', 'none');
    }
    if (current != slide.length - 1) {
      $('#right').css('display', 'initial');
    }
  });
} else {
  slide.eq(current).css('transform', `translate(${left}%)`);
  $('#right').click(() => {
    if (current < slide.length - 1) {
      current += 1;
      left -= 101;
      slide.eq(current).attr('id', 'focus');
      slide.not(slide.eq(current)).removeAttr('id');
      slide.eq(current).css('transform', `translate(${left}%)`);
      slide
        .not(slide.eq(current))
        .css('transform', `translate(${left}%) scale(0.6)`);
    }
    if (current != 0) {
      $('#left').css('display', 'initial');
    }
    if (current == slide.length - 1) {
      $('#right').css('display', 'none');
    }
  });

  $('#left').click(() => {
    if (current > 0) {
      current -= 1;
      left += 101;
      slide.eq(current).attr('id', 'focus');
      slide.not(slide.eq(current)).removeAttr('id');
      slide.eq(current).css('transform', `translate(${left}%)`);
      slide
        .not(slide.eq(current))
        .css('transform', `translate(${left}%) scale(0.6)`);
    }
    if (current == 0) {
      $('#left').css('display', 'none');
    }
    if (current != slide.length - 1) {
      $('#right').css('display', 'initial');
    }
  });
}

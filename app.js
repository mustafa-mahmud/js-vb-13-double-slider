'use strict';
const _0xdd58 = [
  'style',
  '23UyaVFu',
  '102224QizXXa',
  '449nIOleN',
  'translateY(',
  '274wNgupQ',
  '.up-button',
  '11794hzqfKc',
  'down',
  '1Flfzzk',
  '183987BdqFPM',
  '1hLiQet',
  '.slider-container',
  '.down-button',
  'querySelectorAll',
  '2SWkDfa',
  '123190EKSIph',
  '269081HaQeJb',
  '.left-slide',
  'px)',
  'addEventListener',
  'transform',
  'click',
  '.right-slide',
  '77914jJFbHH',
  'div',
  '1TNierg',
  'querySelector',
];
const _0x4efb39 = _0xe26c;
(function (_0x3e2894, _0x33cc00) {
  const _0x2630f5 = _0xe26c;
  while (!![]) {
    try {
      const _0x4ce5a6 =
        parseInt(_0x2630f5(0x110)) * -parseInt(_0x2630f5(0x118)) +
        parseInt(_0x2630f5(0x10e)) * -parseInt(_0x2630f5(0x108)) +
        parseInt(_0x2630f5(0x112)) * parseInt(_0x2630f5(0x109)) +
        parseInt(_0x2630f5(0x10c)) * parseInt(_0x2630f5(0x10a)) +
        -parseInt(_0x2630f5(0x116)) * -parseInt(_0x2630f5(0x103)) +
        parseInt(_0x2630f5(0x111)) +
        -parseInt(_0x2630f5(0x105)) * -parseInt(_0x2630f5(0x117));
      if (_0x4ce5a6 === _0x33cc00) break;
      else _0x3e2894['push'](_0x3e2894['shift']());
    } catch (_0x4ac2b1) {
      _0x3e2894['push'](_0x3e2894['shift']());
    }
  }
})(_0xdd58, 0x241c8);
function _0xe26c(_0x33c223, _0x174200) {
  _0x33c223 = _0x33c223 - 0xfd;
  let _0xdd5899 = _0xdd58[_0x33c223];
  return _0xdd5899;
}
const sliderContainer = document['querySelector'](_0x4efb39(0x113)),
  slideRight = document[_0x4efb39(0x106)](_0x4efb39(0x102)),
  slideLeft = document[_0x4efb39(0x106)](_0x4efb39(0xfd)),
  upButton = document['querySelector'](_0x4efb39(0x10d)),
  downButton = document[_0x4efb39(0x106)](_0x4efb39(0x114)),
  slidesLength = slideRight[_0x4efb39(0x115)](_0x4efb39(0x104))['length'];
let index = 0x0;
slideLeft[_0x4efb39(0x107)]['top'] = '-' + (slidesLength - 0x1) * 0x64 + 'vh';
function changeSlide(_0x4f8871) {
  const _0x15cc22 = _0x4efb39,
    _0x1b0748 = sliderContainer['clientHeight'];
  _0x4f8871 === 'up' && (index++, index > slidesLength - 0x1 && (index = 0x0)),
    _0x4f8871 === 'down' &&
      (index--, index < 0x0 && (index = slidesLength - 0x1)),
    (slideRight[_0x15cc22(0x107)][_0x15cc22(0x100)] =
      'translateY(-' + index * _0x1b0748 + _0x15cc22(0xfe)),
    (slideLeft[_0x15cc22(0x107)][_0x15cc22(0x100)] =
      _0x15cc22(0x10b) + index * _0x1b0748 + 'px)');
}
upButton[_0x4efb39(0xff)]('click', () => changeSlide('up')),
  downButton[_0x4efb39(0xff)](_0x4efb39(0x101), () =>
    changeSlide(_0x4efb39(0x10f))
  );
console.log(123);

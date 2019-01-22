export const environment = {
  production: true,
  pins: [2, 3, 4, 17, 27, 22, 10, 9, 11, 14, 15, 18, 23, 24, 25, 8, 7],
  webSocketUrl: '/ws',
  defaultSequence: [
    [true, false, true, false, false, false, false, false],
    [false, false, true, false, false, false, false, false],
    [false, true, true, false, false, false, false, false],
    [false, false, true, true, false, false, false, false],
    [true, false, true, false, false, false, false, false],
    [false, false, true, false, false, false, false, false],
    [false, true, true, false, false, false, false, false],
    [false, false, true, false, true, false, false, false],
  ]
};

document.addEventListener('DOMContentLoaded', () => {

  var targetDateGMT = new Date('2024-06-13T00:00:00Z');
  var currentDateGMT = new Date();
  var timeDifference = currentDateGMT.getTimezoneOffset() * 60 * 1000;
  var targetDateAdjusted = new Date(targetDateGMT.getTime() + timeDifference);
  var twoDaysFromNow = (targetDateAdjusted.getTime() / 1000) + (86400);

  var flipdown = new FlipDown(twoDaysFromNow)
    .start()
    .ifEnded(() => {
      console.log('O contador chegou ao fim!');
    });

  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  }, 5000);
});


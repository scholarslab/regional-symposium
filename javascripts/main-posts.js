var API_KEY = 'ABQIAAAAioVG4cScdJ2Csnny8hxlzRQ0k7LmwNWN1KPzdPryee6GpBC_0hRQjOPG8jfV_sgUu5ehe3wi4vZkdA';
$(document).ready(function () {
  $('#blog').rssfeed('http://www.scholarslab.org/tag/praxis-program/feed/', {
    limit: 5,
    titletag: 'h1',
    snipett: true,
    date: false,
    more: true,
    header: false,
    key: API_KEY,
  });
});


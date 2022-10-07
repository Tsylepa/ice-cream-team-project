$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

// 1. В терміналі прописати команду "npm i jquery"
// 2. Створити у папці js окремий файл, наприклад, "slick.js" і вставити в нього цей код
// 3. Підключити його до index.js
// 4. Підключити у head наступні лінки
//    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
//    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" />
// 5. Підключити перед закриваючим тегом </body> наступні лінки
//    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
//    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
//    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
// 6. Задати клас "one-time" на батьківський елемент (div чи ul) та огорнути необхідні елементи у теги <div></div>.
//Після цього, при кликі на пагінацію чи перетягування мишкою, картки будуть гортатися

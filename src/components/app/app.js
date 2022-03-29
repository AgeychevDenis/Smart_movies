import Header from '../header/header';
import Promo from '../promo/promo';
import Content from '../content/content'
import Footer from '../footer/footer';

import './app.scss';
import './fonts.scss';

function App() {

   let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
   function addTouchClass() {
      if (isMobile.any()) document.documentElement.classList.add('touch');
      else {
         document.documentElement.classList.add('mouse');
      }
   }

   addTouchClass();

   const data = [
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/promo-img_1.jpg', rating: '7,2', year: '2021', country: 'Россия', time: '2 часа 06 минут', title: 'Небо', subtitle: 'Боевик, драма' },
      { imageUrl: 'https://ie.wampi.ru/2022/03/29/promo-img_2.jpg', rating: '7,8', year: '2020', country: 'Россия', time: '54 митуты/серия', title: 'Перевал Дятлова', subtitle: 'Триллер' },
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/promo-img_5.jpg', rating: '7,7', year: '2021', country: 'США, Канада, Венгрия', time: '2 час 35 минут', title: 'Дюна', subtitle: 'Фантастика, боевик, драма' },
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/promo-img_3.jpg', rating: '7,6', year: '2021', country: 'Россия', time: '52 митуты/серия', title: 'Триггер', subtitle: 'Драма' },
      { imageUrl: 'https://ie.wampi.ru/2022/03/29/promo-img_4.jpg', rating: '7,5', year: '2020', country: 'Россия', time: '60 митуты/серия', title: 'Ваша честь', subtitle: 'Триллер, драма, криминал' },
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/promo-img_6.webp', rating: '7,2', year: '2021', country: 'Великобритания, США', time: '1 час 55 минут', title: 'Финч', subtitle: 'Фантастика, драма' },
   ];

   const dataCollection = [
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/item-1.webp', title: 'Лучшие фильмы гoда', subtitle: 'От народной комедии «Батя» до грандиозного фэнтези «Дюна»: собрали 21 лучший фильм, которые зрители Smart выбирали чаще других в уходящем году.' },
      { imageUrl: 'https://ie.wampi.ru/2022/03/29/item-2.webp', title: 'Супергеройское кино', subtitle: 'Их работа — спасать мир! Герои Marvel, DC и других киновселенных в одной коллекции: от Железнего человека до злодейки Харли Квинн.' },
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/item-3.webp', title: 'Ретро-фильмы и сериалы', subtitle: 'Коллекция стильных и завораживающих фильмов и сериалов о невероятной жизни в таком разнообразном XX веке.' },
      { imageUrl: 'https://ie.wampi.ru/2022/03/29/item-4.webp', title: 'Фильмы про отцов', subtitle: 'Папа может всё что угодно: коллекция лучших фильмов про отношения отцов и детей.' },
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/item-5.webp', title: 'Сериалы про маньяков', subtitle: 'Завораживающее зло: смотрите долгожданное продолжение культового сериала «Декстер» и другие истории о беспощадных убийцах.' },
      { imageUrl: 'https://ie.wampi.ru/2022/03/29/item-6.webp', title: 'Фильмы про исчезновения', subtitle: 'Неизвестность хуже всего: коллекция историй о пропавших людях и тех, кто пытается их найти.' },
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/item-7.webp', title: 'Фильмы про экспедиции', subtitle: 'Герои этих фильмов готовы отправиться на край света и рискнуть жизнью ради великих открытий и древних сокровищ. Собрали коллекцию лучших фильмов про первооткрывателей, исследователей и золотоискателей.' },
      { imageUrl: 'https://ie.wampi.ru/2022/03/29/item-8.webp', title: 'Оскар-2021: лауреаты', subtitle: 'Победители главной кинопремии года' },
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/item-9.webp', title: 'Фильмы Кристофера Нолана', subtitle: 'Коллекция фильмов главного режиссёра-визионера современности: он переосмыслил историю о Бэтмене в культовой трилогии о Тёмном рыцаре,соревновался с Кубриком в «Интерстелларе» и озадачил всех финалом «Начала».' },
   ];

   return (
      <div className="page">
         <Header />
         <Promo data={data} />
         <Content dataCollection={dataCollection} />
         <Footer />
      </div>
   );
}

export default App;

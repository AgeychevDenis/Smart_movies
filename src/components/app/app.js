import Header from '../header/header';
import Promo from '../promo/promo';
import Content from '../content/content'
import Footer from '../footer/footer';
import Device from '../../modules/device';

import './app.scss';
import './fonts.scss';

function App() {

   Device();

   const data = [
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/promo-img_1.jpg', rating: '7,2', id: 1, year: '2021', country: 'Россия', time: '2 часа 06 минут', title: 'Небо', subtitle: 'Боевик, драма' }
   ];

   const dataCollection = [
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/item-1.webp', title: 'Лучшие фильмы гoда', id: 1, subtitle: 'От народной комедии «Батя» до грандиозного фэнтези «Дюна»: собрали 21 лучший фильм, которые зрители Smart выбирали чаще других в уходящем году.' },
      { imageUrl: 'https://ie.wampi.ru/2022/03/29/item-2.webp', title: 'Супергеройское кино', id: 2, subtitle: 'Их работа — спасать мир! Герои Marvel, DC и других киновселенных в одной коллекции: от Железнего человека до злодейки Харли Квинн.' },
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/item-3.webp', title: 'Ретро-фильмы и сериалы', id: 3, subtitle: 'Коллекция стильных и завораживающих фильмов и сериалов о невероятной жизни в таком разнообразном XX веке.' },
      { imageUrl: 'https://ie.wampi.ru/2022/03/29/item-4.webp', title: 'Фильмы про отцов', id: 4, subtitle: 'Папа может всё что угодно: коллекция лучших фильмов про отношения отцов и детей.' },
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/item-5.webp', title: 'Сериалы про маньяков', id: 5, subtitle: 'Завораживающее зло: смотрите долгожданное продолжение культового сериала «Декстер» и другие истории о беспощадных убийцах.' },
      { imageUrl: 'https://ie.wampi.ru/2022/03/29/item-6.webp', title: 'Фильмы про исчезновения', id: 6, subtitle: 'Неизвестность хуже всего: коллекция историй о пропавших людях и тех, кто пытается их найти.' },
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/item-7.webp', title: 'Фильмы про экспедиции', id: 7, subtitle: 'Герои этих фильмов готовы отправиться на край света и рискнуть жизнью ради великих открытий и древних сокровищ. Собрали коллекцию лучших фильмов про первооткрывателей, исследователей и золотоискателей.' },
      { imageUrl: 'https://ie.wampi.ru/2022/03/29/item-8.webp', title: 'Оскар-2021: лауреаты', id: 8, subtitle: 'Победители главной кинопремии года' },
      { imageUrl: 'https://ia.wampi.ru/2022/03/29/item-9.webp', title: 'Фильмы Кристофера Нолана', id: 9, subtitle: 'Коллекция фильмов главного режиссёра-визионера современности: он переосмыслил историю о Бэтмене в культовой трилогии о Тёмном рыцаре,соревновался с Кубриком в «Интерстелларе» и озадачил всех финалом «Начала».' },
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

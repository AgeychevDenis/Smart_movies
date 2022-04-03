// class TheMovieService {
//    _apiKey = 'api_key=95888346-d31c-438f-b3b4-23ac62a27afd'
//    getResource = async (url) => {
//       let res = await fetch(url);

//       if (!res.ok) {
//          throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//       }

//       return await res.json();
//    }

//    getAllCharacters = () => {
//       return this.getResource(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=JANUARY`);
//    }

//    getCharacter = (id) => {
//       return this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?&apikey=d4e215a4239d8b42eba7a5da558a9128`);
//    }
// }

// export default TheMovieService;

class KinopoiskService {
   _apiKey = '95888346-d31c-438f-b3b4-23ac62a27afd';
   _apiBase = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';

   getMovies(_apiBase);

   getAllCharacters = async (url) => {
      let res = await fetch(url);

      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json();
   }

   getAllCharacters = () => {
      return this.getResource(this._apiBase);
   }

   // async function getMovies(url) {
   // const resp = await fetch(url, {
   //    headers: {
   //       'Content-Type': 'application/json',
   //       'X-API-KEY': _apiKey,
   //    }
   // });
   // const respData = await resp.json();
   // console.log(respData);
}



export default KinopoiskService;
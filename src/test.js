const KEY = "45ea7996";

fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
  .then((res) => res.json())
  .then((data) => console.log(data?.Search));

// const fetchLstFilm = async () => {
//   console.log("prepare call fetching ...");
//   const url = `http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`;
//   try {
//     const promiseResponse = fetch(url).then((res) => {
//       // ve vung so 1
//     });

//     const promiseResponse2 = fetch(url2).then((res) => {
//       // consloe log debu
//     });

//     const results = await Promise.any([promiseResponse, promiseResponse2]);

//     if (response?.status === 200) {
//       const data = await response.json();
//       const lstFilm = data?.["Search"];

//       console.log(lstFilm?.length);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchLstFilm();

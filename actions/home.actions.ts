"use server"

export async function GetActionMovies (genre: string, page: string) {
    
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTQ3OWFmNmVjZTgyNjVjZDUwNGJhMDRmMjNjZTZlZiIsInN1YiI6IjY1OGRhMDM0MWIxZjNjNTkzN2ZjZmMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3ZJdRTBmBvn6wkDBWUWBdYcT0WUCOJrwnO66Un8vQmo'
    }
  };
  
  let data = fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28', options)
    .then(response => response.json())
    .then(response => {return response.results})
    .catch(err => console.error(err));
    
    return data
}
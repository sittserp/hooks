export const getDetails = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json());
}; 

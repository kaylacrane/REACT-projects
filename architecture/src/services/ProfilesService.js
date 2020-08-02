const ENDPOINT = 'https://randomuser.me/api/?results=50';

const fetchProfiles = () => fetch(ENDPOINT).then((response) => response.json());
export { fetchProfiles };

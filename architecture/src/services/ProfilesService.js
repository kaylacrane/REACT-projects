const ENDPOINT = 'https://randomuser.me/api/?results=20';

const fetchProfiles = () => fetch(ENDPOINT).then((response) => response.json());
export { fetchProfiles };

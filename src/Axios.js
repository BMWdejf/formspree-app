import axios from 'axios';

export const fetchProjects = async () => {
  try {
    const response = await axios.get('https://django-tutorial-one.vercel.app/projects/'); // Zde nahraďte 'URL_API' skutečnou URL vaší API
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the data!', error);
    throw error;
  }
};

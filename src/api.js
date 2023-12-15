const fetchData = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

export default fetchData;
async function fetchData() {
  try {
    const response = await fetch(
      "https://api-food.dev.fd-squad.com/api/v1/rest/currencies"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

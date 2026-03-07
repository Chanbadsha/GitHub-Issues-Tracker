export const loadData = async () => {
  try {
    const res = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/issues",
    );

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log("Failed to load data", error);
  }
};

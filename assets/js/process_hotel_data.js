const fs = require('fs').promises; // Using promises version for async/await

const fetchData = async () => {
  try {
    // Read the file using fs.readFile
    let data = await fs.readFile('./hotels_data.json', 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
};

const processData = async () => {
  const allHotelData = await fetchData();
  const processedData = [];

  allHotelData.forEach(hotelData => {
    const newImageSrcArray = generateImageSrcArray(hotelData);
    hotelData.imageSrc = newImageSrcArray;

    processedData.push(hotelData);
  });

  await writeDataToFile('hotel_processed_data.json', processedData);
};

const generateImageSrcArray = hotelData => {
  const hotelName = hotelData.name;
  const newHotelName = hotelName.replace(/\s+/g, '_'); // Replace all whitespace with underscore
  const imageSrcArray = [];
  for (let i = 1; i <= 2; i++) {
    const imageUrl = `/assets/images/hotel_images/${newHotelName}${i}.jpg`;
    imageSrcArray.push(imageUrl);
  }
  return imageSrcArray;
};

const writeDataToFile = async (filename, data) => {
  try {
    await fs.writeFile(filename, JSON.stringify(data));
    console.log(`Data written to file ${filename}`);
  } catch (error) {
    console.error(error);
  }
};

processData();

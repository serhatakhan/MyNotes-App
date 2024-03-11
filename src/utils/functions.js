// Add Note sayfasında eklenen her bir nota id oluşturan fonk.
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) * min);
};

export default getRandomNumber;

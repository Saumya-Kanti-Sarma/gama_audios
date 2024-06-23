const url = 'https://youtube-to-mp4-mp3.p.rapidapi.com/audio-info/kJQP7kiw5Fk?si=OLSbvzPZFgh1KiDr';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '80788fe660msh2a2d0abcc31a601p196e5bjsnff5e45309623',
    'x-rapidapi-host': 'youtube-to-mp4-mp3.p.rapidapi.com'
  }
};

async function roshan() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
roshan();

// https://youtu.be/
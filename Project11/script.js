const form = document.getElementById('image-generator');
const inputText = document.getElementById('input-text');
const imageContainer = document.getElementById('image-container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const searchTerm = inputText.value.trim();
  const response = await fetch(`https://source.unsplash.com/1600x900/?${searchTerm}`);
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  const img = document.createElement('img');
  img.src = url;
  imageContainer.innerHTML = '';
  imageContainer.appendChild(img);
});
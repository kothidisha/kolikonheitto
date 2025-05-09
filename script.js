document.getElementById('flipButton').addEventListener('click', function() {
  const tulos = Math.random() < 0.5 ? 'Kruuna' : 'Klaava';
  document.getElementById('result').textContent = `Tulos: ${tulos}`;
});

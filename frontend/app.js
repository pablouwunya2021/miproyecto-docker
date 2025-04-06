fetch('http://localhost:3000/api/data')
  .then(res => res.json())
  .then(data => {
    document.getElementById('data').innerHTML = `
      <p>${data.message}</p>
      <p>Hora de la base de datos: ${data.time}</p>
    `;
  });
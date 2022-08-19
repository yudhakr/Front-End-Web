const judul = document.getElementById('judul');
judul.style.color = 'white';
judul.style.backgroundColor = 'gray';
judul.innerHTML = "Hallo Sayang";

const p = document.getElementsByTagName('p');
// p[2].style.backgroundColor = 'lightblue';

for( let i = 0;i<p.length;i++){
    p[i].style.backgroundColor = 'lightblue';
}
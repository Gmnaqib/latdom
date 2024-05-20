function increment() {
    document.getElementById('count').innerText++;

    if (document.getElementById('count').innerText == 7) {
        const hiddenMessage = document.createElement('h1');
        hiddenMessage.innerText = "Hola Kalian semua";
        const konten = document.querySelector('.contents');
        konten.appendChild(hiddenMessage);
    } else if (document.getElementById('count').innerText == 10){
        const hiddenMessage2 = document.createElement('h1');
        hiddenMessage2.innerText = "Halo anjing, aku kucing";
        const konten = document.querySelector('.contents');
        konten.appendChild(hiddenMessage2);
    }
}

document.getElementById('incrementButton').onclick = increment;
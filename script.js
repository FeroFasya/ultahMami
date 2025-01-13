// Mulai confetti setelah halaman dimuat
window.onload = function() {
    // Pastikan Confetti bekerja tanpa harus menambahkan canvas ke HTML langsung
    confetti({
        particleCount: 100,  // Jumlah confetti yang jatuh
        spread: 70,  // Penyebaran confetti
        origin: { y: 0.6 },  // Titik asal confetti (sedikit lebih rendah)
        colors: ['#ff6347', '#ff8c00', '#ff4500']  // Warna confetti
    });
};



window.onload = function () {
    // Mulai confetti langsung saat halaman dimuat
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6347', '#ff8c00', '#ff4500']
    });

    // Bikin emoji-emoji random
    const emojiContainer = document.createElement('div');
    emojiContainer.className = 'balloons';
    document.body.appendChild(emojiContainer);

    // List emoji yang dipake
    const emojis = ['🎈', '🎂', '🎁', '🥳', '🎉', '💖'];

    // Buat emoji muncul secara acak
    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.animationDelay = Math.random() * 5 + 's';
        emoji.style.color = getRandomColor();
        emojiContainer.appendChild(emoji);
    }
};

// Fungsi acak warna untuk emoji
function getRandomColor() {
    const colors = ['#ff6b6b', '#feca57', '#54a0ff', '#1dd1a1', '#5f27cd'];
    return colors[Math.floor(Math.random() * colors.length)];
}


// Fungsi acak warna
function getRandomColor() {
    const colors = ['#ff6b6b', '#feca57', '#54a0ff', '#1dd1a1', '#5f27cd'];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById('confettiBtn').addEventListener('click', function() {
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#ffa502', '#70a1ff', '#1dd1a1']
    });
});


const text = "はじめまして。mojipotatoです。";
const container = document.getElementById('text-container');
const blur = document.getElementById('cursor-blur');

// 1. 文字を1文字ずつ分割してspanタグを生成
text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === " " ? "\u00A0" : char; // スペース対応
    span.classList.add('char');
    span.style.animationDelay = `${i * 0.1}s`;
    
    // マウスオーバーで跳ねるギミック
    span.addEventListener('mouseover', () => {
        const randomX = (Math.random() - 0.5) * 40;
        const randomY = (Math.random() - 0.5) * 40;
        const randomRotate = (Math.random() - 0.5) * 90;
        
        span.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(1.5)`;
        
        // 数秒後に元に戻る
        setTimeout(() => {
            span.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
        }, 1000);
    });

    container.appendChild(span);
});

// 2. マウス追従背景
window.addEventListener('mousemove', (e) => {
    blur.style.left = e.clientX + 'px';
    blur.style.top = e.clientY + 'px';
});

// 3. クリックで文字が激しく散らばる隠しギミック
window.addEventListener('click', () => {
    const chars = document.querySelectorAll('.char');
    chars.forEach(span => {
        const rx = (Math.random() - 0.5) * 1000;
        const ry = (Math.random() - 0.5) * 1000;
        span.style.transform = `translate(${rx}px, ${ry}px) rotate(720deg)`;
        
        setTimeout(() => {
            span.style.transform = 'translate(0, 0) rotate(0deg)';
        }, 2000);
    });
});
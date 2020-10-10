const login = document.getElementById('log');
const regs = document.getElementById('reg');
const likes = document.getElementById('like');
const comment = document.getElementById('comment');
const share = document.getElementById('share');

login.onclick = () => {
    alert('Хочешь войти ? Сделай базу данных.')
    login.textContent = 'Ещё раз?'
};

regs.onclick = () => {
    alert('Регнуться решил? Найди бэкэндера мне, будешь регаться.')
    regs.textContent = 'Да всё уже..'
};

likes.onclick = () => {
    likes.classList.toggle('dark');
   
};

comment.onclick = () => {
    alert('Извините, раздел в разработке.')
};

share.onclick = () => {
    alert('Извините, раздел в разработке.')
};
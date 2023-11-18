const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const text = link.textContent;
        console.log(href, text);
    });
});

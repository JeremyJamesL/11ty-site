const currentPath = window.location.pathname;
const menuItems = document.querySelectorAll('.menu li a');

console.log(currentPath);


menuItems.forEach((item) => {
    if(currentPath === '/' && item.textContent === 'Blog') {
        item.classList.add('active');
        return;
    }

    if(currentPath.includes(item.textContent.toLowerCase())) {
        item.classList.add('active');
        return;
    }
});
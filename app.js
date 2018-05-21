console.log(story);

const pageTitleNode = document.querySelector('article h2');
const illustrationNode = document.querySelector('article img');
const textNode = document.querySelector('article figcaption');
const navNode = document.querySelector('article nav');

function createNavButton(navOption) {
    const button = document.createElement('button');
    button.innerHTML = navOption.text;
    button.addEventListener('click', () => {
        changePage(story[navOption.target]);
    });
    return button;
}

function changePage(page) {
    pageTitleNode.innerHTML = page.title;
    illustrationNode.src = page.illustration;
    textNode.innerHTML = page.text;
    navNode.innerHTML = '';
    page.nav.forEach(navOption => {
        navNode.appendChild(createNavButton(navOption))
    });
}

changePage(story.intro);

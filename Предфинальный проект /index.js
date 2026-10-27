
const input = document.getElementById('search');



input.addEventListener('input', () => {
    let value = input.value.trim();
    if (value == ''){
        
    } 
    else {debounceSearch(value)}
})

function debounce(callback, delay) {
    let timer 
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay)
    }
}

async function searchRepositories(query) {
    let response = await fetch(`https://api.github.com/search/repositories?q=${query}&per_page=5`)
    let json = await response.json()
    console.log(response.ok, response.status)
    console.log(Array.isArray(json.items))
    console.log()
    const autocomplitList = document.getElementById('autocomplit-list');
    const repoList = document.getElementById('repo-list')
    repoList.innerHTML = '';
    autocomplitList.innerHTML = '';
    json.items.forEach((repo) => {
        let name = repo.name;
        let ownerLogin = repo.owner.login;
        let stargazersCount = repo.stargazers_count;

        const newLi = document.createElement('li');
        const newParagraphName = document.createElement('p');
        const newParagraphOwner = document.createElement('p');
        const newParagraphStargazer = document.createElement('p');
        const newAutocomplistLi = document.createElement('li');
        const newAutocomplistLiName = document.createElement('p');

        const newBlockDelete = document.createElement('div');
        newBlockDelete.classList.add('block-delete');

        newParagraphName.textContent = `${name}`;
        newParagraphOwner.textContent = `${ownerLogin}`;
        newParagraphStargazer.textContent = `${stargazersCount}`;
        newAutocomplistLiName.textContent = `${name}`

        console.log(name ,ownerLogin, stargazersCount)
        newAutocomplistLi.appendChild(newAutocomplistLiName);
        autocomplitList.appendChild(newAutocomplistLi);

        newLi.appendChild(newParagraphName);
        newLi.appendChild(newParagraphOwner);
        newLi.appendChild(newParagraphStargazer);
        newLi.appendChild(newBlockDelete);
        repoList.appendChild(newLi);

        newBlockDelete.addEventListener('click', (event) =>{
        event.currentTarget.parentElement.remove();
        })
    });
  
}

const debounceSearch = debounce(searchRepositories, 1000)







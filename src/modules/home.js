function renderHome() {

    const home = document.createElement('div');
    home.classList.add('home')
    home.classList.add('div-dump')

    const homeHeader = document.createElement('h1');
    const homeHeaderTxt = document.createTextNode('Welcome');
    homeHeader.appendChild(homeHeaderTxt);

    const homeParagraph = document.createElement('p');
    const homePragraphText = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quisquam aliquid consectetur pariatur, magnam nostrum perferendis, laborum quas maxime tenetur impedit commodi enim itaque perspiciatis modi nobis vel quasi suscipit.')
    homeParagraph.appendChild(homePragraphText);

    home.appendChild(homeHeader);
    home.appendChild(homeParagraph);

    // document.body.appendChild(home);

    
  const mainDiv = document.getElementById('content');
  mainDiv.appendChild(home)
}

export { renderHome };

import './style.css'

function component() {

  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');


  const header = document.createElement('header');
  const headerTxt = document.createElement('h1');
  headerTxt.classList.add('header-text');
  navbar.appendChild(header);


  const headerTxtContent = document.createTextNode('PIZZARIA DO RUGAL');
  headerTxt.appendChild(headerTxtContent);
  header.appendChild(headerTxt);


  const navbarList = document.createElement('ul');
  navbarList.classList.add('navbar-list');


  const homeBtn = document.createElement('li');
  const vertBar01 = document.createElement('li');
  const menuBtn = document.createElement('li');
  const vertBar02 = document.createElement('li');
  const findUsBtn = document.createElement('li');

  const homeBtnTxt = document.createTextNode('HOME');
  const vertBar01Txt = document.createTextNode('|');
  const menuBtnTxt = document.createTextNode('MENU');
  const vertBar02Txt = document.createTextNode('|');
  const findUsBtnTxt = document.createTextNode('FIND US');

  homeBtn.appendChild(homeBtnTxt);
  vertBar01.appendChild(vertBar01Txt);
  menuBtn.appendChild(menuBtnTxt);
  vertBar02.appendChild(vertBar02Txt);
  findUsBtn.appendChild(findUsBtnTxt);
  
  homeBtn.classList.add('navbar-list-items');
  menuBtn.classList.add('navbar-list-items');
  findUsBtn.classList.add('navbar-list-items');

  homeBtn.classList.add('text');
  vertBar01.classList.add('text');
  menuBtn.classList.add('text');
  findUsBtn.classList.add('text');
  vertBar02.classList.add('text');

  navbarList.appendChild(homeBtn);
  navbarList.appendChild(vertBar01);
  navbarList.appendChild(menuBtn);
  navbarList.appendChild(vertBar02);
  navbarList.appendChild(findUsBtn);

  navbar.appendChild(navbarList);

  document.body.appendChild(navbar);

  return;
}

document.body.appendChild(component());
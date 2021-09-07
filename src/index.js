import loadNav from './navFooter';
import loadMenu from './menu';
import { displayTab, displayHome } from './displayTab';
import loadDrinks from './drinks';
import loadAbout from './about';

loadNav();
loadMenu();
loadDrinks();
loadAbout();
displayTab('.aboutTabLink', 'about');
displayTab('.menuTabLink', 'menu');
displayHome('.homeTabLink');

displayTab('.drinksTabLink', 'drinks');


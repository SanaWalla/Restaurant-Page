import loadNav from './navFooter';
import loadMenu from './menu'
import { displayTab, displayHome } from './displayTab'
import loadDrinks from './drinks'

loadNav();
loadMenu();
displayTab('.menuTabLink', 'menu');
displayHome('.homeTabLink');
loadDrinks();
displayTab('.drinksTabLink', 'drinks');
ionic start devdacticWebsite blank --type=angular --capacitor
cd ./devdacticWebsite
 
ionic g page pages/menu
ionic g page pages/home
ionic g page pages/products
ionic g page pages/about
 
ionic g module components/sharedComponents --flat
ionic g component components/header
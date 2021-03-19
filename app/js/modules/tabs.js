function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){
    const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

   function hidenTabContent() {
       tabsContent.forEach(item => {
           item.style.display = 'none';
       });
   tabs.forEach(item => {
       item.classList.remove(activeClass);
       });
   }
   hidenTabContent();

   function showTabContent(i = 0) {
       tabsContent[i].style.display = 'block';
       tabs[i].classList.add(activeClass);
   }
   showTabContent();

   tabsParent.addEventListener('click', (e) => {
       const target = e.target;

       if (target && target.classList.contains(tabsSelector.slice(1))){
           tabs.forEach((item, i) => {
               if (target == item){
                   hidenTabContent();
                   showTabContent(i);
               }
           });
       }
   });
}

export default tabs;
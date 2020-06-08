function navBar() {
    const menuBtns = document.querySelector('.menu_btn')
    const menuWin = document.querySelector('.nav_btns_container')
    
    

    menuBtns.addEventListener('click', (e) => {
        if (menuWin.classList.contains('down')){
            menuWin.classList.remove('down');
        } else {
        menuWin.classList.add('down');
        
        }



    })


}

navBar();
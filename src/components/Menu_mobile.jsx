export const Menu_mobile = ({children}) => {
    function handleCloseMenu(){
        document.querySelector('.menu-mobile').style.display = 'none'
    }

    return (
        <div className="menu-mobile">
          <span className="material-symbols-outlined" onClick={handleCloseMenu}>close</span>
          <ul>
            {children}
          </ul>
        </div>
    )
}
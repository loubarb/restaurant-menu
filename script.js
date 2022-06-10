const btns = document.querySelectorAll('.btn')
const menuItems = document.querySelectorAll('.menu-item')

for (i = 0; i < btns.length; i++) {

  btns[i].addEventListener('click', e => {
    e.preventDefault()
    const filter = e.target.dataset.filter
  

    menuItems.forEach((item) => {
      if (filter == "all") {
        item.style.display = ""
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = ""
        } else {
          item.style.display = "none"
        }
      }
    })
  })
}
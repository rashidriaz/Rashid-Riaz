document.querySelectorAll("div.details nav ul li a").forEach(e => {
    e.addEventListener("click", (_) => {
        change(e);
    })
})

function change(element) {
    removeActiveClassFromNavbarItem();
    element.classList.add("active")
    let n = element.dataset.id;
    document.getElementById("content-title").innerHTML = element.innerHTML;
    document.title = element.innerHTML;
    let sections = document.querySelectorAll('div.details div.main-section');
    sections.forEach(p => p.classList.remove('active-section'))
    sections[n - 1].classList.add('active-section')

}

function removeActiveClassFromNavbarItem(){
    document.querySelectorAll("div.details nav ul li a").forEach(e=>{
        e.classList.remove("active");
    })
}
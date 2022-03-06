
//***********************Active content with click on items******************** */
let itemContent = document.querySelectorAll(".itemContent");
let itemsOfContent = document.querySelectorAll(".itemsOfContent");
// itemContent[0].classList.remove("itemContent");
// itemContent[0].classList.add("activeContent");
console.log(itemContent);
console.log(itemsOfContent);
for (const item of itemsOfContent) {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        itemsOfContent.forEach(li => li.classList.remove("active"));
        this.classList.add("active");
        let dataItem = this.getAttribute("data-item");
        itemContent.forEach(content => {
            if (content.getAttribute("data-item") === dataItem) {
                itemContent.forEach(section => section.classList.remove("activeContent"))
                content.classList.add("activeContent");
            }
        })
    })
}
for (const item of itemContent) {

}
let innerWidth = window.innerWidth;

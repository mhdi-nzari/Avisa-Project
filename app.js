
let all_content = document.querySelectorAll(".all-content img");
all_content.forEach(element => {
    element.addEventListener("click", function(){
        this.classList.toggle("transform-90")
    })
})
// arrow transform

$('.dashboard').on('click', function () {
    $('.dashboard .arrow-icon').toggleClass('transform-arrow');
});
$('.requests').on('click', function () {
    $('.requests .arrow-icon').toggleClass('transform-arrow');
});

// sidebar animation remove and add animation
$('.menu-icon').on('click', function () {
    if ($('.sidebar').hasClass('anim-sidebar')) {
        document.querySelector('.sidebar').style.display = "block"
        setTimeout(() => {
            $('.sidebar').addClass('anim-sidebar2');
            $('.sidebar').removeClass('anim-sidebar');
        }, 100);
    } else {
        $('.sidebar').addClass('anim-sidebar');
        $('.sidebar').removeClass('anim-sidebar2');
        setTimeout(() => {
            document.querySelector('.sidebar').style.display = "none";
        }, 100);
    }
});

if ($('.sidebar').hasClass('anim-sidebar') == false) {
    if (window.innerWidth < 767) {
        document.querySelector('.sidebar').style.display = "none";
        $('.sidebar').addClass('anim-sidebar');
        $('.sidebar').removeClass('anim-sidebar2');
    } else {
        document.querySelector('.sidebar').style.display = "block";
        $('.sidebar').removeClass('anim-sidebar');
        $('.sidebar').addClass('anim-sidebar2');
    }
}

// click hide sidebar and full screen content box
setInterval(() => {
    if ($('.sidebar').hasClass('anim-sidebar')) {
        $('.content').removeClass('col-md-9', 'col-lg-10');
        $('.content').addClass('col-lg-12', 'col-md-12');
    } else {
        $('.content').addClass('col-md-9', 'col-lg-10');
        $('.content').removeClass('col-lg-12', 'col-md-12');
    }
}, 30);

// click change item nav
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-item')) {
        // remove all class acitve 
        const navItems = document.querySelectorAll('.nav-item')
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('active');
        }
        // add active class in click item
        e.target.classList.add('active');
    }
});

// click and change items form
// window.addEventListener('click', (e) => {
//     const changeValue = document.querySelector('.change-value');
//     for (let i = 1; i <= 5; i++) {
//         if (e.target.classList.contains(`code${i}`)) {
//             if (i == 1) {
//                 changeValue.style.opacity = "0";
//                 setTimeout(() => {
//                     changeValue.innerHTML = `
//                         <thead>
//                             <tr>
//                                 <th>جزئیات</th>
//                                 <th>انتخاب</th>
//                                 <th>نوع آزمایش</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>
                            
//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>PT +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>FB +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>
//                         </tbody>
//                         `;
//                     changeValue.style.opacity = "1";
//                 }, 300);
//             }

//             if (i == 2) {
//                 changeValue.style.opacity = "0";
//                 setTimeout(() => {
//                     changeValue.innerHTML = `
//                         <thead>
//                             <tr>
//                                 <th>2جزئیات</th>
//                                 <th>2انتخاب</th>
//                                 <th>2نوع آزمایش</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>
                            
//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>PT +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>FB +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>
//                         </tbody>
//                         `;
//                     changeValue.style.opacity = "1";
//                 }, 300);
//             }

//             if (i == 3) {
//                 changeValue.style.opacity = "0";
//                 setTimeout(() => {
//                     changeValue.innerHTML = `
//                         <thead>
//                             <tr>
//                                 <th>3جزئیات</th>
//                                 <th>3انتخاب</th>
//                                 <th>3نوع آزمایش</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>
                            
//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>PT +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>FB +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>
//                         </tbody>
//                         `;
//                     changeValue.style.opacity = "1";
//                 }, 300);
//             }

//             if (i == 4) {
//                 changeValue.style.opacity = "0";
//                 setTimeout(() => {
//                     changeValue.innerHTML = `
//                         <thead>
//                             <tr>
//                                 <th>4جزئیات</th>
//                                 <th>4انتخاب</th>
//                                 <th>4نوع آزمایش</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>
                            
//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>PT +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>FB +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>
//                         </tbody>
//                         `;
//                     changeValue.style.opacity = "1";
//                 }, 300);
//             }

//             if (i == 5) {
//                 changeValue.style.opacity = "0";
//                 setTimeout(() => {
//                     changeValue.innerHTML = `
//                         <thead>
//                             <tr>
//                                 <th>5جزئیات</th>
//                                 <th>5انتخاب</th>
//                                 <th>5نوع آزمایش</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>
                            
//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>PT +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>FB +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>

//                             <tr>
//                                 <td>محتویات منگنز، پتاسیم، کلر، ترکیبات الکلی</td>
//                                 <td>
//                                     <input type="checkbox">
//                                 </td>
//                                 <td>EC +</td>
//                             </tr>
//                         </tbody>
//                         `;
//                     changeValue.style.opacity = "1";
//                 }, 300);
//             }
//         }
//     }
// });

// change icon switcher
let i = 0;
$('.change-icon').on('click', () => {
    if (i == 0) {
        document.querySelector('.change-icon').src = "./img/remove-icon.svg";
        i++;
    } else {
        document.querySelector('.change-icon').src = "./img/yes-icon.svg";
        i--;
    }
});



// change icon faktop price

let faktorPrice = document.querySelector('.faktor-price');
faktorPrice.addEventListener("click", function (e) {
    if (e.target.classList.contains('yes-faktor')) {
        faktorPrice.querySelector('.yes-faktor').classList.add('active-faktor');
        faktorPrice.querySelector('.remove-faktor').classList.remove('active-faktor');
    }
    if (e.target.classList.contains('remove-faktor')) {
        faktorPrice.querySelector('.remove-faktor').classList.add('active-faktor');
        faktorPrice.querySelector('.yes-faktor').classList.remove('active-faktor');
    }
});

// active bank icon
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('bank-icon')) {
        const allBankIcon = document.querySelectorAll('.bank-icon');
        for (let x = 0; x < allBankIcon.length; x++) {
            allBankIcon[x].classList.remove('bank-active');
        }
        e.target.classList.add('bank-active');
    }
})


$(function () {
    $("#date").persianDatePicker();
});


$('#confirm-order').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
   })
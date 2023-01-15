
const sidebarToggle = document.querySelector(".sidebar-toggle");

const closeBtn = document.querySelector(".close-btn");

const sidebar= document.querySelector(".sidebar")

sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle('sidebar-silde')
})

closeBtn.addEventListener("click", function () {
   sidebar.classList.remove('sidebar-silde')
})



const linkSingle = document.querySelectorAll(".link-single");

linkSingle.forEach(function (btn) {
  btn.addEventListener("click", function () {
     sidebar.classList.remove('sidebar-silde')
  })
})

const countDown = document.querySelector('.count-down');

const countdownItem = document.querySelectorAll('.countdown-format h4');
console.log(countdownItem)
let futureDate = new Date(2022,10,1,12,12,00)
console.log(futureDate)

futureDate = futureDate.getTime()
console.log(futureDate);


function getremainingTime() {
    let today = new Date().getTime()
    //console.log(today)

    diff = futureDate - today;
    //console.log(diff)

    const oneDays = 24 * 60 * 60 * 1000;
    const oneHours = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor( diff / oneDays)
    //console.log(days)

    let hours = Math.floor((diff % oneDays) / oneHours);
    let Minutes = Math.floor((diff % oneHours) / oneMinute);
    let seconds = Math.floor((diff % oneMinute) / 1000);

    const value = [days,hours, Minutes, seconds];
    
  function format(item) {
    if (item < 10) {
      
      return item =`0${item}`
    }
    return item
  }

    countdownItem.forEach(function (item, index) {
        item.innerHTML=value[index]
    })
 
   if (diff < 0) {
    clearInterval(counter);
    deadline.innerHTML=`<h4 class="expired">sorry, this giveaway has expired </h4>`
  }
}


let counter = setInterval(getremainingTime,1000)

getremainingTime()


const scrollLink =document.querySelector(".scroll-link");

window.addEventListener("scroll", function () {
  scrollHeight = this.window.pageYOffset
 console.log(scrollHeight)
  if (scrollHeight > 500) {
    scrollLink.classList.add("slide-show");
  } else {
    scrollLink.classList.remove("slide-show")
  }
})


const data = document.querySelector('.data');

data.innerHTML= new Date().getFullYear()
// link url
function url() {
  fbq("track", "Purchase");
  location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
}

// show-list
let menubars = document.querySelector(".menu-bars");
let showlist = document.querySelector(".show-list");
menubars.addEventListener("click", function () {
  showlist.classList.toggle("active");
});

// auto play slide
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  // Fetch cryptocurrency data using fetch API
  fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,DASH,XMR,XEM,DOGE,ADA,BCH&tsyms=USD")
    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json()
    })
    .then(data => {
      // Handle data here
      // var dogecoinPrice = data.DISPLAY.BTC.USD.PRICE;
      // var dogecoinPercent = data.DISPLAY.BTC.USD.CHANGEPCT24HOUR;
      // console.log(data);
      document.getElementById("priceBTC").innerHTML = data.DISPLAY.BTC.USD.PRICE;
      document.getElementById("timeBTC").innerHTML = data.DISPLAY.BTC.USD.CHANGEPCT24HOUR;
      document.getElementById("priceETH").innerHTML = data.DISPLAY.ETH.USD.PRICE;
      document.getElementById("timeETH").innerHTML = data.DISPLAY.ETH.USD.CHANGEPCT24HOUR;
      document.getElementById("priceDOGE").innerHTML = data.DISPLAY.DOGE.USD.PRICE;
      document.getElementById("timeDOGE").innerHTML = data.DISPLAY.DOGE.USD.CHANGEPCT24HOUR;
      document.getElementById("priceADA").innerHTML = data.DISPLAY.ADA.USD.PRICE;
      document.getElementById("timeADA").innerHTML = data.DISPLAY.ADA.USD.CHANGEPCT24HOUR;
      document.getElementById("priceXRP").innerHTML = data.DISPLAY.XRP.USD.PRICE;
      document.getElementById("timeXRP").innerHTML = data.DISPLAY.XRP.USD.CHANGEPCT24HOUR;
      console.log(data);
    })
    
    .catch(error => {
      console.error("Fetch error:", error);
      alert("Error fetching data");
    });
});



// async function getData() {
//   const url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,DASH,XMR,XEM,DOGE,ADA,BCH&tsyms=USD";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }


//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error.message);
//   }
// }


// document.addEventListener("DOMContentLoaded", getData())

var swiper = new Swiper(".mySwipers", {
  slidesPerView: 1,
  spaceBetween: 15,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    450: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    650: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is >= 640px
    991: {
      slidesPerView: 3,
      spaceBetween: 15
    }
  }
});
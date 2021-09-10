const menu = [
  {
    id: 1,
    title: "mercedes benz",
    category: "benz",
    price: `30,000`,
    img: "./Cars/benz.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
    magni dolore quasi fugiat obcaecati unde eaque accusamus iste?
    Temporibus, rerum.`,
  },
  {
    id: 2,
    title: "honda accord",
    category: "honda",
    price: `25,000`,
    img: "./Cars/accord.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
    magni dolore quasi fugiat obcaecati unde`,
  },
  {
    id: 3,
    title: "honda civic",
    category: "honda",
    price: `28,000`,
    img: "./Cars/civic.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
    magni dolore quasi fugiat obcaecat`,
  },
  {
    id: 4,
    title: "mercedes benz",
    category: "benz",
    price: `30,000`,
    img: "./Cars/benz2.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Landcruiser",
    category: "Toyota",
    price: `50,000`,
    img: "./Cars/landcruiser.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Elantra",
    category: "hyundai",
    price: `15,000`,
    img: "./Cars/elantra.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Yaris",
    category: "Toyota",
    price: `7,000`,
    img: "./Cars/yaris.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Corolla",
    category: "Toyota",
    price: `10,000`,
    img: "./Cars/corolla.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "mercedes benz",
    category: "benz",
    price: `19,000`,
    img: "./Cars/benz3.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "rav4",
    category: "Toyota",
    price: `25,000`,
    img: "./Cars/rav4.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
    magni dolore quasi fugiat obcaecati unde`,
  },
];
const sectionCenter = document.querySelector(".section-center");

const btnContainer = document.querySelector(".btn-container");
//console.log(filterBtn);

//Load webpage
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayButtons();
});

//Display Menu Items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    //console.log(item);
    return ` <article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title} />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join("");
  //console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}

//Display Buttons
function displayButtons() {
  const categories = menu.reduce(
    function (values, items) {
      // console.log(values);
      if (!values.includes(items.category)) {
        values.push(items.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-container" type="button" data-id=${category}>
        ${category} </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;

  //filter btns
  const filterBtn = document.querySelectorAll(".filter-container");
  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
  // add displaMenuItems function because some
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      //console.log(item);
      return ` <article class="menu-item">
              <img src=${item.img} class="photo" alt=${item.title} />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
              </div>
            </article>`;
    });
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
  }
}

const getWinesFromApi = async (id) => {
  if (id) {
    const data = (
      await fetch('https://api.sampleapis.com/wines/reds/' + id)
    ).json();
    console.log('PESQISA POR ID');

    return data;
  }

  const data = (await fetch('https://api.sampleapis.com/wines/reds')).json();

  return data;
};
const createProductElements = async (wines, priceWine) => {
  if ((await wines.length) > 1) {
    const winesContainer = document.querySelector('.wines__products');
    const slicedWinesData = wines.slice(1, 30);

    slicedWinesData.forEach((wine) => {
      const wineDiv = document.createElement('div');
      wineDiv.classList.add('products__wine');
      wineDiv.id = wine.id;
      const price = 60 + Math.floor(Math.random() * 100) + 0.99;

      wineDiv.innerHTML = `
        <div class="wine__feedback">
            <img src="../../assets/img/feedback-icon.png" alt="" class="feedback__icon" />
            <p class="feedback__rate">${3 + Math.floor(Math.random() * 3)}</p>
        </div>
        <img class="wine__image" src="${wine.image}" alt="wine image" />
        <h3 class="wine__title">${
          `(${wine.winery}) ${wine.wine}`.length > 36
            ? `(${wine.winery}) ${wine.wine}`.substring(0, 36) + '...'
            : `(${wine.winery}) ${wine.wine}`
        }</h3>
        <div class="wine__line">ㅤ</div>
        <p class="wine__subtitle">${
          `${wine.location}`.length > 29
            ? `${wine.location}`.substring(0, 26) + '...'
            : `${wine.location}`
        }</p>
        <div class="wine__line">ㅤ</div>
        <p class="wine__price">R$${price}</p>
        <button class="wine__buy" onclick="getWineInfoToBuy(${[
          wine.id,
          price,
        ]});" type="submit" id="${wine.id}">Comprar</button>
      `;
      winesContainer.appendChild(wineDiv);
      return;
    });
  } else {
    // in case of id search for specific wine
    const winesContainer = document.querySelector('.wines__product');
    const wineDiv = document.createElement('div');
    const wine = await wines;
    console.log(wine);
    wineDiv.classList.add('products__wine');
    wineDiv.id = wine.id;
    const price = 60 + Math.floor(Math.random() * 100) + 0.99;

    wineDiv.innerHTML = `
        <div class="wine__feedback">
            <img src="../../assets/img/feedback-icon.png" alt="" class="feedback__icon" />
            <p class="feedback__rate">${3 + Math.floor(Math.random() * 3)}</p>
        </div>
        <img class="wine__image" src="${wine.image}" alt="wine image" />
        <h3 class="wine__title">${
          `(${wine.winery}) ${wine.wine}`.length > 36
            ? `(${wine.winery}) ${wine.wine}`.substring(0, 36) + '...'
            : `(${wine.winery}) ${wine.wine}`
        }</h3>
        <div class="wine__line">ㅤ</div>
        <p class="wine__subtitle">${
          `${wine.location}`.length > 29
            ? `${wine.location}`.substring(0, 26) + '...'
            : `${wine.location}`
        }</p>
        <div class="wine__line">ㅤ</div>
        <p class="wine__price">R$${priceWine}</p>
        <input type="number" placeholder="Quantidade" class="wine__quantity" max="99" min="1" value="1" onchange="getWinePrice(${priceWine})"></input>
      `;

    winesContainer.appendChild(wineDiv);
    getWinePrice(priceWine);
  }
};
const getWineInfoToBuy = (id, price) => {
  window.location.href = '/vinheria_agnello/src/wines/about-wine.html';
  document.cookie = '';
  document.cookie = `wineData=${[id, price]};`;
};
const getWinePrice = (price) => {
  const quantity = Number(document.querySelector('.wine__quantity').value);
  if (quantity > 0) {
    document.querySelector('.highlight.price').textContent = `R$${(
      quantity * price
    ).toFixed(2)}`;
  }
};
const addToCart = () => {
  alert('O produto foi adicionado ao carrinho!');
};

/* CALLING FUNCTIONS */
runFunctions = async (id, price) => {
  const wines = await getWinesFromApi(id);
  createProductElements(wines, price);
};

if (
  window.location.pathname !== '/vinheria_agnello/src/wines/about-wine.html'
) {
  runFunctions();
} else {
  const id = Number(document.cookie.split('=')[1].split(',')[0]);
  const price = Number(document.cookie.split('=')[1].split(',')[1]);

  runFunctions(id, price);
}

/* EVENT LISTENERS */
const buyButtons = document.querySelectorAll('.wine__buy');
const cartButton = document.querySelector('.buy-info__cart-button');

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', () => {
    getWineInfoToBuy(buyButton.id);
  });
});

cartButton.addEventListener('click', () => {
  addToCart();
});

const applyDiscount = () => {
  const price = Number(document.cookie.split('=')[1].split(',')[1]);
  const quantity = Number(document.querySelector('.wine__quantity').value);
  const coupon = document.querySelector('.input-promo').value.toUpperCase();

  if (coupon === 'FIAP2024') {
    let discount = price * quantity * 0.1; // 10% de desconto
    let discountedPrice = price * quantity - discount;
    document.querySelector('.result').textContent =
      'R$' + discountedPrice.toFixed(2);
  } else {
    document.querySelector('.result').textContent =
      'Cupom inválido ou não aplicável.';
  }
};

const cartApp = {
  cart: [],
  currentPage: 'cartPage',

  addItem(item) {
    if (item) {
      this.cart.push(item);
      this.updateCartUI();
    } else {
      alert('Please enter an item name!');
    }
  },

  updateCartUI() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';
    this.cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${item}`;
      cartList.appendChild(li);
    });
  },

  clearCart() {
    this.cart = [];
    this.updateCartUI();
  },

  goToPage(pageId) {
    document
      .querySelectorAll('#cartPage, #checkoutPage, #thankYouPage')
      .forEach((page) => {
        page.classList.add('hidden');
      });

    document.getElementById(pageId).classList.remove('hidden');
    this.currentPage = pageId;
    if (pageId === 'checkoutPage') {
      this.updateCheckoutCart();
    }
  },

  updateCheckoutCart() {
    const checkoutCartList = document.getElementById('checkoutCartList');
    checkoutCartList.innerHTML = '';
    this.cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${item}`;
      checkoutCartList.appendChild(li);
    });
  },
};

document.getElementById('addItemBtn').addEventListener('click', () => {
  const itemInput = document.getElementById('itemInput');
  const itemName = itemInput.value.trim();
  cartApp.addItem(itemName);
  itemInput.value = '';
});

document.getElementById('clearCartBtn').addEventListener('click', () => {
  cartApp.clearCart();
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cartApp.cart.length > 0) {
    cartApp.goToPage('checkoutPage');
  } else {
    alert('Your cart is empty!');
  }
});

document.getElementById('goBackBtn').addEventListener('click', () => {
  cartApp.goToPage('cartPage');
});

document.getElementById('payNowBtn').addEventListener('click', () => {
  cartApp.goToPage('thankYouPage');
});

document.getElementById('startOverBtn').addEventListener('click', () => {
  cartApp.clearCart();
  cartApp.goToPage('cartPage');
});

document.getElementById('themeToggle').addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'light');
    document.getElementById('themeToggle').textContent = 'Switch to Dark Mode';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById('themeToggle').textContent = 'Switch to Light Mode';
  }
});

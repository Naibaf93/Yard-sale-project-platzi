const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector ('.product-detail');
const cardsContainer = document.querySelector ('.cards-container'); 

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
 
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push ({
    name: 'Bike',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push ({
    name: 'GW Sacramento Gravel',
    price: 1.959,
    image:'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_fe4a2253-d5ca-49e7-b5f5-6ccae8a412f3.jpg?alt=media',
});

productList.push ({
    name: 'híbrida GW Sacramento',
    price: 1.587,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_294657c5-24b0-44da-83eb-e2978bb2ae1b.jpg?alt=media',
});

productList.push ({
    name: 'fixie Beclass Zest',
    price: 1.855,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/Pybx2IUOh0YR3Nemq0vxQhaH6tb2%2Fthumb_280_7f26b2ff-9637-44d4-afac-bd23777bb58a.jpg?alt=media',
});

productList.push ({
    name: 'Fixie Ontrail color Lite',
    price: 830,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/ZXudPf6OjacRcSldcYDytzq3ftr1%2Fthumb_280_96464027-fdc6-4fd5-a360-a9f9ad31087d.jpg?alt=media',
});

productList.push ({
    name: 'Fixie Ontrail en crudo Lite',
    price: 780,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/ZXudPf6OjacRcSldcYDytzq3ftr1%2Fthumb_280_2c7220e9-d349-4b45-abef-1ed7ba2d1221.jpg?alt=media',
});

productList.push ({
    name: 'Piñón fijo GW Brooklyn',
    price: 1.212,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_59ec833c-fd83-4759-bccc-9f6ab7a47b87.jpg?alt=media',
});

productList.push ({
    name: 'Ruta Cliff Stage 2.0',
    price: 3.159,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_5a392b44-fc36-4725-a33b-c9026e572690.jpg?alt=media',
});

productList.push ({
    name: 'Optimus Cetus de 10v',
    price: 2.615,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/ZXudPf6OjacRcSldcYDytzq3ftr1%2Fthumb_280_6a480ef1-437f-4c37-975e-b7191c0d2e7a.jpg?alt=media',
});

productList.push ({
    name: 'GW Gavia 7v Lite',
    price: 1.732,
    image:'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_cb479566-11d1-4985-9189-1143988d1872.jpg?alt=media',
});

productList.push ({
    name: 'Venzo ERYX de 9v',
    price: 1.569,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_h2szw25r2WkkvODctf7Ug%3D%3D.jpg?alt=media',
});

productList.push ({
    name: ' GW K2 Shimano Claris de 8v',
    price: 2.132,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_XPbSK8xwD73zo1qzNDoag%3D%3D.jpg?alt=media',
});

productList.push ({
    name: 'Ontrail Zero de 7v',
    price: 1.299,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_95670e0c-d2c7-4c09-a786-18fe0c7c690e.jpg?alt=media',
});

productList.push ({
    name: 'Poseidon Lite freno de disco',
    price: 872,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/ZXudPf6OjacRcSldcYDytzq3ftr1%2Fthumb_280_d00e0bc0-8e67-4410-8acb-ff513d22991c.jpg?alt=media',
});

productList.push ({
    name: 'MTB Trek Marlin 5 rin 27.5',
    price: 2.115,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_9bd3fa46-ad3d-4511-b106-e793089689f7.jpg?alt=media',
});

productList.push ({
    name: ' MTB GW Alligator rin 29',
    price: 2.656,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_e2262c8a-1ae2-4848-872b-dd46da3eb41a.jpg?alt=media',
});

productList.push ({
    name: 'MTB GW Hyena rin 29 de 8v',
    price: 120,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_6d207abb-474d-49f5-bac1-5535f8ef86c5.jpg?alt=media',
});

productList.push ({
    name: 'MTB Venzo Amphion Rin 29 de 11v',
    price: 2.315,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_f196478b-4ca8-4c0c-b755-16623ce2760f.jpg?alt=media',
});

productList.push ({
    name: 'GW Jackal rin 29 de 11v',
    price: 1.849,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_70cf0882-772d-41ff-82b4-6b4dcd785a77.jpg?alt=media',
});

productList.push ({
    name: 'GW Lynx rin 29 de 9v',
    price: 1.288,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_874f6099-d90e-45ed-9c55-fb3fa3658a09.jpg?alt=media',
});

productList.push ({
    name: 'Optimus Tucana 12v',
    price: 2.285,
    image: 'https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/1iZ3OYIt87bNHUFo67c0WmKCh4c2%2Fthumb_280_92409e1d-4b27-448d-8234-7a6a37f33ddc.jpg?alt=media',
});

function renderProducts(array){
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p'); 
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }    
}

renderProducts(productList); 
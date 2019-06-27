/*jslint browser:true */

$(document).ready(function() {
  $('#showFilter').click(function() {
    $('#slide').show('slide', { direction: 'right' })
    $('#modal').show()
  })

  $('#closebtn').click(function() {
    $('#slide').hide('slide', { direction: 'right' })
    $('#modal').hide()
  })
})

var phones = [
  {
    model: 'Lumonis 882',
    brand: 'Nokia',
    year: 2004,
    price: 99,
    specs: ['Games', 'Waterproof'],
    image: 'nokia_lumonis.png',
    desc:
      'The nokia Lumonis is the next phone in line for any witch or warlock, this is chargered by the moonlight and lasts till the next full moon, it is black and white, has a really cool game on it called snake. If you want to be the best guild leader, this is the phone you want.',
    id: 9
  },
  {
    model: 'Juicyberry OG',
    brand: 'Blackberry',
    year: 2015,
    price: 125,
    specs: ['Internet', 'Games', 'Waterproof', 'MP3'],
    image: 'blackbery_juicyberry.png',
    desc:
      "Snap to the future with this hot new phone to suit your needs. This phone has a wonderful 3.0' display with an internet function, calender to keep track of dates and a whole keyboard created by at&amps;t this phone will fit all your everyday needs, calling friends listening to music everything to get your day going.",
    id: 1
  },
  {
    model: 'Iphone 3',
    brand: 'Iphone',
    year: 2009,
    price: 1000,
    specs: ['Internet', 'Games', 'Waterproof', 'MP3'],
    image: 'iphone3_.png',
    desc:
      "Grab this new hightech Iphone from the mind of Steve Jobs, This is his masterpiece. It has evolved and now has a front and back camera, 5.0' display, touch screen, itunes and ipod for all your music purchasing needs, app store for all your phone gaming needs, weather, maps.",
    id: 2
  },
  {
    model: 'Razr',
    brand: 'Motorola',
    year: 2006,
    price: 69,
    specs: ['Games', 'Internet', 'MP3'],
    image: 'motorola_razr.png',
    desc:
      'This high-tech fliptop phone is the best in the new generation of phones, it can make you look cool when you answer the phone. Everyone will stop and stare and think who is that cool person with that phone.',
    id: 3
  },
  {
    model: 'Space Invader',
    brand: 'Motorola',
    year: 2008,
    price: 600,
    specs: ['Internet', 'Games', 'MP3'],
    image: 'motorola_space_invader.png',
    desc:
      'This is the coolest phone on the line, it is like a laptop for your pocket. Its buttons are so convenient that its the newest trend. It comes in a stylish sea-foam blue color.',
    id: 4
  },
  {
    model: 'Le Telefone',
    brand: 'Retrophilia',
    year: 1990,
    price: 299,
    specs: ['Waterproof'],
    image: 'retrophilia_le_telefone.png',
    desc:
      'Have you ever felt like you were born in the wrong generation? If so then this will be your favorite phone, it is a blast from the past, it is 30cm tall with 10 spinning buttons, its the perfect home phone.',
    id: 5
  },
  {
    model: 'Retro Brick',
    brand: 'Retrophilia',
    year: 1995,
    price: 699,
    specs: ['Waterproof'],
    image: 'retrophilia_brick.png',
    desc:
      'Here is a trendy phone called the Retro Brick. It is huge and heavy which means its hard to break and you gain muscles while carrying it.',
    id: 6
  },
  {
    model: 'SamSlide',
    brand: 'Samsung',
    year: 2006,
    price: 500,
    specs: ['MP3', 'Internet', 'Games'],
    image: 'samsung_slide.png',
    desc:
      'The Samsung Slide is for the business man on the go. You are able to check your emails while on the go and the keyboard makes it so easy to type.',
    id: 7
  },
  {
    model: 'Viva La Flip',
    brand: 'Sony',
    year: 2007,
    price: 149,
    specs: ['Internet', 'Games'],
    image: 'sonya_viva_la_flip.png',
    desc:
      "If you feel like you havent lived in the early 20's for long enough then this is the phone for you 2mp rear facing camera, pixelated screen, one game called snake, internet access that you don't know how to use, it has it all",
    id: 8
  },
  {
    model: 'Brique 2000',
    brand: 'Nokia',
    year: 2006,
    price: 10,
    specs: ['Games', 'Waterproof'],
    image: 'nokia_brique.png',
    desc:
      'The nokia brique is the most heavy duty Nokia phone there is. It is the best phone for a tradie who is always on site carrying heavy objects and always dropping their phone.',
    id: 10
  },
  {
    model: 'Nokia Twist',
    brand: 'Nokia',
    year: 2006,
    price: 250,
    specs: ['Internet', 'Games', 'Internet'],
    image: 'nokia_twist.png',
    desc:
      'If you are into dancing this is the phone for you. The Nokia Twist is the next revolutionary cell phone in the market, you can twist the keyboard around when you need to text someone and twist it back around when you are done to protect it from being damaged.</p>',
    id: 11
  },
  {
    model: "Slip'N Slide",
    brand: 'Nokia',
    year: 2006,
    price: 499,
    specs: ['Internet', 'Games', 'MP3'],
    image: 'nokia_slip_n_slide.png',
    desc:
      'This is the phone for all you mums out there, wanna be the hippest out of all your friends get the nokia slide, it slides, you can play games on it, you can bad mouth those people that you dont like to your friends 2mp rear facing camera</p>',
    id: 12
  }
]

// CHLOE: filter functions --------------------------------------

var productsContainer = document.getElementById('allProducts')

for (var i = 0; i < phones.length; i++) {
  addProductToPage(phones[i])
}

var totalProducts = document.getElementById('totalProducts')
totalProducts.innerHTML = phones.length + ' items found'

var allFiltered // all of the current products
var filteredBrand //all of products after brand filter
var filteredPrice //all of products after specs filter
var displayResult //final filtered products to be displayed

function filterResults() {
  allFiltered = phones
  filteredBrand = []
  filteredPrice = []
  displayResult = []
  filterBrand(allFiltered)
  filterPrice(filteredBrand)
  filterSpecs(filteredPrice)
  productsContainer.innerHTML = ''
  for (var i = 0; i < displayResult.length; i++) {
    if (displayResult.length) {
      addProductToPage(displayResult[i])
    } else {
      document.getElementById('allProducts').innerHTML = 'No search found'
    }
  }

  totalProducts.innerHTML = displayResult.length + ' items found'

  $('#slide').hide('slide', { direction: 'right' })
  $('#modal').hide()
}

function checkValue(value, valueArray) {
  for (var i = 0; value[i]; ++i) {
    if (value[i].checked) {
      valueArray.push(value[i].value)
    }
  }
}

function filterBrand(currentProducts) {
  var checkedBrandValues = []
  var inputBrand = document.getElementsByClassName('brand')
  checkValue(inputBrand, checkedBrandValues)
  if (checkedBrandValues.length) {
    for (var i = 0; i < currentProducts.length; i++) {
      for (var c = 0; c < checkedBrandValues.length; c++) {
        if (checkedBrandValues[c] === currentProducts[i].brand) {
          filteredBrand.push(currentProducts[i])
        }
      }
    }
  } else {
    filteredBrand = currentProducts
  }
}

function filterPrice(filteredProducts) {
  var checkedPriceValues = []
  var inputPrice = document.getElementsByClassName('price')
  checkValue(inputPrice, checkedPriceValues)

  if (checkedPriceValues.length) {
    for (var i = 0; i < filteredProducts.length; i++) {
      for (var j = 0; j < checkedPriceValues.length; j++) {
        if (
          checkedPriceValues[j] === '10-50' &&
          filteredProducts[i].price <= 50
        ) {
          filteredPrice.push(filteredProducts[i])
        }
        if (
          checkedPriceValues[j] === '50-150' &&
          filteredProducts[i].price >= 50 &&
          filteredProducts[i].price <= 150
        ) {
          filteredPrice.push(filteredProducts[i])
        }
        if (
          checkedPriceValues[j] === '150-300' &&
          filteredProducts[i].price >= 150 &&
          filteredProducts[i].price <= 300
        ) {
          filteredPrice.push(filteredProducts[i])
        }
        if (
          checkedPriceValues[j] === '300-1000' &&
          filteredProducts[i].price >= 300 &&
          filteredProducts[i].price <= 1000
        ) {
          filteredPrice.push(filteredProducts[i])
        }
      }
    }
  } else {
    filteredPrice = filteredProducts
  }
}

function filterSpecs(filteredProducts) {
  var checkedSpecsValues = []
  var inputSpecs = document.getElementsByClassName('specs')
  checkValue(inputSpecs, checkedSpecsValues)

  if (checkedSpecsValues.length) {
    for (var i = 0; i < filteredProducts.length; i++) {
      var specsLength = checkedSpecsValues.length
      var specsLengthCount = 0

      for (var j = 0; j < specsLength; j++) {
        if (filteredProducts[i].specs.includes(checkedSpecsValues[j]) == true) {
          specsLengthCount++
        }
      }
      if (specsLength == specsLengthCount) {
        displayResult.push(filteredProducts[i])
      }
    }
  } else {
    displayResult = filteredProducts
  }
}

//Lexi: Sort functions --------------------------------------

var productsContainer = document.getElementById('allProducts')

for (var i = 0; i < phones.length; i++) {
  addProductToPage(phones[i])
}

function sortNewest() {
  event.preventDefault()
  var sortedPhones = []

  var i, j
  for (i = 0; i < phones.length; i++) {
    for (j = i + 1; j < phones.length; j++) {
      if (phones[i].year < phones[j].year) {
        sortedPhones[i] = phones[i]
        phones[i] = phones[j]
        phones[j] = sortedPhones[i]
      }
    }
  }
  productsContainer.innerHTML = ''
  for (i = 0; i < phones.length; i++) {
    addProductToPage(phones[i])
  }
}

function sortLow() {
  event.preventDefault()
  var i, j
  var sortedPhones = []

  for (i = 0; i < phones.length; i++) {
    for (j = i + 1; j < phones.length; j++) {
      if (phones[i].price > phones[j].price) {
        sortedPhones[i] = phones[i]
        phones[i] = phones[j]
        phones[j] = sortedPhones[i]
      }
    }
  }
  productsContainer.innerHTML = ''
  for (i = 0; i < phones.length; i++) {
    addProductToPage(phones[i])
  }
}

function sortHigh() {
  event.preventDefault()

  var i, j
  var sortedPhones = []

  for (i = 0; i < phones.length; i++) {
    for (j = i + 1; j < phones.length; j++) {
      if (phones[i].price < phones[j].price) {
        sortedPhones[i] = phones[i]
        phones[i] = phones[j]
        phones[j] = sortedPhones[i]
      }
    }
  }
  productsContainer.innerHTML = ''
  for (i = 0; i < phones.length; i++) {
    addProductToPage(phones[i])
  }
}

// Lexi: Print on page  --------------------------------------

function addProductToPage(singleProduct) {
  var productDiv = document.createElement('div')
  productDiv.className = 'col-6 col-md-4 col__card card'
  productDiv.innerHTML +=
    "<h2 class='card__brand'>" + singleProduct.brand + '</h2>'
  productDiv.innerHTML +=
    "<h3 class='card__model'>" + singleProduct.model + '</h3>'
  productDiv.innerHTML +=
    "<img class='w-100' src='img/phone_images/PNG/" + singleProduct.image + "'>"
  productDiv.innerHTML +=
    "<p class='card__price'> $ " + singleProduct.price + '</p>'
  productDiv.innerHTML +=
    "<p class='d-inline-block text-truncate'>" + singleProduct.desc + '</p>'
  productDiv.innerHTML += '</div>'

  productsContainer.appendChild(productDiv)
}

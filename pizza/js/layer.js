const closeBtn = document.getElementById('close'),
    layerDiv = document.querySelector('.product-layer'),
    backgroundBox = document.querySelector('.cover'),
    productDrop = document.querySelectorAll('.product-drop');

closeBtn.addEventListener("click", () => {
    layerDiv.style.display = 'none'
    backgroundBox.style.display = 'none'
})

productDrop.forEach(item => {
    item.addEventListener("click", () => {
        layerDiv.style.display = 'flex'
        backgroundBox.style.display = 'flex'
    })
})
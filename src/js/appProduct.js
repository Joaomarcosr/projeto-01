class Product {
    constructor (nameProduct, priceProduct, purchasedate) {
        this.nameProduct = nameProduct; 
        this.priceProduct = priceProduct; 
        this.purchasedate = purchasedate; 
    } 
}

class ActionApp {
    addProduct (product) {
        //console.log(`${product.nameProduct}`)
        
        const element = document.createElement('p')
        
        element.innerHTML = `
            <div class="textInsert">
                   
                   <p class="boxElement"> 
                   <i id="iconsMoney" class="fa-solid fa-money-check-dollar"></i> </br>
                   <span class="textInfo">
                       <span>Nome do produto: ${product.nameProduct} </span> </br>
                       <span>Preço do produto: R$ ${product.priceProduct} </span></br>
                       <span class="dateJs">Comprado no dia: ${product.purchasedate}</span>
                   </span>
                   </p>
            </div>
        `
        let conteinerText = document.getElementsByClassName('areaAnswer')[0]
        conteinerText.style.display = 'block'
        conteinerText.appendChild(element)
        
        let btnExcluir = document.getElementsByClassName('btnDelete')[0]
        btnExcluir.addEventListener ('click', function () {
                element.remove()
                btnExcluir.style.display = 'none'
                document.getElementsByClassName('areaAnswer')[0].style.display = 'none'
            })    
    }
}

document.getElementById('form_product')
    .addEventListener('submit', function(e) {
        e.preventDefault(); 
        document.getElementsByClassName('btnDelete')[0].style.display = 'block'
        const nome = document.getElementById('nameProduct').value;
        const price = document.getElementById('priceProduct').value;
        const date = document.getElementById('dateProduct').value;
        
        if (nome == '' || price == '' || date == '') {
            window.alert('Ops, algo deu errado! Tente preencher os campos corretamente')
        } else {
            const product = new Product(nome, price, date);    
            const listItensAdd = new ActionApp() 
            listItensAdd.addProduct(product)
        }        
    }); 

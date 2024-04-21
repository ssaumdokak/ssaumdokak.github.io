var app = new Vue ({
    el:'.tag__tomatoes', 

    data:{
        products:[
        {id:1,title:"TAG 2000", short_text:'Russet Burbank', image:'1.jpg', desc:"Large, oblong-shaped potatoes with rough, netted brown skin and white flesh."},
        {id:2,title:"TAG 2001", short_text:'Red Bliss', image:'2.jpg', desc:"Small to medium-sized potatoes with thin, smooth, red skin and firm, white flesh."},
        {id:3,title:"TAG 2002", short_text:'Yukon Gold', image:'3.jpg', desc:"Medium-sized potatoes with thin, smooth, gold-colored skin and yellow flesh."},
        {id:4,title:"TAG 2003", short_text:'Fingerling', image:'4.jpg', desc:"Small, slender potatoes with thin skins and elongated shapes."},
        {id:5,title:"TAG 2004", short_text:'Katahdin', image:'5.jpg', desc:"Large, round potatoes with light tan skin and white flesh."}],
        product:[],
        cart:[],
        cartId:[],
        contactFields:[],
        btnVisible: 0,
        orderVisible: 0
    },
    
    
    mounted:function(){
        console.log(window.localStorage.getItem('prod'));
        this.getProduct();
        this.checkInCart();
        this.getCart();
        console.log(this.cartId);
        console.log(this.contactFields);
    },  
    
    methods:{
        addItem:function(id) {
            window.localStorage.setItem('prod',id);
        },
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },
        addToCart:function(id){
        var cart=[];
  
            if(window.localStorage.getItem('cart')){
                cart = window.localStorage.getItem('cart').split(',');
            }
            
            console.log(cart, cart.indexOf(String(id)))
            if(cart.indexOf(id)==-1){
                cart.push(id);
                window.localStorage.setItem('cart',cart.join());
                this.btnVisible=1;
        }

    },
        checkInCart:function() {
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(this.product.id) !=-1 ) this.btnVisible=1;
        },

        getCart:function() {
            for(i in window.localStorage.getItem('cart')) {
                for(p in this.products) {
                    if(this.products[p].id == window.localStorage.getItem('cart').split(',')[i]) {
                       this.cart.push(this.products[p]);
                       this.cartId.push(this.products[p].id);
                    }
                }
            }
        },

        removeFromCart:function(id) {
            for(i in this.cart) {
                if(this.cart[i].id == id) {
                    this.cart.splice(i, 1);
                    this.cartId.splice(i, 1);
                    window.localStorage.setItem('cart', this.cartId.join());
                }
            }
        },
        makeOrder:function() {
            this.orderVisible = 1;
            this.cart = [];
            this.cartId = [];
            window.localStorage.removeItem('cart');
        }
    },
});

var app = new Vue ({
    el:".bananasList",
    data:{
        products:[
        {id:1,title:"TAG 2000", short_text:'Green banana', image:'1.jpg', desc:"This is a separate variety, not unripe bananas. The fruits are large and not edible when raw. They make banana chips."},
        {id:2,title:"TAG 2001", short_text:'Red banana', image:'2.jpg', desc:"The skin is very thin and separates along with the top layer of pulp. The pulp is yellow, very soft, sweet, fragrant."},
        {id:3,title:"TAG 2002", short_text:'Poovan', image:'3.jpg', desc:"Medium size, firm flesh, light yellow, the most sour taste compared to the rest, fragrant, tasty."},
        {id:4,title:"TAG 2003", short_text:'Nendrum', image:'4.jpg', desc:"Large, yellow. The flesh is orange, dense, almost crispy, with a hard core."},
        {id:5,title:"TAG 2004", short_text:'Mysore rastali', image:'5.jpg', desc:"The skin is orange, thin, removed with the top layer of pulp. It is tasty, about like red, but with a little sourness."}]
    },
    mounted:function() {
        console.log(window.localStorage.getItem('prod'));
    },
    methods:{
        addItem:function(id) {
            window.localStorage.setItem('prod',id);
        }
    }
});

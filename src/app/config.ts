export class Config {
    static ROOT  = 'http://localhost:3000'

    static  URLS = {
        signIn : Config.ROOT + '/auth/signin',
        logIn : Config.ROOT + '/auth/login',
        products : Config.ROOT + '/products',
        images : Config.ROOT + '/static/',
        singleProduct: Config.ROOT +'/product/:id',
        cart:Config.ROOT +'/add-cart',
        getCart:Config.ROOT+ '/add-cart',
        getOrders:Config.ROOT + '/orders',
        getAddress:Config.ROOT + '/address'
    }
}

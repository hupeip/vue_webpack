 export  function configRouter (router) {
     router.map({
         '/': {
              name: 'index',
              component: require('./components/index/index.vue'),
              subRoutes: {
                  '/home': {
                        name: 'home',
                        component: require('./components/home/home.vue'),
                  },
                  'photos': {
                        name: 'photos',
                        component: require('./components/photos/photos.vue'),
                  }
              }
          },
          '/login': {
               name: 'login',
               component: require('./components/test/login.vue')
           },

     });
 }

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'onewattapp',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                href: "https://fonts.gstatic.com",

            },
            {
                href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",

            },

            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap",

            },
        ],
        script: [{
                src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
                integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
                crossorigin: "anonymous"
            },

            {
                src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
                integrity: "sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN",
                crossorigin: "anonymous"
            },
            {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js",
                integrity: "sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2",
                crossorigin: "anonymous"
            },

            {
                src: 'js/nav.js'
            }

        ]

    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'assets/css/responsive.css',
        'assets/css/main.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
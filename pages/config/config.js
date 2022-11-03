module.exports = {
    domain: 'http://localhost:3002',
    // urlImg: 'http://localhost:3002/api/region/files',
    // image: {
    //     remotePatterns: [
    //         {
    //             protocol: 'http',
    //             hostname: 'localhost',
    //             port: '3002',
    //             pathname: '/api/region/files/**',
    //         },
    //     ],
    // }

    urlImg: 'http://localhost:3002/api/country/files',
    image: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3002',
                pathname: '/api/country/files/**',
            },
        ],
    }
}
// next.js configuration
// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = '/'

// if (isGithubActions) {
//   const repo = "https://hogwild.github.io/immsmart_demo/"
//   let assetPrefix = '/${repo}/'
//   let basePath = '/${repo}'
// }

// const repo = "https://hogwild.github.io/immsmart_demo"
// const repo = "immsmart_demo";
// let assetPrefix = `/${repo}/`;
// let basePath = `/${repo}`;

const nextConfig = {
  // assetPrefix: assetPrefix,
  // basePath: basePath,
  output: 'export',
  images: {
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    loader: "imgix", // Uncomment this line for STATIC EXPORT
    path: "", // Uncomment this line for STATIC EXPORT
  },
  env: {
    production_type: "static", //"server", // Change variable to "static" for STATIC EXPORT
  },
  trailingSlash: true, // Uncomment this line for STATIC EXPORT

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeUselessDefs",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig

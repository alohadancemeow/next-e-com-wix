# Next.js E-commerce with Wix Studio

This repository showcases a basic functional e-commerce application built using the latest versions of Next.js, TypeScript, and Wix CMS.
For learning CMS.

**🎉 Key Features:**

- **Tech Stack:** Next.js (latest), TypeScript + Wix
- **Inspiration:** [Link to original repository](https://github.com/safak/next-ecommerce/tree/starter) (adapted for this implementation) 🙏
- **Wix Studio:** [Wix studio](https://www.wix.com/studio)
- **Purpose:** For learning CMS

**👋 Getting Started:**

1. Clone this repository.
2. Install dependencies (`npm install` or `yarn install`).
3. Set up the appropriate environment variables in the `.env` file (database credentials, API keys, etc.).

```bash
NEXT_PUBLIC_WIX_CLIENT_ID=
FEATURED_PRODUCTS_FEATURED_CATEGORY_ID=
FEATURED_PRODUCTS_NEW_CATEGORY_ID=
NEXT_PUBLIC_WIX_APP_ID=
```

**🚀 Deploy on Netlify**

Create a file called `netlify.toml` in the root of your project. Copy and paste the code snippet below into the netlify.toml file.

```bash
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Install the Netlify dependency package

```bash
npm i @netlify/plugin-nextjs
```


**🖼️ Screenshot:**

![Image of shoe store home page](public/Screenshot.png)

**👋 Contributions Welcome!**

Encouraging constructive feedback and pull requests to enhance this project.

**⚠️ Disclaimer:**

This repository is currently under development. I will continuously improve and document it. Stay tuned for updates!


**🎉 Live site:** https://next-e-com-wix.netlify.app
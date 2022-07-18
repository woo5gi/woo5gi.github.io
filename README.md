# Gatsby 블로그 개발

## 파일 구조

```

    ├── public
    │   ├── apple-icon.png
    │   ├── favicon.png
    │   ├── index.html
    │   ├── logo.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── assets
    │   │   ├── images
    │   │   ├── theme
    │   │   │   ├── base
    │   │   │   ├── components
    │   │   │   ├── functions
    │   │   └── └── index.js
    │   ├── components
    │   │   ├── MKAlert
    │   │   ├── MKAvatar
    │   │   ├── MKBadge
    │   │   ├── MKBox
    │   │   ├── MKButton
    │   │   ├── MKDatePicker
    │   │   ├── MKInput
    │   │   ├── MKPagination
    │   │   ├── MKProgress
    │   │   ├── MKSnackbar
    │   │   ├── MKSocialButton
    │   │   └── MKTypography
    │   ├── examples
    │   │   ├── Breadcrumbs
    │   │   ├── Cards
    │   │   ├── Footer
    │   │   ├── Navbars
    │   │   └── Tables
    │   ├── layouts
    │   │   ├── pages
    │   │   │    └── landing-pages
    │   │   ├── sections
    │   │   │    ├── attention-catchers
    │   │   │    ├── components
    │   │   │    ├── elements
    │   │   │    ├── input-areas
    │   │   │    ├── input-navigation
    │   │   └──  └── page-sections
    │   ├── pages/LandingPages
    │   │   ├── AboutUs
    │   │   ├── Bigdata
    │   │   ├── Infra
    │   │   ├── Lab
    │   │   ├── Meta
    │   │   └── Security
    │   ├── App.js
    │   ├── index.js
    │   ├── footer.routes.js
    │   └── routes.js
    ├── .eslintrc.json
    ├── .prettierrc.json
    ├── jsconfig.json
    ├── package.json
    └── README.md
```

## 사용한 템플릿

https://www.creative-tim.com/product/material-kit-react
https://www.creative-tim.com/learning-lab/react/overview/material-kit/

## 테스트 배포 방법 (github.io)

npm run build
npm run deploy

export const projects = [
  {
    title: 'E-Commerce Shopping Cart',
    description:"React e-commerce application created using Vite and TypeScript. The user can select wanted items and insert them into the shopping cart. The Shopping cart shows the products and the total cost. A custom hook (useLocalStorage) was used to keep items in the shopping cart when the page is refreshed.",
    image: '/images/laptop.png',
    tags: ['React', 'TypeScript', 'Bootstrap', 'LocalStorage'],
    source: 'https://laptopsuperstore.netlify.app/',
    visit: 'https://github.com/bquaiatti/ecommerce',
    id: 0,
  },
  {
    title: 'LinkTree',
    description: "A react application that allows only logged users (admin) to create links using a private webpage and show them on a public webpage. I used private routes inside the react router, and an authentication system to check if the user is logged in. Firebase is used to store user's data. To test this app, use email=bruno@test.com and password=123456",
    image: '/images/linktree.png',
    tags: ['Firebase (DB)', 'Authentication', 'Private-Route'],
    source: 'https://linktree22.netlify.app/login',
    visit: 'https://github.com/bquaiatti/linktree',
    id: 1,
  },
  {
    title: 'Drinks Paradise',
    description: "An application created using react.js to fetch drinks data from a third party API. The user can search for a drink and learn how to make it by checking received instructions. I used the React router for this application, and React hooks (Context API) to pass properties to different components.",
    image: '/images/drinksparadise.png',
    tags: ['API', 'Javascript', 'React', 'useContext'],
    source: 'https://drinks-paradise.netlify.app/', target: "_blank",
    visit: 'https://github.com/bquaiatti/drinks-paradise',
    id: 2,
  },
  {
    title: 'Portfolio',
    description: "Webpage React application created using Next.js. It used JavaScript code and css Styled-Components. It is a dynamic application structured on anchor tags to make navigation very easy and simple. The application shows professional information about the author.",
    image: '/images/portfolio.png',
    tags: ['React', 'Styled-Components', 'Next.js'],
    source: '',
    visit: 'https://github.com/bquaiatti/portfolio',
    id: 3,
  },
];
/*
href="https://github.com/bquaiatti/ecommerce" target="_blank"
*/
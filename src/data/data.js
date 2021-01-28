import Ecom1 from "../assets/ecomm1.PNG";
import Ecom2 from "../assets/ecomm2.PNG";
import Ecom3 from "../assets/ecomm3.PNG";
import Movies1 from "../assets/movies1.PNG";
import Movies2 from "../assets/movies2.PNG";
import Movies3 from "../assets/movies3.PNG";
import Social1 from "../assets/social1.PNG";
import Social2 from "../assets/social2.PNG";
import Social3 from "../assets/social3.PNG";
const data = [
  {
    id: 1,
    projectTitle: "Mr. Electronics",
    projectTech:
      "ReactJS, FireBase, Stripe API, Cloud Functions, React Context API, localstorage",
    projectAbout: `Mr. Electronics is an ecommerce application. Users can register, sign-in and view the latest products. They can also view products by category. Once a user has added the items they wish to purchase to the cart they can check out using stripe.`,
    projectImages: [Ecom1, Ecom2, Ecom3],
    codeUrl: `https://github.com/onlytruejeremy/mr-electronics`,
    viewUrl: `https://mr-electronics.web.app/`,
    host: "FireBase (Fast Loading)"
  },
  {
    id: 2,
    projectTitle: "Favorite Movies",
    projectTech: "ReactJS, FireBase, React Bootstrap, The Movie Database API",
    projectAbout: `Favorite movies is a movie directory application. Users can register, sign-on, comment and add their movies to their favorites.`,
    projectImages: [Movies1, Movies2, Movies3],
    codeUrl: `https://github.com/onlytruejeremy/nothingbutmovies`,
    viewUrl: `https://movies-c4251.web.app/`,
    host: "FireBase (Fast Loading)"
  },
  {
    id: 3,
    projectTitle: "QuickSocial",
    projectTech:
      "ReactJS, MySQL, NodeJS, JWT, BCRYPT, Reddit API, React Context API",
    projectAbout: `QuickSocial is a simple social media application where users can make posts with or without images, add friends and view the news.`,
    projectImages: [Social1, Social2, Social3],
    codeUrl: `https://codesandbox.io/s/blissful-cray-nosi2`,
    viewUrl: `https://nosi2-3000.sse.codesandbox.io/`,
    host: "Codesandbox (Slow Loading)"
  }
];

export default data;

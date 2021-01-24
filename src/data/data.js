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
    projectImages: [Ecom1, Ecom2, Ecom3]
  },
  {
    id: 2,
    projectTitle: "Favorite Movies",
    projectTech: "ReactJS, FireBase, React Bootstrap, The Movie Database API",
    projectAbout: `Favorite movies as a movie directory application. Users can register, sign-on, comment and add their movies to their favorites.`,
    projectImages: [Movies1, Movies2, Movies3]
  },
  {
    id: 3,
    projectTitle: "QuickSocial",
    projectTech: "ReactJS, MySQL, NodeJS",
    projectAbout: `QuickSocial is a simple social media application where users can make posts with or without images, add friends and view the news.`,
    projectImages: [Social1, Social2, Social3]
  }
];

export default data;

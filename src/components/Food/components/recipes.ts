import { Slide } from "./Slides";

export type RecipeProps = {
  title: string;
  ingredients: string[];
  steps: string;
  imageURLs: Slide[];
};

export const recipes: RecipeProps[] = [
  {
    title: "Margherita Pizza",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 1/2 teaspoons active dry yeast",
      "1 teaspoon salt",
      "1 cup warm water",
      "1/4 cup olive oil",
      "1/2 cup tomato sauce",
      "8 ounces mozzarella cheese, sliced",
      "1/4 cup fresh basil leaves",
      "1/2 teaspoon dried oregano",
    ],
    steps:
      "1. In a large mixing bowl, combine flour, yeast, and salt. Stir in warm water and olive oil.\n2. Knead the dough until smooth and elastic.\n3. Cover the dough and let it rise for about 1 hour.\n4. Preheat the oven to 475°F (245°C).\n5. Roll out the dough into a circle and transfer it to a baking sheet.\n6. Spread tomato sauce over the dough and top with mozzarella cheese.\n7. Bake for 12-15 minutes or until the crust is golden and the cheese is bubbly.\n8. Remove from the oven and garnish with fresh basil leaves and dried oregano.\n9. Slice and serve.",
    imageURLs: [
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
      },
      {
        img: "https://product-assets.faasos.io/production/product/image_1631125907990_Low_IFC_Double_Cheese_Pizza.jpg",
      },
    ],
  },
  {
    title: "Chocolate Chip Cookies",
    ingredients: [
      "1 cup butter, softened",
      "1 cup white sugar",
      "1 cup packed brown sugar",
      "2 eggs",
      "2 teaspoons vanilla extract",
      "3 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "2 cups semisweet chocolate chips",
    ],
    steps:
      "1. Preheat the oven to 350°F (175°C).\n2. In a large mixing bowl, cream together butter, white sugar, and brown sugar until smooth.\n3. Beat in the eggs one at a time, then stir in vanilla.\n4. In a separate bowl, combine flour, baking soda, and salt. Gradually add the dry ingredients to the creamed mixture.\n5. Fold in the chocolate chips.\n6. Drop rounded tablespoons of dough onto ungreased baking sheets.\n7. Bake for 10-12 minutes or until golden brown.\n8. Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack.\n9. Enjoy!",
    imageURLs: [
      {
        img: "https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-master768.jpg",
      },
      {
        img: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/62298.jpg?output-format=auto&output-quality=auto&resize=600:*",
      },
    ],
  },
  {
    title: "Chicken Stir-Fry",
    ingredients: [
      "2 boneless, skinless chicken breasts, sliced",
      "2 tablespoons soy sauce",
      "1 tablespoon cornstarch",
      "1/4 cup chicken broth",
      "1 tablespoon vegetable oil",
      "1 bell pepper, sliced",
      "1 cup broccoli florets",
      "1 carrot, sliced",
      "2 cloves garlic, minced",
      "1 teaspoon grated ginger",
      "2 green onions, chopped",
    ],
    steps:
      "1. In a small bowl, combine soy sauce, cornstarch, and chicken broth. Set aside.\n2. Heat vegetable oil in a large skillet or wok over medium-high heat.\n3. Add chicken slices and stir-fry until browned and cooked through. Remove from skillet and set aside.\n4. In the same skillet, add bell pepper, broccoli, carrot, garlic, and ginger. Stir-fry until vegetables are crisp-tender.\n5. Return the chicken to the skillet and pour in the soy sauce mixture.\n6. Cook, stirring constantly, until the sauce has thickened.\n7. Garnish with chopped green onions.\n8. Serve over rice or noodles.",
    imageURLs: [
      {
        img: "https://natashaskitchen.com/wp-content/uploads/2018/08/Chicken-Stir-Fry-1-1-500x500.jpg",
      },
      {
        img: "https://everydaydishes.com/wp-content/uploads/2014/12/chicken-stir-fry-with-noodles-everydaydishes_com-H.jpg",
      },
    ],
  },
  {
    title: "Caprese Salad",
    ingredients: [
      "2 ripe tomatoes, sliced",
      "8 ounces fresh mozzarella cheese, sliced",
      "1/4 cup fresh basil leaves",
      "2 tablespoons balsamic vinegar",
      "2 tablespoons extra-virgin olive oil",
      "Salt and pepper to taste",
    ],
    steps:
      "1. Arrange tomato slices and mozzarella cheese slices on a serving platter.\n2. Tuck fresh basil leaves between the tomato and mozzarella slices.\n3. Drizzle with balsamic vinegar and olive oil.\n4. Season with salt and pepper.\n5. Serve immediately.",
    imageURLs: [
      {
        img: "https://feelgoodfoodie.net/wp-content/uploads/2017/03/Avocado-Caprese-Salad-5.jpg",
      },
      {
        img: "https://centslessdeals.com/wp-content/uploads/2020/09/Pesto-Caprese-Salad-CentslessMeals-1.jpg",
      },
    ],
  },
  {
    title: "Pasta Carbonara",
    ingredients: [
      "8 ounces spaghetti",
      "4 slices bacon, diced",
      "2 cloves garlic, minced",
      "2 large eggs",
      "1/2 cup grated Parmesan cheese",
      "1/4 cup chopped fresh parsley",
      "Salt and pepper to taste",
    ],
    steps:
      "1. Cook spaghetti according to package instructions. Drain and set aside.\n2. In a large skillet, cook bacon until crispy. Remove from skillet and drain on paper towels.\n3. In the same skillet, sauté garlic until fragrant.\n4. In a bowl, whisk together eggs, Parmesan cheese, and chopped parsley.\n5. Add cooked spaghetti to the skillet with garlic and toss to coat.\n6. Remove from heat and quickly stir in the egg mixture.\n7. The heat from the spaghetti will cook the eggs.\n8. Season with salt and pepper.\n9. Serve topped with crispy bacon.",
    imageURLs: [
      {
        img: "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1558_1_1436795948.jpg?tr=w-800,h-800",
      },
      {
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg",
      },
    ],
  },
  {
    title: "Caesar Salad",
    ingredients: [
      "1 head romaine lettuce, torn into bite-sized pieces",
      "1/2 cup grated Parmesan cheese",
      "1/2 cup croutons",
      "1/4 cup Caesar dressing",
      "1 tablespoon lemon juice",
      "1 clove garlic, minced",
      "Salt and pepper to taste",
    ],
    steps:
      "1. In a large salad bowl, combine torn lettuce, grated Parmesan cheese, and croutons.\n2. In a small bowl, whisk together Caesar dressing, lemon juice, minced garlic, salt, and pepper.\n3. Pour the dressing over the salad and toss to coat.\n4. Serve immediately.",
    imageURLs: [
      {
        img: "https://www.halfbakedharvest.com/wp-content/uploads/2022/07/Buffalo-Ranch-Pretzel-Chicken-Caesar-Salad-1.jpg",
      },
      {
        img: "https://www.recipetineats.com/wp-content/uploads/2016/05/Caesar-Salad_7-SQ.jpg",
      },
    ],
  },
  {
    title: "Beef Tacos",
    ingredients: [
      "1 pound ground beef",
      "1 tablespoon taco seasoning",
      "8 small flour tortillas",
      "1 cup shredded lettuce",
      "1 cup diced tomatoes",
      "1/2 cup shredded cheddar cheese",
      "1/4 cup chopped cilantro",
      "1/4 cup diced red onion",
      "Sour cream and salsa for serving",
    ],
    steps:
      "1. In a skillet, brown ground beef over medium heat. Drain excess fat.\n2. Add taco seasoning and cook according to package instructions.\n3. Warm flour tortillas in a dry skillet or microwave.\n4. Assemble tacos by placing a spoonful of ground beef on each tortilla.\n5. Top with shredded lettuce, diced tomatoes, shredded cheddar cheese, cilantro, and red onion.\n6. Serve with sour cream and salsa.",
    imageURLs: [
      {
        img: "https://feelgoodfoodie.net/wp-content/uploads/2017/04/Ground-Beef-Tacos-9.jpg",
      },
      {
        img: "https://thegirlonbloor.com/wp-content/uploads/2022/10/Crockpot-beef-tacos-8.jpg",
      },
    ],
  },
  {
    title: "Chicken Parmesan",
    ingredients: [
      "2 boneless, skinless chicken breasts",
      "1 cup breadcrumbs",
      "1/2 cup grated Parmesan cheese",
      "2 eggs, beaten",
      "1 cup marinara sauce",
      "1 cup shredded mozzarella cheese",
      "1/4 cup chopped fresh basil",
      "Salt and pepper to taste",
    ],
    steps:
      "1. Preheat the oven to 400°F (200°C).\n2. Pound the chicken breasts to an even thickness.\n3. In a shallow dish, combine breadcrumbs, grated Parmesan cheese, salt, and pepper.\n4. Dip each chicken breast into beaten eggs, then coat with the breadcrumb mixture.\n5. Heat olive oil in a skillet over medium heat. Cook the chicken breasts until golden brown on both sides.\n6. Transfer the chicken breasts to a baking dish.\n7. Pour marinara sauce over the chicken breasts and top with shredded mozzarella cheese.\n8. Bake for 20-25 minutes or until the chicken is cooked through and the cheese is melted and bubbly.\n9. Sprinkle with chopped fresh basil before serving.",
    imageURLs: [
      {
        img: "https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Parmesan-Recipe-f-500x500.jpg",
      },
      {
        img: "https://www.skinnytaste.com/wp-content/uploads/2012/09/skinny-chicken-parmigiana-550x733.jpg",
      },
    ],
  },
  {
    title: "Spaghetti Bolognese",
    ingredients: [
      "8 ounces spaghetti",
      "1 tablespoon olive oil",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 carrot, diced",
      "1 celery stalk, diced",
      "8 ounces ground beef",
      "8 ounces ground pork",
      "1 can (14 ounces) crushed tomatoes",
      "1/4 cup tomato paste",
      "1/2 cup red wine (optional)",
      "1 teaspoon dried oregano",
      "1 teaspoon dried basil",
      "Salt and pepper to taste",
      "Grated Parmesan cheese for serving",
    ],
    steps:
      "1. Cook spaghetti according to package instructions. Drain and set aside.\n2. In a large skillet, heat olive oil over medium heat.\n3. Add diced onion, minced garlic, diced carrot, and diced celery. Sauté until vegetables are softened.\n4. Add ground beef and ground pork to the skillet. Cook until browned and cooked through.\n5. Stir in crushed tomatoes, tomato paste, red wine (if using), dried oregano, dried basil, salt, and pepper.\n6. Simmer the sauce for about 20 minutes.\n7. Serve the sauce over cooked spaghetti.\n8. Sprinkle with grated Parmesan cheese.",
    imageURLs: [
      {
        img: "https://www.sprinklesandsprouts.com/wp-content/uploads/2019/04/Authentic-Spaghetti-Bolognese-SQ.jpg",
      },
      {
        img: "https://leitesculinaria.com/wp-content/uploads/2021/09/spaghetti-bolognese.jpg",
      },
    ],
  },
  {
    title: "Chocolate Cake",
    ingredients: [
      "2 cups all-purpose flour",
      "2 cups sugar",
      "3/4 cup unsweetened cocoa powder",
      "1 1/2 teaspoons baking powder",
      "1 1/2 teaspoons baking soda",
      "1 teaspoon salt",
      "2 eggs",
      "1 cup milk",
      "1/2 cup vegetable oil",
      "2 teaspoons vanilla extract",
      "1 cup boiling water",
      "Chocolate frosting (optional)",
    ],
    steps:
      "1. Preheat the oven to 350°F (175°C).\n2. In a large mixing bowl, combine flour, sugar, cocoa powder, baking powder, baking soda, and salt.\n3. Add eggs, milk, vegetable oil, and vanilla extract. Beat on medium speed for 2 minutes.\n4. Stir in boiling water. The batter will be thin.\n5. Pour the batter into greased and floured baking pans.\n6. Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.\n7. Allow the cakes to cool in the pans for 10 minutes before transferring to a wire rack.\n8. If desired, frost the cakes with chocolate frosting.\n9. Slice and serve.",
    imageURLs: [
      {
        img: "https://pixnio.com/free-images/food-and-drink/desserts-cakes/chocolate-cake-725x544.jpg",
      },
      {
        img: "https://i1.pickpik.com/photos/296/812/924/cake-cream-cake-cherry-pie-chocolate-cake-preview.jpg",
      },
    ],
  },
];

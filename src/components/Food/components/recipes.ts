import { Slide } from "./Slides";

export type RecipeProps = {
  title: string;
  ingredients: string[];
  steps: string[];
  generalDescription: string;
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
    steps: [
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ],
    generalDescription:
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
];

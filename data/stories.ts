import { faker } from "@faker-js/faker";

export const marketStories = new Array(10).fill(0).map(() => {
  return {
    id: faker.number.int({ min: 1, max: 10000 }),
    title: faker.lorem.words(2),
    content: faker.lorem.paragraph(),
    Image: faker.image.urlPicsumPhotos(),
  };
});

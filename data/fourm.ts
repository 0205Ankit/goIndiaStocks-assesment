import { faker } from "@faker-js/faker";

export const fourmCards = new Array(15).fill(0).map(() => {
  return {
    id: faker.number.int({ min: 1, max: 10000 }),
    user: faker.person.fullName(),
    userImage: faker.image.avatar(),
    content: faker.lorem.paragraph(),
    sector: faker.number.int({ min: 1, max: 5 }),
    likes: faker.number.int({ min: 1, max: 3000 }),
    comments: faker.number.int({ min: 1, max: 3000 }),
    views: faker.number.int({ min: 1, max: 5000 }),
    dateUploaded: faker.number.int({ min: 1, max: 60 }),
  };
});

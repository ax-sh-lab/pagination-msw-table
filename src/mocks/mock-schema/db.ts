import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";
export const db = factory({
  // Create a "user" model,
  user: {
    // ...with these properties and value getters.
    id: primaryKey(() => faker.string.uuid()),
    firstName: () => faker.person.firstName(),
    lastName: () => faker.person.lastName(),
  },
});

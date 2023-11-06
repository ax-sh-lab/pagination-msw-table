import { faker } from '@faker-js/faker';
import { factory, primaryKey } from '@mswjs/data';
export const db = factory({
  // Create a "user" model,
  user: {
    // ...with these properties and value getters.
    id: primaryKey(() => faker.string.uuid()),
    first_name: () => faker.person.firstName(),
    last_name: () => faker.person.lastName(),
  },
});

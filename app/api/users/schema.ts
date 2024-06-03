//6-8-Creating data in database

import { z } from "zod";

//For validating We should also except an email because in the User model
// we created we also defined the email.
const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
});

export default schema;

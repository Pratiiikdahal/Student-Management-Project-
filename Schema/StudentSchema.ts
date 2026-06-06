   import {z} from 'zod';
   
   export const student_schema=z.object({
        name:z.string(),
        age:z.number({message:'Age is not valid'}).int({message:'Please enter a valid age !'}).positive(),
        course:z.string({message:'Please enter a valid course'}),
        email:z.string({required_error:'Email is required !'}).email({message:'Invalid email address entered.Please enter a valid email address !'}),
        address:z.string(),
        phone:z.string({message:'Please Enter a valid phone number !'}).min(10).max(10).regex(/^\d{10}$/, {
    message: "Phone number must be 10 digits",
  }),
    })
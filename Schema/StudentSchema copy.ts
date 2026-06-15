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

  export const loginSchema=z.object({
    email:z.string().email({message:'Invalid Email Format. Please enter a Valid format.'}),
    password:z.string().max(16,{message:'Password too long'}).min(8,{message:'Password too short'}).regex(/[A-Z]/, { }).regex(/[0-9]/, { message: 
      "Password must include a number" }) .regex(/[^A-Za-z0-9]/, { message: "Password must include a special character"})
  })
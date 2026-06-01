   import {z} from 'zod';
   
   export const student_schema=z.object({
        student_name:z.string(),
        student_age:z.number({message:'Age is not valid'}).int({message:'Please enter a valid age !'}).positive(),
        course_enrolled:z.string({message:'Please enter a valid course'}),
        student_email:z.string({required_error:'Email is required !'}).email({message:'Invalid email address entered.Please enter a valid email address !'}),
        student_address:z.string(),
        student_phone:z.string({message:'Please Enter a valid phone number !'}).min(10).max(10).regex(/^\d{10}$/, {
    message: "Phone number must be 10 digits",
  }),
    })
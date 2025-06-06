import { z } from "zod";
// import { Days } from "./bookings.constant";

// const timeStringSchema = z.string().refine(
//   (time) => {
//     const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // 00-09 10-19 20-23
//     return regex.test(time);
//   },
//   {
//     message: 'Invalid time format , expected "HH:MM" in 24 hours format',
//   }
// );

// const createOfferedCourseValidationSchema = z.object({
//   body: z
//     .object({
//       teacher: z.string(),
//       student: z.string(),
//       days: z.array(z.enum([...Days] as [string, ...string[]])),
//       startTime: timeStringSchema, // HH: MM   00-23: 00-59
//       endTime: timeStringSchema,
//       duration: z.number().min(1, {
//         message: "Duration should be greater than 0",
//       }),
//     })
//     .refine(
//       (body) => {
//         // startTime : 10:30  => 1970-01-01T10:30
//         //endTime : 12:30  =>  1970-01-01T12:30

//         const start = new Date(`1970-01-01T${body.startTime}:00`);
//         const end = new Date(`1970-01-01T${body.endTime}:00`);

//         return end > start;
//       },
//       {
//         message: "Start time should be before End time !  ",
//       }
//     ),
// });

// export const BookingsValidation = {
//   createOfferedCourseValidationSchema,
// };

const createOfferedCourseValidationSchema = z.object({
  body: z.object({
    teacher: z.string(),
    student: z.string(),
    date: z.string(),
    timeSlot: z.string(),
    subject: z.string(),

    duration: z.string(),
  }),
});

export const BookingsValidation = {
  createOfferedCourseValidationSchema,
};

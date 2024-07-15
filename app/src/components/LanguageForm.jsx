// import React from 'react';
// import { useForm, useFieldArray } from 'react-hook-form';

// const languagesList = ["English", "Spanish", "French", "German"];

// const LanguageForm = () => {
//   const { control, handleSubmit, register, watch, getValues, formState: { errors } } = useForm({
//     defaultValues: {
//       selectedLanguages: [],
//       languages: []
//     }
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: 'languages'
//   });

//   const watchSelectedLanguages = watch("selectedLanguages");

//   const validateSkills = (value, index) => {
//     const { can_read, can_write, can_speak } = value[index];
//     return can_read || can_write || can_speak || "At least one skill (read, write, or speak) must be selected";
//   };

//   const onLanguageChange = (language, checked) => {
//     const currentLanguages = getValues("languages");
//     if (checked) {
//       append({ name: language, can_read: false, can_write: false, can_speak: false });
//     } else {
//       const index = currentLanguages.findIndex(l => l.name === language);
//       remove(index);
//     }
//   };

//   const validateSelectedLanguages = (selectedLanguages) => {
//     return selectedLanguages.length > 0 || "At least one language must be selected";
//   };

//   const onSubmit = data => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <h3>Select Languages</h3>
//         {languagesList.map(language => (
//           <label key={language}>
//             <input
//               type="checkbox"
//               value={language}
//               {...register('selectedLanguages', { validate: validateSelectedLanguages })}
//               onChange={(e) => onLanguageChange(language, e.target.checked)}
//             />
//             {language}
//           </label>
//         ))}
//         {errors.selectedLanguages && <p>{errors.selectedLanguages.message}</p>}
//       </div>
//       {fields.map((field, index) => (
//         <div key={field.id}>
//           <h4>{field.name}</h4>
//           <label>
//             <input
//               type="checkbox"
//               {...register(`languages.${index}.can_read`, { validate: () => validateSkills(getValues('languages'), index) })}
//             />
//             Can Read
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               {...register(`languages.${index}.can_write`, { validate: () => validateSkills(getValues('languages'), index) })}
//             />
//             Can Write
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               {...register(`languages.${index}.can_speak`, { validate: () => validateSkills(getValues('languages'), index) })}
//             />
//             Can Speak
//           </label>
//           {errors.languages?.[index]?.can_read && <p>{errors.languages[index].can_read.message}</p>}
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default LanguageForm;
/**********************************************************************/
// import React from 'react';
// import { useForm, useFieldArray, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const languagesList = ["English", "Spanish", "French", "German"];

// const validationSchema = yup.object().shape({
//   selectedLanguages: yup.array().min(1, "At least one language must be selected"),
//   languages: yup.array().of(
//     yup.object().shape({
//       name: yup.string().required(),
//       can_read: yup.bool(),
//       can_write: yup.bool(),
//       can_speak: yup.bool(),
//     }).test(
//       'at-least-one-skill',
//       'At least one skill (read, write, or speak) must be selected',
//       (value) => value.can_read || value.can_write || value.can_speak
//     )
//   )
// });

// const LanguageForm = () => {
//   const { control, handleSubmit, register, watch, getValues, formState: { errors } } = useForm({
//     resolver: yupResolver(validationSchema),
//     defaultValues: {
//       selectedLanguages: [],
//       languages: []
//     }
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: 'languages'
//   });

//   const watchSelectedLanguages = watch("selectedLanguages");

//   const onLanguageChange = (language, checked) => {
//     const currentLanguages = getValues("languages");
//     if (checked) {
//       append({ name: language, can_read: false, can_write: false, can_speak: false });
//     } else {
//       const index = currentLanguages.findIndex(l => l.name === language);
//       remove(index);
//     }
//   };

//   const onSubmit = data => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <h3>Select Languages</h3>
//         {languagesList.map(language => (
//           <label key={language}>
//             <input
//               type="checkbox"
//               value={language}
//               {...register('selectedLanguages')}
//               onChange={(e) => onLanguageChange(language, e.target.checked)}
//             />
//             {language}
//           </label>
//         ))}
//         {errors.selectedLanguages && <p>{errors.selectedLanguages.message}</p>}
//       </div>
//       {fields.map((field, index) => (
//         <div key={field.id}>
//           <h4>{field.name}</h4>
//           <label>
//             <input
//               type="checkbox"
//               {...register(`languages.${index}.can_read`)}
//             />
//             Can Read
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               {...register(`languages.${index}.can_write`)}
//             />
//             Can Write
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               {...register(`languages.${index}.can_speak`)}
//             />
//             Can Speak
//           </label>
//           {errors.languages?.[index]?.message && <p>{errors.languages[index].message}</p>}
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default LanguageForm;


// import React from 'react';
// import { useForm, useFieldArray, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const languagesList = ["English", "Spanish", "French", "German"];

// const validationSchema = yup.object().shape({
//   languages: yup.array().of(
//     yup.object().shape({
//       name: yup.string().required(),
//       can_read: yup.bool(),
//       can_write: yup.bool(),
//       can_speak: yup.bool(),
//     }).test(
//       'at-least-one-skill',
//       'At least one skill (read, write, or speak) must be selected',
//       (value) => value.can_read || value.can_write || value.can_speak
//     )
//   ).min(1, "At least one language must be selected"),
// });

// const LanguageForm = () => {
//   const { control, handleSubmit, register, watch, getValues, formState: { errors } } = useForm({
//     resolver: yupResolver(validationSchema),
//     defaultValues: {
//       languages: []
//     }
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: 'languages'
//   });

//   const watchLanguages = watch("languages");

//   const onLanguageChange = (language, checked) => {
//     const currentLanguages = getValues("languages");
//     if (checked) {
//       append({ name: language, can_read: false, can_write: false, can_speak: false });
//     } else {
//       const index = currentLanguages.findIndex(l => l.name === language);
//       if (index !== -1) remove(index);
//     }
//   };

//   const onSubmit = data => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <h3>Select Languages</h3>
//         {languagesList.map(language => (
//           <label key={language}>
//             <input
//               type="checkbox"
//               value={language}
//               onChange={(e) => onLanguageChange(language, e.target.checked)}
//             />
//             {language}
//           </label>
//         ))}
//         {errors.languages && <p>{errors.languages.message}</p>}
//       </div>
//       {fields.map((field, index) => (
//         <div key={field.id}>
//           <h4>{field.name}</h4>
//           <label>
//             <input
//               type="checkbox"
//               {...register(`languages.${index}.can_read`)}
//             />
//             Can Read
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               {...register(`languages.${index}.can_write`)}
//             />
//             Can Write
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               {...register(`languages.${index}.can_speak`)}
//             />
//             Can Speak
//           </label>
//           {errors.languages?.[index]?.message && <p>{errors.languages[index].message}</p>}
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default LanguageForm;


// // import React, { useEffect } from 'react';
// // import { useForm, useFieldArray } from 'react-hook-form';

// // const technologiesList = ["JavaScript", "Python", "Java", "C++"];

// // const TechnologyForm = ({ existingData }) => {
// //   const { control, handleSubmit, register, watch, reset, formState: { errors } } = useForm({
// //     defaultValues: {
// //       technologies: technologiesList.map((tech) => ({ name: tech, selected: false, level: '' })),
// //     },
// //   });

// //   const { fields } = useFieldArray({
// //     control,
// //     name: 'technologies',
// //   });

// //   useEffect(() => {
// //     if (existingData) {
// //       reset({ technologies: existingData });
// //     }
// //   }, [existingData, reset]);

// //   const onSubmit = data => {
// //     console.log(data);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //       <h3>Select Technologies and Proficiency Levels</h3>
// //       {fields.map((field, index) => (
// //         <div key={field.id}>
// //           <label>
// //             <input
// //               type="checkbox"
// //               {...register(`technologies.${index}.selected`)}
// //             />
// //             {field.name}
// //           </label>
// //           {["basic", "intermediate", "expert"].map((level) => (
// //             <label key={level}>
// //               <input
// //                 type="radio"
// //                 value={level}
// //                 {...register(`technologies.${index}.level`, {
// //                   required: watch(`technologies.${index}.selected`) ? 'Please select a level' : false
// //                 })}
// //                 disabled={!watch(`technologies.${index}.selected`)}
// //               />
// //               {level.charAt(0).toUpperCase() + level.slice(1)}
// //             </label>
// //           ))}
// //           {errors.technologies?.[index]?.level && (
// //             <p>{errors.technologies[index].level.message}</p>
// //           )}
// //         </div>
// //       ))}
// //       {errors.technologies && (
// //         <p>{errors.technologies.message}</p>
// //       )}
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // };

// // export default TechnologyForm;


// import { User } from './models/User';
// import { EducationDetail } from './models/EducationDetail';

// interface EducationInput {
//   id?: number; // This will help to identify existing records
//   courseName: string;
//   passingYear: number;
//   percentage: number;
// }

// async function upsertUserWithEducation(userId: number, userData: { name: string; email: string; age: number }, educationDetails: EducationInput[]) {
//   // Upsert user data
//   const [user, created] = await User.upsert({ id: userId, ...userData });

//   // Fetch the user instance to ensure associations are available
//   const userInstance = await User.findByPk(user.id, { include: [EducationDetail] });

//   if (!userInstance) {
//     throw new Error('User not found after upsert.');
//   }

//   for (const detail of educationDetails) {
//     if (detail.id) {
//       // Check if the education detail exists
//       const existingDetail = await EducationDetail.findOne({
//         where: { id: detail.id, userId: user.id }
//       });

//       if (existingDetail) {
//         // Update existing education detail
//         await EducationDetail.update(detail, {
//           where: { id: detail.id, userId: user.id }
//         });
//       } else {
//         // If the education detail with the given id does not exist, create a new one
//         await EducationDetail.create({ ...detail, userId: user.id });
//       }
//     } else {
//       // Create new education detail
//       await EducationDetail.create({ ...detail, userId: user.id });
//     }
//   }
// }

// // Example usage
// const userData = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   age: 30,
// };

// const educationDetails = [
//   { id: 1, courseName: 'BSc Computer Science', passingYear: 2015, percentage: 85.5 }, // existing
//   { courseName: 'MSc Computer Science', passingYear: 2017, percentage: 90.0 } // new
// ];

// upsertUserWithEducation(1, userData, educationDetails)
//   .then(() => console.log('Upsert operation completed'))
//   .catch(error => console.error('Error in upsert operation', error));

/******************************************************************************************************** */


// import { User } from './models/User';
// import { EducationDetail } from './models/EducationDetail';

// interface EducationInput {
//   id?: number; // This will help to identify existing records
//   courseName: string;
//   passingYear: number;
//   percentage: number;
// }

// async function upsertUserWithEducation(userId: number, userData: { name: string; email: string; age: number }, educationDetails: EducationInput[]) {
//   // Upsert user data
//   const [user] = await User.upsert({ id: userId, ...userData });

//   for (const detail of educationDetails) {
//     if (detail.id) {
//       // Update existing education detail
//       await EducationDetail.update(detail, {
//         where: { id: detail.id, userId: user.id }
//       });
//     } else {
//       // Create new education detail
//       await EducationDetail.create({ ...detail, userId: user.id });
//     }
//   }
// }

// // Example usage
// const userData = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   age: 30,
// };

// const educationDetails = [
//   { id: 1, courseName: 'BSc Computer Science', passingYear: 2015, percentage: 85.5 }, // existing
//   { courseName: 'MSc Computer Science', passingYear: 2017, percentage: 90.0 } // new
// ];

// upsertUserWithEducation(1, userData, educationDetails)
//   .then(() => console.log('Upsert operation completed'))
//   .catch(error => console.error('Error in upsert operation', error));
/************************************************************************************/

// import { User } from './models/User';
// import { EducationDetail } from './models/EducationDetail';

// interface EducationInput {
//   id?: number; // This will help to identify existing records
//   courseName: string;
//   passingYear: number;
//   percentage: number;
// }

// async function upsertUserWithEducation(userId: number, userData: { name: string; email: string; age: number }, educationDetails: EducationInput[]) {
//   // Upsert user data
//   const [user, created] = await User.upsert({ id: userId, ...userData });

//   // Fetch the user instance with existing education details
//   const userInstance = await User.findByPk(user.id, { include: [EducationDetail] });

//   if (!userInstance) {
//     throw new Error('User not found after upsert.');
//   }

//   // Extract existing education detail IDs
//   const existingEducationIds = userInstance.educationDetails.map(detail => detail.id);

//   // Extract incoming education detail IDs
//   const incomingEducationIds = educationDetails.map(detail => detail.id).filter(id => id !== undefined);

//   // Identify education details to remove
//   const educationIdsToRemove = existingEducationIds.filter(id => !incomingEducationIds.includes(id));

//   // Destroy education details that are not in the incoming data
//   if (educationIdsToRemove.length > 0) {
//     await EducationDetail.destroy({
//       where: {
//         id: educationIdsToRemove,
//         userId: user.id,
//       },
//     });
//   }

//   // Upsert (create or update) education details
//   for (const detail of educationDetails) {
//     if (detail.id) {
//       // Check if the education detail exists
//       const existingDetail = await EducationDetail.findOne({
//         where: { id: detail.id, userId: user.id },
//       });

//       if (existingDetail) {
//         // Update existing education detail
//         await EducationDetail.update(detail, {
//           where: { id: detail.id, userId: user.id },
//         });
//       } else {
//         // If the education detail with the given id does not exist, create a new one
//         await EducationDetail.create({ ...detail, userId: user.id });
//       }
//     } else {
//       // Create new education detail
//       await EducationDetail.create({ ...detail, userId: user.id });
//     }
//   }
// }

// // Example usage
// const userData = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   age: 30,
// };

// const educationDetails = [
//   { id: 1, courseName: 'BSc Computer Science', passingYear: 2015, percentage: 85.5 }, // existing
//   { courseName: 'MSc Computer Science', passingYear: 2017, percentage: 90.0 } // new
// ];

// upsertUserWithEducation(1, userData, educationDetails)
//   .then(() => console.log('Upsert operation completed'))
//   .catch(error => console.error('Error in upsert operation', error));


// import { User } from './models/User';
// import { EducationDetail } from './models/EducationDetail';

// interface EducationInput {
//   id?: number; // This will help to identify existing records
//   courseName: string;
//   passingYear: number;
//   percentage: number;
// }

// async function upsertUserWithEducation(userId: number, userData: { name: string; email: string; age: number }, educationDetails: EducationInput[]) {
//   // Upsert user data
//   const [user, created] = await User.upsert({ id: userId, ...userData });

//   // Fetch the user instance with existing education details
//   const userInstance = await User.findByPk(user.id, { include: [EducationDetail] });

//   if (!userInstance) {
//     throw new Error('User not found after upsert.');
//   }

//   // Extract existing education detail IDs
//   const existingEducationIds = [];
//   for (const detail of userInstance.educationDetails) {
//     existingEducationIds.push(detail.id);
//   }

//   // Extract incoming education detail IDs
//   const incomingEducationIds = [];
//   for (const detail of educationDetails) {
//     if (detail.id !== undefined) {
//       incomingEducationIds.push(detail.id);
//     }
//   }

//   // Identify education details to remove
//   const educationIdsToRemove = [];
//   for (const existingId of existingEducationIds) {
//     let found = false;
//     for (const incomingId of incomingEducationIds) {
//       if (existingId === incomingId) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       educationIdsToRemove.push(existingId);
//     }
//   }

//   // Destroy education details that are not in the incoming data
//   if (educationIdsToRemove.length > 0) {
//     await EducationDetail.destroy({
//       where: {
//         id: educationIdsToRemove,
//         userId: user.id,
//       },
//     });
//   }

//   // Upsert (create or update) education details
//   for (const detail of educationDetails) {
//     if (detail.id) {
//       // Check if the education detail exists
//       const existingDetail = await EducationDetail.findOne({
//         where: { id: detail.id, userId: user.id },
//       });

//       if (existingDetail) {
//         // Update existing education detail
//         await EducationDetail.update(detail, {
//           where: { id: detail.id, userId: user.id },
//         });
//       } else {
//         // If the education detail with the given id does not exist, create a new one
//         await EducationDetail.create({ ...detail, userId: user.id });
//       }
//     } else {
//       // Create new education detail
//       await EducationDetail.create({ ...detail, userId: user.id });
//     }
//   }
// }

// // Example usage
// const userData = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   age: 30,
// };

// const educationDetails = [
//   { id: 1, courseName: 'BSc Computer Science', passingYear: 2015, percentage: 85.5 }, // existing
//   { courseName: 'MSc Computer Science', passingYear: 2017, percentage: 90.0 } // new
// ];

// upsertUserWithEducation(1, userData, educationDetails)
//   .then(() => console.log('Upsert operation completed'))
//   .catch(error => console.error('Error in upsert operation', error));

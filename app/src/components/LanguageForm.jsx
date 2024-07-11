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


import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const languagesList = ["English", "Spanish", "French", "German"];

const validationSchema = yup.object().shape({
  languages: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      can_read: yup.bool(),
      can_write: yup.bool(),
      can_speak: yup.bool(),
    }).test(
      'at-least-one-skill',
      'At least one skill (read, write, or speak) must be selected',
      (value) => value.can_read || value.can_write || value.can_speak
    )
  ).min(1, "At least one language must be selected"),
});

const LanguageForm = () => {
  const { control, handleSubmit, register, watch, getValues, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      languages: []
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'languages'
  });

  const watchLanguages = watch("languages");

  const onLanguageChange = (language, checked) => {
    const currentLanguages = getValues("languages");
    if (checked) {
      append({ name: language, can_read: false, can_write: false, can_speak: false });
    } else {
      const index = currentLanguages.findIndex(l => l.name === language);
      if (index !== -1) remove(index);
    }
  };

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3>Select Languages</h3>
        {languagesList.map(language => (
          <label key={language}>
            <input
              type="checkbox"
              value={language}
              onChange={(e) => onLanguageChange(language, e.target.checked)}
            />
            {language}
          </label>
        ))}
        {errors.languages && <p>{errors.languages.message}</p>}
      </div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <h4>{field.name}</h4>
          <label>
            <input
              type="checkbox"
              {...register(`languages.${index}.can_read`)}
            />
            Can Read
          </label>
          <label>
            <input
              type="checkbox"
              {...register(`languages.${index}.can_write`)}
            />
            Can Write
          </label>
          <label>
            <input
              type="checkbox"
              {...register(`languages.${index}.can_speak`)}
            />
            Can Speak
          </label>
          {errors.languages?.[index]?.message && <p>{errors.languages[index].message}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default LanguageForm;


// import React, { useEffect } from 'react';
// import { useForm, useFieldArray } from 'react-hook-form';

// const technologiesList = ["JavaScript", "Python", "Java", "C++"];

// const TechnologyForm = ({ existingData }) => {
//   const { control, handleSubmit, register, watch, reset, formState: { errors } } = useForm({
//     defaultValues: {
//       technologies: technologiesList.map((tech) => ({ name: tech, selected: false, level: '' })),
//     },
//   });

//   const { fields } = useFieldArray({
//     control,
//     name: 'technologies',
//   });

//   useEffect(() => {
//     if (existingData) {
//       reset({ technologies: existingData });
//     }
//   }, [existingData, reset]);

//   const onSubmit = data => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h3>Select Technologies and Proficiency Levels</h3>
//       {fields.map((field, index) => (
//         <div key={field.id}>
//           <label>
//             <input
//               type="checkbox"
//               {...register(`technologies.${index}.selected`)}
//             />
//             {field.name}
//           </label>
//           {["basic", "intermediate", "expert"].map((level) => (
//             <label key={level}>
//               <input
//                 type="radio"
//                 value={level}
//                 {...register(`technologies.${index}.level`, {
//                   required: watch(`technologies.${index}.selected`) ? 'Please select a level' : false
//                 })}
//                 disabled={!watch(`technologies.${index}.selected`)}
//               />
//               {level.charAt(0).toUpperCase() + level.slice(1)}
//             </label>
//           ))}
//           {errors.technologies?.[index]?.level && (
//             <p>{errors.technologies[index].level.message}</p>
//           )}
//         </div>
//       ))}
//       {errors.technologies && (
//         <p>{errors.technologies.message}</p>
//       )}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default TechnologyForm;


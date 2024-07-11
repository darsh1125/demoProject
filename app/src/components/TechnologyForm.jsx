

import React from 'react';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const technologiesList = ["JavaScript", "Python", "Java", "C++"];

const validationSchema = yup.object().shape({
  technologies: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      selected: yup.boolean().required(),
      level: yup.string().when('selected', {
        is: true,
        then: yup.string().required('Please select a level'),
        otherwise: yup.string().notRequired()
      })
    })
  ).test(
    'at-least-one-selected',
    'At least one technology must be selected',
    (values) => values ? values.some((value) => value.selected) : false
  )
});

const TechnologyForm = () => {
  const { control, handleSubmit, register, watch, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      technologies: technologiesList.map((tech) => ({ name: tech, selected: false, level: '' })),
    },
  });

  const { fields } = useFieldArray({
    control,
    name: 'technologies',
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Select Technologies and Proficiency Levels</h3>
      {fields.map((field, index) => (
        <div key={field.id}>
          <label>
            <input
              type="checkbox"
              {...register(`technologies.${index}.selected`)}
            />
            {field.name}
          </label>
          {["basic", "intermediate", "expert"].map((level) => (
            <label key={level}>
              <input
                type="radio"
                value={level}
                {...register(`technologies.${index}.level`)}
                disabled={!watch(`technologies.${index}.selected`)}
              />
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </label>
          ))}
          {errors.technologies?.[index]?.level && (
            <p>{errors.technologies[index].level.message}</p>
          )}
        </div>
      ))}
      {errors.technologies && (
        <p>{errors.technologies.message}</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default TechnologyForm;


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

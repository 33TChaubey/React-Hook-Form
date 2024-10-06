import React from 'react'
import { useForm } from 'react-hook-form';



const App = () => {
  const { register, handleSubmit } = useForm();



  return (
    <div>
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("name")} type="name" placeholder="name" />
        <input {...register("email")} type="email" placeholder="email" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App;

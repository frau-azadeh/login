import { GenderSelectProps } from '@/types/types'
import React, { FC } from 'react'

 const GenderSelect:FC<GenderSelectProps> = ({register, error}) => {
  return (
    <div>
        <label className='block text-gray-900 mb-1'>جنسیت: </label>
          <div className='flex items-center space-x-4'>
            <label className='flex items-center gap-x-4'>
              <input type='radio' value="male" {...register("gender")} className='mr-2'/>
              زن
            </label>
            <label className='flex items-center gap-x-4'>
              <input type="radio" value="female" {...register("gender")} className='mr-2'/>
              مرد
            </label>
          </div>
    </div>
  )
}

export default GenderSelect;

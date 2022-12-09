import { FiClock, FiMail, FiMapPin, FiPhone, FiSmartphone } from 'react-icons/fi'
import PageIndicator from './PageIndicator'
import { images } from '../constants'

const ContactUs = () => {
  return (
    <div className='pt-24'>
      <PageIndicator page='تماس با ما' bg={images.img2} />
      <div className='grid grid-cols-1 px-10 my-20 lg:grid-cols-2 lg:px-40'>
        <div className='mb-10 lg:m-0'>
          <h2 className='text-2xl font-bold mb-9'>نشانی شرکت</h2>
          <ul>
            <li className='flex items-center my-6'>
              <FiMapPin size='1.5rem' className='ml-4' />
              <span className='text-lg'>
                بندرعباس، بلوار دانشگاه، نبش کوچه دانشگاه ۱، ساختمان غضنفر، واحد ۱۰
              </span>
            </li>
            <li className='flex items-center my-6'>
              <FiPhone size='1.5rem' className='ml-4 -scale-x-100' />
              <span className='text-lg'>
                <a href='tel:07633329090'>۰۷۶۳۳۳۲۹۰۹۰</a>
              </span>
            </li>
            <li className='flex items-center my-6'>
              <FiSmartphone size='1.5rem' className='ml-4' />
              <span className='text-lg'>
                <a href='tel:09177777777'>۰۹۱۷۷۷۷۷۷۷۷</a>
              </span>
            </li>
            <li className='flex items-center my-6'>
              <FiMail size='1.5rem' className='ml-4' />
              <span className='text-lg'>
                <a href='mailto:info@rahgard.com'>info@rahgard.com</a>
              </span>
            </li>
            <li className='flex items-center my-6'>
              <FiClock size='1.5rem' className='ml-4' />
              <span className='text-lg'>شنبه تا چهارشنبه ۹ الی ۱۶</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-5 text-2xl font-bold'>فرم تماس با ما</h2>
          <form className='form-control'>
            <input
              type='text'
              placeholder='نام و نام خانوادگی'
              className='my-4 bg-white input input-bordered'
            />
            <input
              type='email'
              placeholder='ایمیل'
              className='my-4 bg-white input input-bordered'
            />
            <input
              type='tel'
              placeholder='شماره همراه'
              className='my-4 bg-white input input-bordered'
            />
            <textarea
              className='my-4 bg-white textarea textarea-bordered'
              placeholder='پیام'
            ></textarea>
            <button
              type='submit'
              className='w-32 font-normal btn btn-warning lg:font-bold'
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

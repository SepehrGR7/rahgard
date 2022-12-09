import PageIndicator from './PageIndicator'
import { images } from '../constants'

const AboutUs = () => {
  return (
    <div className='pt-20'>
      <PageIndicator page='درباره ما' bg={images.img1} />
      <div className='grid grid-cols-1 my-12 md:px-32 xl:px-40 xl:grid-cols-2'>
        <div className='px-12 mb-10'>
          <h3 className='mb-8 text-3xl font-bold'>مختصری درباره راه گرد بندر</h3>
          <p className='text-justify'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
            هدف. که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
            با
            <br />
            <br />
            بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته، حال
            و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
            <br />
            <br />
            بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
            زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز
            شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد
          </p>
        </div>
        <div className='px-12 xl:p-0'>
          <img src={images.img3} alt='' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs

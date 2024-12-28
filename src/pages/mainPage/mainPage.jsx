import './mainPage.css'
import TemplatePage from '../../components/template/template'
import Banner from '../../components/mainpage/banner/banner'
import Partners from '../../components/mainpage/partners/partners'
import Joinus from '../../components/mainpage/joinus/joinus'
import Hopegive from '../../components/mainpage/hopegive/hopegive'
import Kyrgyzstan from '../../components/mainpage/kyrgyzstan/kyrgyzstan'
import News from '../../components/mainpage/news/news'

export default function mainPage() {
  return (
    <div>
      <TemplatePage>
      main
      <Banner/>
      <Partners/>
      <Joinus/>
      <Hopegive/>
      <Kyrgyzstan/>
      <News/>
      </TemplatePage>
    </div>
  )
}
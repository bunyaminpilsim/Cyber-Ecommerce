import P1s3Card from './P1s3Card'
import img1 from '../../../assets/Page1section3/s3img1.png'
import img2 from '../../../assets/Page1section3/s3img2.png'
import img3 from '../../../assets/Page1section3/s3img3.png'
import img4 from '../../../assets/Page1section3/s3img4.png'

function P1section3() {

    return (
        <div class="row s9MorePage">
            <P1s3Card imageNum={img1} title='Popular Products' description='iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.' backgroundColor='#FFFFFF' buttonColor='#000000'/>
            <P1s3Card imageNum={img2} title='Ipad Pro' description='iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.' backgroundColor='#F9F9F9' buttonColor='#000000'/>
            <P1s3Card imageNum={img3} title='Samsung Galaxy' description='iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.' backgroundColor='#EAEAEA' buttonColor='#000000'/>
            <P1s3Card imageNum={img4} title='Macbook Pro' description='iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.' backgroundColor='#2C2C2C' buttonColor='#FFFFFF'/>
        </div>
    )
}
export default P1section3
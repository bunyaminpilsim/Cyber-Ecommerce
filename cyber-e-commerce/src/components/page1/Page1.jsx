import P1section1 from './p1section1/P1section1'
import HeaderSection from '../headerSection/HeaderSection'
import P1section2 from './p1section2/P1section2'
import P1section3 from './p1section3/P1section3'
import P1section4 from './p1section4/P1section4'
import P1section5 from './p1section5/P1section5'
import FooterSection from '../footerSection/FooterSection'
import P2section1 from '../page2/p2section1/P2section1'
import P2section2 from '../page2/p2section2/P2section2'


function Page1() {

    return (
        <>
            <HeaderSection />
            <P1section1 />
            <P1section2 />
            <P1section3 />
            <P1section4 />
            <P1section5 />
            <FooterSection />
        </>
    )
}
export default Page1
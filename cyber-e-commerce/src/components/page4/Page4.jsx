import FooterSection from "../footerSection/FooterSection"
import HeaderSection from "../headerSection/HeaderSection"
import Steps from "../steps/Steps"
import P4section1 from "./p4section1/P4section1"

function Page4() {

    return (
        <>
            <HeaderSection />
            <Steps card1={1} />
            <P4section1 />
            <FooterSection />
        </>
    )
}
export default Page4
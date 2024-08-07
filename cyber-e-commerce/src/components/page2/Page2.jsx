import FooterSection from "../footerSection/FooterSection"
import HeaderSection from "../headerSection/HeaderSection"
import P2section1 from "./p2section1/P2section1"
import P2section2 from "./p2section2/P2section2"
function Page2() {

    return (
        <>
            <HeaderSection />
            <P2section1 router1={"SmartPhones"} router2={"Apple"}/>
            <P2section2 />
            <FooterSection />
        </>
    )
}
export default Page2
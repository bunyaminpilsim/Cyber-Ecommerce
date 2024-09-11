
import FooterSection from "../footerSection/FooterSection";
import HeaderSection from "../headerSection/HeaderSection";
import P1section4 from "../page1/p1section4/P1section4";
import P3s1 from "./p3section1/P3s1";
import P3s2 from "./p3section2/P3s2";
import P3s3 from "./p3section3/P3s3";

function Page3({ img, title, price }) {


    return (
        <>
            <HeaderSection />
            <P3s1 />
            <P3s2 img={img} name={title} price={price} />
            <P3s3 />
            <P1section4 />
            <FooterSection />
        </>
    );
}

export default Page3;

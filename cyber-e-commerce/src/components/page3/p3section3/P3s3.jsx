import './P3s3.css';

function P3s3Lines({ text1, text2 }) {

    return (
        <div className="p3s3line">
            <p className="lineLeftP">{text1}</p>
            <p className="lineRightP">{text2}</p>
        </div>
    )
}
function P3s3() {
    const PClan = () => {
        return (
            <>
                <ul className='p3s3ul'>
                    <li>Dynamic Island</li>
                    <li>Always-On display</li>
                    <li>HDR display</li>
                    <li>True Tone</li>
                    <li>Wide color (P3)</li>
                </ul>
            </>
        );
    };

    return (
        <>
            <div className="p3s3Container">
                <div className="p3s3ContainerDetails">
                    <p className="p3s3DetailText">Details</p>
                    <p className="p3s3parag">Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
                    <div className="p3s3detailsDiv">
                        <div className="p3s3detailsDivTop">
                            <p className="p3s3screenText">Screen</p>
                            <div className="p3s3detailsDivTopLines">
                                <P3s3Lines text1="Screen diagonal" text2='6.7"' />
                                <P3s3Lines text1="The screen resolution" text2="2796x1290" />
                                <P3s3Lines text1="The screen refresh rate" text2="120 Hz" />
                                <P3s3Lines text1="The pixel density" text2='460 ppi' />
                                <P3s3Lines text1="Screen type" text2='OLED' />
                                <P3s3Lines text1="Additionally" text2={<PClan />} />
                            </div>
                        </div>
                        <div className="p3s3detailsDivBottom">
                            <p className="p3s3detailsDivBottomP">CPU</p>
                            <div className="p3s3detailsDivBottomLines">
                                <P3s3Lines text1="CPU" text2='A16 Bionic' />
                                <P3s3Lines text1="Number of cores" text2='6' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default P3s3
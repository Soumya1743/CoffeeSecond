import './aboutus.css';

const About =()=> {
    return (
        <>
            <div className='about'>
                
                <div id='about_heading'>
                    <h1 className='about_heading'>ABOUT US</h1>
                </div>

                <div className='image_block'>
                    <img src='https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-above.png' /><br /><br />
                    <h1 className='robusta'>ABOUT ROBUSTA</h1>
                    <p className='quote'>Coffee production begins when the seeds of the Coffea plant's fruits (coffee cherries) are separated to produce unroasted green coffee beans. The beans are roasted and then ground into fine particles.</p>
                </div>

                <div className='block10'>
                    <div className='block11'>
                        <img src='https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/p2-img-2.jpg' className='image1' />
                        <p className='para1'>Coffee is brewed from the ground roasted beans, which are typically steeped in hot water before being filtered out.</p>
                    </div>
                    <div className='block11'>
                        <img src='https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/p2-img-3.jpg'  className='image1' />
                        <p className='para1'>Coffee is brewed from the ground roasted beans, which are typically steeped in hot water before being filtered out.</p>
                    </div>
                </div>

                <div className='block12'>
                    <h1 className='block12_heading'>TESTIMONIALS</h1>
                    <img src='https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/slider-separator-img.png' className='block12_image'></img>

                </div>

                <div className='banner11'>
                    <div id='banner11'>
                        <div className='banner11_1'>
                            <h1 className='banner11_heading'>250</h1>
                            <h2 className='banner11_heading1'>VARIETIES OF COFFEE</h2>
                            <p className='banner11_quote'>Smell the roses. Smell the coffee.<br /> Whatever it is that makes you happy.</p>
                        </div>
                        <div className='banner11_1'>
                            <h1 className='banner11_heading'>123</h1>
                            <h2 className='banner11_heading1'>HOURS OF TESTING</h2>
                            <p className='banner11_quote'>Smell the roses. Smell the coffee.<br /> Whatever it is that makes you happy.</p>
                        </div>
                        <div className='banner11_1'>
                            <h1 className='banner11_heading'>321</h1>
                            <h2 className='banner11_heading1'>COFFEE MARKETS</h2>
                            <p className='banner11_quote'>Smell the roses. Smell the coffee.<br /> Whatever it is that makes you happy.</p>
                        </div>
                        <div className='banner11_1'>
                            <h1 className='banner11_heading'>220</h1>
                            <h2 className='banner11_heading1'>COFFEE AND BRANDS</h2>
                            <p className='banner11_quote'>Smell the roses. Smell the coffee.<br /> Whatever it is that makes you happy.</p>
                        </div>
                    </div>
                </div>

                <br /><br /><br /><br />

                <div className='footer'>
                <br /><br /><br /><br />
                    <img src='https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/logo-footer-sidearea.png' />
                    <p className='footer_para'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        nostrud exercitation ullamco laboris.”
                    </p> <br /><br />
                    <h1 className='footer_para1'>STORIES</h1>
                    <p className='footer_para2'>StoresDunsmuir Ave, Los Angeles, CA 90036, USA tkins Ave, Brooklyn, NY 11208, USA</p>
                    <br /><br />
                    <h1 className='footer_para3'>NEWS AS FRESH AS OUR COFFEE</h1>
                    <br /><br />
                    <input type='email' placeholder='Your E-mail Address...'  className='footer_para4' />

                    <br /><br /><br /><br />
                </div>
            </div>
        </>
    );
}

export default About;
import './contactus.css';
import './house.css';

const Contact =()=> {
    return (
        <>
            <div className='contact'>
                <div id='contact_heading'>
                    <h1 className='contact_heading'>CONTACT US</h1>
                </div>

                <br /><br /><br /><br />

                <div className='conatiner31'>
                    <div className='container3_1'>
                        <h1 className='container31_heading'>GET IN TOUCH</h1>
                        <p className='container31_para'>The earliest credible evidence of coffee drinking as the modern beverage appears in modern-day Yemen in southern Arabia in the middle of the 15th century in Sufi shrines, where coffee seeds were first roasted and brewed in a manner similar to how it is now prepared for drinking.</p>
                        <br /><br /><br /><br /><br /><br /><br /><br />
                        <div>
                            <img src='https://th.bing.com/th/id/OIP.GYrfOr3xyQVh2ZViRaC-xAAAAA?rs=1&pid=ImgDetMain' className='facebook' />
                            <img src='https://th.bing.com/th/id/OIP.fS4oFI1laCGhup_g9aIu1QHaHa?rs=1&pid=ImgDetMain' className='twitter' />
                            <img src='https://www.citypng.com/public/uploads/preview/hd-grey-linkedin-in-icon-text-symbol-sign-png-31623974541hv8yrvid5u.png' className='linkedin' />
                            <img src='https://th.bing.com/th/id/OIP.PfNAq4_0yxUHSNhbDkS-CwHaHa?rs=1&pid=ImgDetMain' className='tumblr' />
                        </div>
                    </div>
                    <div className='container3_2'>
                        <div>
                            <input type='text' placeholder='Your name' className='input1' />
                            <input type='text' placeholder='Your Email' className='input2' />
                        </div>
                        <div>
                            <input type='text' placeholder='Subject' className='input3' />
                            <textarea type='text' placeholder='Message here...' className='input4' /><br></br>
                            <input type='submit' placeholder='SEND MESSAGE' value='SEND MESSAGE' className='input5' />
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

export default Contact;
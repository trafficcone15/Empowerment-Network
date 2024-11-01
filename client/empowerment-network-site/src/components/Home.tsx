import React, { useEffect } from 'react';
import '../styles/Home.scss';
import { formatClassName } from '../utilities/formatClassNameUtils';
import DesignBubbles from './DesignBubbles';
import GuideTooltip from './GuideTooltip';
import ServicesBox from './ServicesBox';
import AnimateText from './AnimateText';
import ContactUs from './ContactUs';
//import CircleLayout from './CircleLayout';
import { useLocation } from 'react-router-dom';
import aboutMePic from '../assets/about-me.webp';
import testimonials from '../assets/testimonials.webp';
//import caseStudy from '../assets/case-study.webp';
import freeConsult from '../assets/free-consult.webp';
import leadershipCoachingPic from '../assets/leadership.webp';
//import resourceLibraryPic from '../assets/resource-library.webp';
import collaborationsPic from '../assets/collab.webp';
import domesticViolenceImpactImage from '../assets/domestic-violence.webp';

const Home: React.FC = () => {
    const clientName = import.meta.env.CLIENT_NAME;
    const clientNameFirstNameOnly = import.meta.env.CLIENT_NAME_FIRST_NAME;
    const welcomeText = `Welcome to Empowerment Network! We provide tailored solutions in HR consulting, leadership
                         development, coaching, and domestic violence awareness for businesses and individuals. 
                         Whether you're a business owner looking to streamline your HR processes or an individual seeking
                         professional growth, Empowerment Network is here to support and guide you.
                         Discover how our bespoke services, led by ${clientName}, can empower your organization and drive
                         success. Explore our service offerings below and learn more about our approach to creating
                         meaningful change through expert guidance and strategic support.`;
    const welcomeTextSub = `Empowering The Workforce`;

    const services = [
        {
            service: 'Bespoke HR Solutions for SMEs',
            text: `Empowerment Network handles HR for growing businesses, from recruitment to compliance, with flexible plans so you can focus on growth.`,
            longerText: `Small to medium-sized businesses often grow quickly, but their HR systems can fall behind
            <br />
            Empowerment Network offers the full spectrum of HR services, ensuring that your people strategy
            aligns with your business goals
            <br />
            From recruitment to performance management, we handle it all so
            you don't have to. 
            <u><b>Why You Need Us:</b></u><br />
            Without a dedicated HR team, managing your growing workforce can become overwhelming,
            leading to issues with retention, engagement, and compliance<br />
            We're here to be your “People Whisperers,” doing the heavy lifting to streamline your HR functions and keep your business running smoothly. 
            <u><b>Our Service Includes:</b></u>
            <ul>
                <li><b>Consulting by the hour: </b>Flexible, on-demand HR support when you need it</li>
                <li><b>Fixed-price projects: </b>Tailored solutions for performance management, leadership development, and more</li>
                <li><b>Subscription packages: </b>Comprehensive HR support with monthly Bronze, Silver, and Gold packages for long-term peace of mind</li>
            </ul>
            `.split('. '),
            icon: 'users-cog'
        },
        {
            service: 'Workshop Facilitation',
            text: `Empowerment Network designs and delivers impactful workshops on a wide range of work-related topics, from leadership to diversity, tailored to meet the unique needs of your business.`,
            longerText: `
            <u><b>Why You Need Us:</b></u><br />
            Workshops provide your teams with essential skills and knowledge to improve productivity, teamwork, and workplace culture
            <br />
            Our custom programs ensure that the learning is relevant,
            engaging, and actionable for your organization. 
            <u><b>Our Service Includes:</b></u>
            <ul>
                <li><b>Bespoke workshops: </b>Fully customized to address your company's specific challenges</li>
                <li><b>Off-the-shelf solutions: </b>High-quality programs ready to implement, with options to tailor for your business</li>
            </ul>`.split('. '),
            icon: 'chalkboard-teacher'
        },
        {
            service: 'Management and Leadership Capability Programs',
            text: `Empowerment Network offers tailored leadership development programs.`,
            longerText: `Leadership is the backbone of any successful organization<br />
            Empowerment Network offers tailored leadership development programs that are designed to equip your managers with the skills they need to lead effectively. 
            <u><b>Why You Need Us:</b></u><br />
            Investing in your leadership team means investing in the future of your business
            <br /> 
            Strong, capable
            leaders drive employee engagement, foster innovation, and boost performance<br />
            Empowerment Network provides programs that can be customized or ready-made to suit your business needs. 
            <u><b>Our Service Includes:</b></u>
            <ul>
                <li><b>Tailored leadership programs: </b>Built specifically for your business's goals and challenges</li>
                <li><b>Off-the-shelf programs: </b>Ready-made solutions for immediate implementation, with customization options</li>
            </ul>`.split('. '),
            icon: 'flag-checkered'
        },
        {
            service: 'Personal and Professional Coaching',
            text: `Empowerment Network offers coaching services to help individuals achieve personal and professional growth during career changes or performance improvements.`,
            longerText: `Empowerment Network's coaching services are designed for individuals looking to make significant
            personal and professional progress
            <br /> 
            Whether you're navigating a career change or aiming to improve
            performance, our coaching services help you get there. 
            <u><b>Why You Need Us:</b></u><br />
            Personalized coaching gives you the clarity, direction, and confidence to excel in your role and
            beyond
            <br />
            Our expert coaches will work closely with you to unlock your potential and provide the
            support you need to succeed. 
            <u><b>Our Service Includes:</b></u>
            <ul>
                <li><b>Career coaching: </b>Helping individuals identify and achieve their career goals</li>
                <li><b>Executive and leadership coaching: </b>Tailored for high-level professionals looking to refine their leadership skills</li>
                <li><b>Performance improvement coaching: </b>For individuals seeking growth and enhanced performance in their roles</li>
            </ul>`.split('. '),
            icon: 'user-check'
        },
        {
            service: 'Domestic Violence Programs for Businesses',
            text: `Empowerment Network aids organizations in implementing domestic violence programs to support employees.`,
            longerText: `Domestic violence (DV) has a profound effect on individuals and businesses alike
            <br />
            Empowerment Network helps organizations implement comprehensive DV programs, raising awareness and
            providing critical support to employees. 
            <u><b>Why You Need Us:</b></u><br />
            Domestic violence impacts productivity, attendance, and morale
            <br />
            By offering support programs,
            businesses can foster a healthier, more supportive work environment while also addressing
            performance and well-being issues. 
            <u><b>Our Service Includes:</b></u>
            <ul>
                <li><b>DV program design: </b>Tailored programs that fit your organization’s specific needs</li>
                <li><b>DV awareness training: </b>Company-wide training sessions to educate and provide support for staff</li>
                <li><b>Public DV workshops: </b>Informative workshops for communities, raising awareness and promoting prevention</li>
            </ul>`.split('. '),
            icon: 'home'
        }
    ];

    /*
    const circles = [
        {
            heading: 'Discount Grocery Trolleys',
            text: `Providing discounted grocery shopping opportunities to support workers, ensuring they have access to affordable essentials.`
        },
        {
            heading: 'Retention Bonuses',
            text: `Rewarding loyalty and commitment by offering retention bonuses to support workers who continue to provide exceptional care over time.`
        },
        {
            heading: 'Consistent Schedules',
            text: `Offering consistent and predictable work schedules to support workers, allowing for better work-life balance and planning.`
        },
        {
            heading: 'Regular Client Support',
            text: `Facilitating ongoing support and communication between support workers and their clients, ensuring consistent care and rapport.`
        },
        {
            heading: 'Behavioural Issue Support',
            text: `Providing training and resources to support workers to effectively manage and support clients with behavioural challenges.`
        },
        {
            heading: 'Professional Development Workshops',
            text: `Offering opportunities for support workers to enhance their skills and knowledge through workshops and training sessions, fostering personal and professional growth.`
        }
    ];
    */

    const location = useLocation();
    const shouldScrollToTop: boolean = location.state?.shouldScrollToTop ?? true;

    useEffect(() => {
        if (shouldScrollToTop) {
            window.scrollTo({
                top: 0
            });
        }
    }, []);

    return (
        <div className='home-container main-container'>
            <div className='welcome-image'>
                &nbsp;
            </div>
            <div className='background-container'>
                <AnimateText className='welcome-text text' mainText={welcomeTextSub} subText={welcomeText} />
                <h1 className='main-heading-text'>
                    Empowerment Network
                </h1>
                <DesignBubbles className="bubbles-main-heading-text" direction='right' />
            </div>
            <div className='background-container services-section-grid-container' id="services-container">
                <h1 className="sub-heading-text">
                    Our Services
                </h1>
                <div className='services-section-grid'>
                    {services.map((service, index) => (
                        <React.Fragment key={`${service.service}-${index}`}>
                            <ServicesBox
                                id={`service-box-${formatClassName(service.service)}-${index}`}
                                icon={service.icon}
                                text={service.text}
                                service={service.service}
                            />
                            <GuideTooltip
                                heading={service.service}
                                text={service.longerText}
                                triggerElement={`service-box-${formatClassName(service.service)}-${index}`}
                                elementRef={`service-box-tooltip-${formatClassName(service.service)}-${index}`}
                            />
                        </React.Fragment>
                    ))}
                </div>
                <DesignBubbles className="bubbles-services-heading-text" direction='left' />
            </div>
            
            <div className='background-container text-container'>
                <h1 className="sub-heading-text">
                    Leadership & Executive Coaching
                </h1>
                <div className='text-blurb-container'>
                    <div>
                        <p>
                            <span className='sub-heading'>Empowering Leaders to Empower Others.</span>
                            <br />
                            Great leadership starts from within, and at Empowerment Network, we offer comprehensive leadership and executive coaching programs designed to help leaders at all levels maximize their potential. Whether you’re a CEO looking to inspire your team, a manager aiming to drive performance, or an executive seeking personal growth, our tailored coaching sessions provide you with the tools, confidence, and strategies to lead with impact.
                            <br /><br />
                            Unlock your leadership potential and take your career—and your organization—to the next level with Empowerment Network’s Leadership and Executive Coaching.
                        </p>
                    </div>
                    <div className='pic-container'>
                        <img src={leadershipCoachingPic} />
                    </div>
                </div>
                <DesignBubbles className="bubbles-services-heading-text right-side" direction='right' />
            </div>
            <div className='background-container text-container'>
                <h1 className="sub-heading-text text-right">
                    Free Initial Consultation / Discovery Call
                </h1>
                <div className='text-blurb-container left-side'>
                    <div>
                        <p>
                            <span className='sub-heading'>Let's Start the Conversation.</span><br />
                            We know that taking the first step can be daunting, especially when it comes to making big changes in your business. That's why Empowerment Network offers a free one-hour strategic thinking session to help you understand your unique challenges and areas of concern. During this session, we take the time to listen, analyze, and begin developing actionable solutions tailored to your specific needs.
                            Before we meet, we'll ask you to complete our Organisational Diagnostics Tool, designed to get to the heart of your workplace and people-related issues. This tool helps us identify key pain points and opportunities for improvement, giving us a solid foundation for our initial strategic conversation.
                            Both this first conversation and the diagnostics tool are completely free for you to use—no strings attached.
                            <br />
                            <span className='sub-heading'>Book your free consultation today and discover how Empowerment Network can help you take your business to the next level.</span>

                        </p>
                    </div>
                    <div className='pic-container'>
                        <img width='800' className='set-own-size' src={freeConsult} />
                    </div>
                </div>
                <DesignBubbles className="bubbles-services-heading-text" direction='left' />
            </div>
            

            <div className='background-container text-container'>
                <h1 className="sub-heading-text">
                    Collaborations & Partnerships
                </h1>
                <div className='text-blurb-container right-side'>
                    <div>
                        <p>
                            <span className='sub-heading'>Working Together to Make a Difference.</span>
                            <br />
                            At Empowerment Network, we know that collaboration is key to achieving meaningful results. That’s why we work with a range of trusted partners—businesses, nonprofits, and thought leaders—to bring you the best in HR solutions, leadership development, and domestic violence awareness. Together, we deliver innovative programs and services that drive positive change in the workplace.
                            <br /><br />
                            Interested in partnering with us? Let’s collaborate to create bespoke solutions that benefit your people and your business. Explore our collaborations and become part of the Empowerment Network today.
                        </p>
                    </div>
                    <div className='pic-container'>
                        <img src={collaborationsPic} />
                    </div>
                </div>
                <DesignBubbles className="bubbles-services-heading-text right-side" direction='right' />
            </div>            

            <div className='background-container text-container'>
                <h1 className="sub-heading-text text-right">
                    The Impact of Domestic Violence on Businesses
                </h1>
                <div className='text-blurb-container left-side'>
                    <div>
                        <p>
                            Domestic violence (DV) can have profound and often hidden costs on businesses, even if it's not immediately recognized as the root cause.
                            Employees experiencing DV may display symptoms like frequent absenteeism, decreased productivity, increased errors, and disengagement,
                            which are often mistaken for poor performance or lack of commitment. Managers might attribute these behaviors to unrelated issues,
                            leading to costly performance management processes, turnover, and potential termination.
                            <br /><br />
                            <span className='sub-heading'>The financial impact includes:</span>
                            <br />
                            • <span className='sub-heading'>Absenteeism and tardiness:</span> Employees affected by DV may struggle to attend work consistently, leading to lost hours and increased strain on other team members.
                            <br />
                            • <span className='sub-heading'>Reduced productivity and focus:</span> Survivors of DV often carry the emotional and mental toll into the workplace, affecting their ability to focus and perform at their best.
                            <br />
                            • <span className='sub-heading'>Increased healthcare costs:</span> Indirect costs may arise from increased use of mental health services, medical leave, or physical injuries.
                            <br />
                            • <span className='sub-heading'>Turnover costs:</span> Many employees in DV situations may eventually leave their job due to personal reasons or diminished performance,
                            resulting in significant hiring and training costs to replace them.
                            <br /><br />
                            Implementing a DV program is crucial to mitigate these hidden costs by fostering a supportive and understanding work environment. Through awareness, education, and support,
                            you not only help protect your employees' wellbeing but also shield your business from the high costs of unmanaged DV-related issues.
                            Proactively addressing DV helps increase productivity, retain valuable staff, and create a safer, more inclusive company culture.
                        </p>
                    </div>
                    <div className='pic-container'>
                        <img src={domesticViolenceImpactImage} alt="Illustration showing workplace impact of domestic violence" />
                    </div>
                </div>
                <DesignBubbles className="bubbles-services-heading-text" direction='left' />
            </div>
            
            {/* 
            <div className='background-container text-container'>
                <h1 className="sub-heading-text">
                    Case Studies and Success Stories
                </h1>
                <div className='text-blurb-container'>
                    <div>
                        <p>
                            <span className='sub-heading'>Real Results. Real Impact.</span>
                            <br />
                            At Empowerment Network, we believe in the power of transformation. Our case studies and success stories show how our bespoke HR solutions, leadership programs, and domestic violence awareness training have helped businesses thrive. These real-world examples highlight our expertise in driving positive change, improving performance, and fostering more inclusive workplace cultures. Read about how we've turned complex people challenges into growth opportunities for businesses just like yours.
                            <br />
                            <span className='sub-heading'>See how Empowerment Network can work for you, too.</span>
                            <br />
                            <br />

                        </p>
                    </div>
                    <div className='pic-container'>
                        <img src={caseStudy} />
                    </div>
                </div>
                <DesignBubbles className="bubbles-services-heading-text right-side" direction='right' />
            </div>

            <div className='background-container text-container'>
                <h1 className="sub-heading-text">
                    Resource Library
                </h1>
                <div className='text-blurb-container left-side'>
                    <div>
                        <p>
                            <span className='sub-heading'>Your Hub for Learning and Growth.</span>
                            <br />
                            At Empowerment Network, we believe in continuous learning and development. That’s why we’ve created a Resource Library filled with valuable tools and insights to help you navigate today’s complex workplace challenges. From thought leadership articles and white papers to how-to guides and video content, our resources are designed to give you practical solutions and fresh perspectives on everything from HR management to domestic violence programs.
                            <br /><br />
                            Browse our free resources and stay up-to-date with the latest trends in people management, leadership, and workplace well-being.
                        </p>
                    </div>
                    <div className='pic-container'>
                        <img src={resourceLibraryPic} />
                    </div>
                </div>
                <DesignBubbles className="bubbles-services-heading-text" direction='left' />
            </div>*/}

            <div className='background-container text-container'>
                <h1 className="sub-heading-text">
                    Client Testimonials
                </h1>
                <div className='text-blurb-container'>
                    <div>
                        <p>
                            "Partnering with Empowerment Network has been transformative for our team. The HR strategies they provided
                            helped us foster a stronger, more cohesive work environment."
                            <br />
                            — Sarah Thompson, Thrive Innovations
                            <br /><br />
                            "{clientName} brings a wealth of knowledge and genuine compassion to her coaching. She guided me in building
                            my confidence and redefining my career goals."
                            <br />
                            — John Carver, Professional Coach
                            <br /><br />
                            "The leadership training from Empowerment Network has been invaluable. Our managers now lead with clarity and
                            vision, which has positively impacted every aspect of our organization."
                            <br />
                            — Mark Evans, Clear Path Corp.
                            <br /><br />
                            "{clientNameFirstNameOnly}'s unique approach helped me break through personal barriers and empowered me to embrace new challenges
                            with confidence. I’m now seeing results in both my career and personal life."
                            <br />
                            — Michelle Lee, Individual Client
                        </p>
                    </div>
                    <div className='pic-container'>
                        <img src={testimonials} />
                    </div>
                </div>
                <DesignBubbles className="bubbles-services-heading-text right-side" direction='right' />
            </div>            
            
            <div className='background-container text-container'>
                <h1 className="sub-heading-text text-right">
                    About {clientName}
                </h1>
                <div className='text-blurb-container left-side'>
                    <div>
                        <p>
                            {clientName} is the visionary leader behind Empowerment Network. With over 15 years of senior
                            executive experience, {clientNameFirstNameOnly} has a deep understanding of HR, leadership, and community-building.
                            She is passionate about empowering businesses and individuals through tailored solutions that drive
                            results. {clientNameFirstNameOnly}  is also a passionate advocate for domestic violence awareness and prevention, using
                            her platform to bring this critical issue to the forefront of business and society.
                            {clientNameFirstNameOnly}'s charismatic speaking style and practical, results-driven approach have made her a sought-
                            after speaker and facilitator at events and conferences.</p>
                    </div>
                    <div className='pic-container'>
                        <img src={aboutMePic} />
                    </div>
                </div>
                <DesignBubbles className="bubbles-services-heading-text" direction='left' />
            </div>

            {/* 
                <div className='background-container'>
                    <h1 className="sub-heading-text">
                        Supporting Support Workers
                    </h1>
                    <DesignBubbles className="bubbles-services-heading-text" direction='left' />
                    <CircleLayout circles={circles} />
                    <DesignBubbles className="bubbles-services-heading-text" direction='left' />
                </div>
            */}
            <div className='background-container' id="contact-us-home-container">
                <ContactUs />
                <DesignBubbles className="bubbles-services-heading-text" direction='left' />
            </div>
        </div>
    );
}

export default Home;

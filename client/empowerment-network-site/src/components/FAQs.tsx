import '../styles/FAQs.scss';
import React, { useEffect, useState } from 'react';
import AnimateText from './AnimateText';
import DesignBubbles from './DesignBubbles';

const FAQs: React.FC = () => {
    const welcomeText = "Welcome to Empowerment Network’s FAQ page! We’re here to answer your questions and provide clear guidance on how our tailored services can support you. Whether you’re exploring options, preparing for a consultation, or seeking ongoing assistance, our mission is to empower you with the resources and answers you need.";
    const welcomeTextSub = `Supporting Your Journey with Knowledge and Care`;

    const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, []);

    const toggleQuestion = (index: number) => {
        setExpandedQuestion(expandedQuestion === index ? null : index);
    };

    const faqItems = [
        {
            question: "What types of businesses do you work with?",
            answer: "We work with small to medium-sized enterprises (SMEs) across various industries. Whether you're a start-up with limited HR resources or a growing company needing senior-level HR support, we can tailor our services to fit your needs. Our expertise spans sectors such as professional services, retail, healthcare, manufacturing, NDIS services, and more."
        },
        {
            question: "What HR services do you offer?",
            answer: `We offer a full range of HR solutions to support your business, including:
            • Recruitment and retention strategies
            • Performance management systems
            • Employee engagement and culture-building initiatives
            • Leadership and management development programs
            • HR policy development and compliance
            • Employee relations and conflict resolution.
            You can work with us on an hourly consulting basis, project-based pricing, or through a subscription service depending on your needs.`
        },
        {
            question: "Can you customize leadership and management programs for our business?",
            answer: "Absolutely. We specialize in tailored leadership and management capability programs that are designed to meet the unique requirements of your business. If you prefer, we also offer off-the-shelf programs that can be customized to ensure they align with your company’s values, culture, and leadership goals."
        },
        {
            question: "How do your Domestic Violence (DV) programs work in the workplace?",
            answer: `Our Domestic Violence programs are designed to help businesses address the hidden costs of domestic violence, including absenteeism, reduced productivity, and employee wellbeing. We provide:
            • Tailored DV awareness and education programs for your staff
            • Support strategies for employees affected by DV
            • Tools for managers to recognize and respond to DV in the workplace.
            These programs are delivered through workshops, staff training, and the development of comprehensive DV policies to foster a safer and more supportive work environment.`
        },
        {
            question: "Do you offer coaching for individuals as well as businesses?",
            answer: `Yes, we offer personal and professional coaching for individuals at all levels. This includes:
            • Career coaching
            • Performance improvement coaching
            • Executive and leadership coaching.
            Our coaching is personalized to help you meet your career goals, improve your leadership skills, or overcome workplace challenges. Whether you're a CEO, manager, or just starting your career, we can support your growth.`
        },
        {
            question: "How does the free consultation work?",
            answer: `We offer a free one-hour strategic thinking session where we take the time to understand your unique challenges and areas of concern. Before this meeting, we’ll ask you to complete our Organisational Diagnostics Tool, which helps us assess your business and people-related issues. This tool and the first session are completely free—giving you a no-obligation way to experience how we can help your business grow.`
        },
        {
            question: "Can you facilitate workshops on specific topics for our team?",
            answer: "Yes, we offer workshop facilitation on a variety of topics tailored to your team’s needs. Whether you want to improve communication, build management skills, or tackle industry-specific challenges, we can design and deliver workshops that resonate with your team. We also provide off-the-shelf programs that can be customized to fit your company's objectives."
        },
        {
            question: "What are your subscription packages, and how do they work?",
            answer: `We offer flexible subscription packages for our HR services, designed to give businesses ongoing support at an affordable rate. Our packages include:
            • Bronze: Basic HR support and advice
            • Silver: Mid-level HR services including recruitment, performance management, and policy development
            • Gold: Full-service HR partnership, including leadership development, employee engagement initiatives, and culture-building activities.
            Each package can be tailored to suit your business needs, ensuring you get the level of support you require.`
        },
        {
            question: "How can Domestic Violence (DV) impact my business financially?",
            answer: `Domestic violence can have a significant financial impact on businesses due to factors such as:
            • Increased absenteeism
            • Reduced productivity
            • Higher turnover rates
            • Employee burnout or mental health issues.
            By implementing a DV program, businesses can reduce these costs, support affected employees, and create a safer, more supportive work environment. We help you design and roll out these initiatives, educating your workforce and developing practical policies that make a real difference.`
        },
        {
            question: "How soon can we start working with you?",
            answer: "Once we’ve had our initial strategic consultation (which is free), we can begin as soon as you’re ready! Depending on your needs, we will provide a clear timeline and outline of services tailored to your business. Whether you need a short-term project or long-term HR support, we’re here to make the process as seamless as possible."
        },
        {
            question: "What makes Empowerment Network different from other HR consulting firms?",
            answer: `What sets us apart is our people-first approach and the breadth of expertise we bring to every engagement. We don’t just offer off-the-shelf solutions—we take the time to understand your business, your people, and your unique challenges. Whether we’re helping you build leadership capability, design HR systems, or address sensitive issues like Domestic Violence in the workplace, we’re your strategic partner for building a positive, high-performing organization. Plus, Zeta Jacobs, our founder, brings a wealth of experience and passion that inspires real change in the businesses she works with.`
        }
    ];


    return (
        <div className='faqs-participants-container'>
            <div className='welcome-image'>
                &nbsp;
            </div>
            <div className='background-container'>
                <AnimateText className='welcome-text text' mainText={welcomeTextSub} subText={welcomeText} />
                <h1 className='main-heading-text'>
                    FAQs
                </h1>
                <DesignBubbles className="bubbles-main-heading-text" direction='right' />
                <div className='faq-items-container'>
                    {faqItems.map((item, index) => (
                        <div className='faq-item' key={index}>
                            <div className='faq-question' onClick={() => toggleQuestion(index)}>
                                {item.question}
                            </div>
                            {expandedQuestion === index && (
                                <div className='faq-answer'>
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;

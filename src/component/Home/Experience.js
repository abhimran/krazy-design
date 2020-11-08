import React from 'react';

const Experience = () => {
    const experienceData = [
        {
            id: 1,
            title: 'design',
            description: 'A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design expresses the process of developing a design.'

        },
        {
            id: 2,
            title: 'content',
            description: 'Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action.'

        },
        {
            id: 3,
            title: 'strategy',
            description: 'Strategy  is a general plan to achieve one or more long-term or overall goals under conditions of uncertainty. In the sense of the "art of the general", which included several subsets of skills including military tactics, siegecraft, logistics etc'

        },
    ]
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="experience__header">
                    <h3>We Build Experience</h3>
                    <p>A minimalist approach is the only way to design a website</p>
                </div>
                
                <div className="experience__card">
                    <div className="row">
                        {
                            experienceData.map(item=> (
                                <div className="experience__card_item">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <button>Learn More</button>
                                </div>
                            ))
                       }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
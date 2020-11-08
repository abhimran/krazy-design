import React from 'react';
import blog1 from '../../images/blog1.jpg'
import blog2 from '../../images/blog2.jpg'
import blog3 from '../../images/blog3.jpg'
import blog4 from '../../images/blog4.jpg'

const Stories = () => {
    const storyData = [
        {
            id:1,
            img: blog1,
            title: 'Overcoming creative block',
            data: 'Brandon Stark - November 25, 2020'
        },
        {
            id:1,
            img: blog2,
            title: 'Overcoming creative block',
            data: 'Brandon Stark - November 25, 2020'
        },
        {
            id:1,
            img: blog3,
            title: 'Overcoming creative block',
            data: 'Brandon Stark - November 25, 2020'
        },
        {
            id:1,
            img: blog4,
            title: 'Overcoming creative block',
            data: 'Brandon Stark - November 25, 2020'
        },
    ]
    return (
        <section className="stories experience" id="stories">
            <div className="container">
                <div className="experience__header">
                    <h3>We create stories</h3>
                    <p>A killar narrative will turn your readers into raving fans</p>
                </div>

                <div className="stories__blog">
                    {
                        storyData.map(item=> (
                            <div className="stories__blog-card" key={item.id}>
                                <img src={item.img} alt=""/>
                                <div className="blog-card-title">
                                    <h3>{item.title}</h3>
                                    <p>{item.data}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Stories;
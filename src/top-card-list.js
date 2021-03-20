import React from 'react';
import Card from './card.js';
import './top-card-list.css'

const cardListData = [
    {
        username: '@peblo_code',
        id: 1,
        followers: 1483,
        todayFollower: 12,
        icon: 'images/icon-facebook.svg',
        name: 'facebook'
    },
    {
        username: '@peblo_code',
        id: 2,
        followers: '28k',
        todayFollower: 20,
        icon: 'images/icon-twitter.svg',
        name: 'twitter'
    },
    {
        username: '@peblo_code',
        id: 3,
        followers: '6k',
        todayFollower: 30,
        icon: 'images/icon-instagram.svg',
        name: 'instagram'
    },
    {
        username: '@peblo_code',
        id: 4,
        followers: '12k',
        todayFollower: -50,
        icon: 'images/icon-youtube.svg',
        name: 'youtube'
    },
]

function TopCardList() {
    return (
        <section className="top-cards">
        <div className="wrapper">
            <div className="grid">
                {
                    cardListData.map((cardData) => <Card key={cardData.id} {...cardData}/>)
                }
                
                {/* <article className="card twitter">
                    <p className="card-title">
                        <img src="images/icon-twitter.svg" alt="" />
                        @peblo_code
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">176</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="images/icon-up.svg" alt="" />
                        12 Today
                    </p>
                </article>
                <article className="card instagram">
                    <p className="card-title">
                        <img src="images/icon-instagram.svg" alt="" />
                        @peblo_code
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">453</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="images/icon-up.svg" alt="" />
                        12 Today
                    </p>
                </article>
                <article className="card youtube">
                    <p className="card-title">
                        <img src="images/icon-youtube.svg" alt="" />
                        @peblo_code
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">1987</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="images/icon-up.svg" alt="" />
                        12 Today
                    </p>
                </article> */}
            </div>
        </div>
    </section>
    )
}

export default TopCardList;
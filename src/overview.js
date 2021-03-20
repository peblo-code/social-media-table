import React from 'react'
import CardSmall from './card-small.js'
import './overview.css'

const cardSmallList = [
    {
        icon: 'images/icon-facebook.svg',
        pageViews: '87',
        growth: 2,
        key: 1,
    },
    {
        icon: 'images/icon-twitter.svg',
        pageViews: '52',
        growth: 2257,
        key: 2,
    },
    {
        icon: 'images/icon-instragram.svg',
        pageViews: '52k',
        growth: 1375,
        key: 3,
    },
    {
        icon: 'images/icon-youtube.svg',
        pageViews: '107',
        growth: 19,
        key: 4,
    },
]

function Overview() {
    return(
        <section className="overview">
            <div className="wrapper">
                <h2>Overview - Today</h2>
                <div className="grid">
                    {
                        cardSmallList.map(({ icon, pageViews, growth, key }) => (
                        <CardSmall 
                            icon={icon}
                            key={key}
                            pageViews={pageViews}
                            growth={growth}
                        />
                        ))
                    }
                </div>
            </div>
        </section>
    )
    
            /* <div class="card-small">
                <p class="card-small-view">Likes</p>
                <p class="card-small-icon">
                    <img src="images/icon-facebook.svg" alt="">
                </p>
                <p class="card-small-number">52</p>
                <p class="card-small-percentage is-danger">
                    <span>
                        <img src="images/icon-down.svg" alt="">
                        2%
                    </span>
                </p>
            </div>
            <div class="card-small">
                <p class="card-small-view">Likes</p>
                <p class="card-small-icon">
                    <img src="images/icon-instagram.svg" alt="">
                </p>
                <p class="card-small-number">87</p>
                <p class="card-small-percentage">
                    <span>
                        <img src="images/icon-up.svg" alt="">
                        2257%
                    </span>
                </p>
            </div>
            <div class="card-small">
                <p class="card-small-view">Profile Views</p>
                <p class="card-small-icon">
                    <img src="images/icon-instagram.svg" alt="">
                </p>
                <p class="card-small-number">52k</p>
                <p class="card-small-percentage">
                    <span>
                        <img src="images/icon-up.svg" alt="">
                        1375%
                    </span>
                </p>
            </div>
            <div class="card-small">
                <p class="card-small-view">Retweets</p>
                <p class="card-small-icon">
                    <img src="images/icon-twitter.svg" alt="">
                </p>
                <p class="card-small-number">117</p>
                <p class="card-small-percentage">
                    <span>
                        <img src="images/icon-up.svg" alt="">
                        303%
                    </span>
                </p>
            </div>
            <div class="card-small">
                <p class="card-small-view">Likes</p>
                <p class="card-small-icon">
                    <img src="images/icon-twitter.svg" alt="">
                </p>
                <p class="card-small-number">507</p>
                <p class="card-small-percentage">
                    <span>
                        <img src="images/icon-up.svg" alt="">
                        553%
                    </span>
                </p>
            </div>
            <div class="card-small">
                <p class="card-small-view">Like</p>
                <p class="card-small-icon">
                    <img src="images/icon-youtube.svg" alt="">
                </p>
                <p class="card-small-number">107</p>
                <p class="card-small-percentage is-danger">
                    <span>
                        <img src="images/icon-down.svg" alt="">
                        19%
                    </span>
                </p>
            </div>
            <div class="card-small">
                <p class="card-small-view">Page Views</p>
                <p class="card-small-icon">
                    <img src="images/icon-youtube.svg" alt="">
                </p>
                <p class="card-small-number">1407</p>
                <p class="card-small-percentage is-danger">
                    <span>
                        <img src="images/icon-down.svg" alt="">
                        12%
                    </span>
                </p>
            </div> */
        
}

export default Overview;
import React from 'react'
import './DiscriptionBox.css'

export default function DiscriptionBox() {
    return (
        <div className='discriptionbox'>
            <div className="discriptionbox-navigator">
                <div className="discriptionbox-nav-box">Discription</div>
                <div className="discriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="discriptionbox-discription">
                <p>Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app. Consumers find a product of interest by visiting the website of the retailer directly or by searching among alternative vendors using a shopping search engine, which displays the same product's availability and pricing at different e-retailers.</p>
                <p>E-commerce is the buying and selling of goods and services over the internet. It works by using various technologies, such as websites, mobile apps, payment gateways, and online platforms, to connect buyers and sellers across different locations and markets.</p>
            </div>
        </div>
    )
}

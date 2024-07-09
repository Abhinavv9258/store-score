import React from 'react'

// importing title
import { useWebsiteTitle } from '../hooks/WebsiteTitle';

import IndexCard from '../components/IndexCard'
import '../assets/css/IndexCard.css';
import adminLogin from '../assets/images/561-adminLogin.png'
import ownerLogin from '../assets/images/558-ownerLogin.png'
import userLogin from '../assets/images/565-userLogin.png'


const Index = () => {

    useWebsiteTitle('Store Score');

    return (
        <div className='index-card-deck'>
            <IndexCard cardImage={adminLogin} cardName={'Admin'} cardButton={'Admin Login'} />
            <IndexCard cardImage={ownerLogin} cardName={'Owner'} cardButton={'Owner Login'} />
            <IndexCard cardImage={userLogin} cardName={'User'} cardButton={'User Login'} />
        </div>
    );
};


export default Index;
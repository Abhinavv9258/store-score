import React from 'react'

// importing title
import { useWebsiteTitle } from '../hooks/WebsiteTitle';


const Index = () => {
    
    useWebsiteTitle('Store Score');

    return (
        <div>
            Index
        </div>
    );
};


export default Index;
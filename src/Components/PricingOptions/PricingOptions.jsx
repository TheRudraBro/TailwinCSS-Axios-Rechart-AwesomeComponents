import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    
    return (
        <div>
             <h2 className='text-4xl font-semibold'>Get Our Membership</h2>
             <div className='grid md:grid-cols-4 gap-10'>
                {
                    pricingData.map(pricing => <PricingCard pricing={pricing} key={pricing.id}></PricingCard>)
                }
             </div>
        </div>
    );
};

export default PricingOptions;
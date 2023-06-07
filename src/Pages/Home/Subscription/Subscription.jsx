import React from 'react';

const Subscription = () => {
    return (
        <div className='container mx-auto bg-primary rounded-3xl my-14'>
            <div className="md:w-1/2 w-full mx-auto py-12">
                <h1 className='text-white font-bold text-3xl text-center leading-10 mb-6'>Toy World Playtime VIP - Join the Fun and Enjoy VIP Perks!</h1>
                <div className="flex justify-center gap-4 px-4 flex-wrap">
                    <input type="email" placeholder='email'
                    className='rounded-3xl bg-primary border-2 w-full ps-4 py-2 text-white outline-none ' />
                    <button className='btn px-8 rounded-3xl  btn-warning mt-4'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const myLoader = ({ src, width, quality }) => {
    return `https://daisyui.com/${src}?w=${width}&q=${quality || 75}`
}

const SingleUserDetails = ({user}) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <Image
                  loader={myLoader}
                  src="images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
            </figure>
            
            <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p>{user.course}</p>
                <p>{user.phone}</p>
                <div className="card-actions justify-end">
                <Link scroll={false} href={"user-"+user.id} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleUserDetails;
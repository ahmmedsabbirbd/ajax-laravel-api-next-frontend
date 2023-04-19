import SingleUser from '@/components/SingleUser/SingleUserDetails'
import Head from 'next/head'
import Image from 'next/image';
import useSWR from 'swr';

const myLoader = ({ src, width, quality }) => {
  return `https://daisyui.com/${src}?w=${width}&q=${quality || 75}`
}

const  Page = (props) => { 
  const singleUser = props.data.student;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('https://apiv1.mamungroup.net/api/students', fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div> 

  return (
    <div className='flex'>
         <Head>
            <title>{singleUser.name} | Student</title>
            <meta property="og:title" content={singleUser.name} key={singleUser.name}/>

            <meta name="description" content={singleUser.name}/>
            <meta name="keyword" content="website description"/>
            <meta name="author" content="Sabbir ahmmed"/>
            
            <meta property="og:title" content={singleUser.name} key={singleUser.name} />

            <meta property="og:site_name" content={singleUser.name} key={singleUser.name}/>
            <meta property="og:url" content="https://sabbir-me.netlify.app/" />
            <meta property="og:description" content="website description" />
            <meta property="og:image" content="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
        </Head>

        <div>
            {
                // data.data.map(user=> <SingleUser key={user.id} user={user} />)
            }
        </div>

      <div style={{position: 'fixed', left: '30%'}}>
            <div className="card card-compact w-100 bg-base-100 shadow-xl">
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
                    <h2 className="card-title">{singleUser.name}</h2>
                    <p>{singleUser.course}</p>
                    <p>{singleUser.phone}</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Page;

export async function getServerSideProps({ params }) {
    let userId = params.Id.split("-");
    userId = userId[1];

    const res = await fetch(`https://apiv1.mamungroup.net/api/students/${userId}`);
    const data = await res.json();


    return {
      props: {data}, // will be passed to the page component as props
    }
}
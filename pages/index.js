import { Inter } from 'next/font/google';
import axios from 'axios';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  function simpleGet() {
    fetch('http://127.0.0.1:8000/api/ajax/get')
        .then(r => r.text())
        .then(data => {
            console.log(data)
        })
  }

  function getJSON() {
      fetch('http://127.0.0.1:8000/api/ajax/getJSON')
          .then(r => r.json())
          .then(data => {
              console.log(data)
              console.log(data.email)
          })
  }

  function sendHeader() {
      fetch('http://127.0.0.1:8000/api/ajax/getHeader', {
          headers: {
              CustomHeader: '123',
              myPersonalValue: 'kire sala'
          }
      })
          .then(r => r.json())
          .then(data => {
              console.log(data)
          })
  }

  function errorCheck() {
      fetch('http://127.0.0.1:8000/api/ajax/getData/2')
          .then(r => {
              return {
                  json: r.json(),
                  ok: r.ok,
                  status: r.status
              }
          })
          .then((data) => {
              console.log(data)
          })
  }

  function postRequest() {
      fetch('http://127.0.0.1:8000/api/ajax/post', {
          method: 'POST',
          body: JSON.stringify(
              {
                  name: 'John Doe',
                  age: 20
              }
          ),
          headers: {
              "Content-Type": "application/json"
          }
      })
          .then(r => r.json())
          .then(data => {
              console.log(data)
          })
  }

  function putRequest() {
      fetch('http://127.0.0.1:8000/api/ajax/put/1', {
          method: 'PUT',
          body: JSON.stringify({
              name: 'John c',
              age: 20
          }),
          headers: {
              "Content-Type": "application/json"
          }
      })
          .then(r => r.json())
          .then(data => {
              console.log(data)
          })
  }

  function deleteRequest() {
      fetch('http://127.0.0.1:8000/api/ajax/delete/1', {
          method: 'DELETE',
          headers: {
              "Content-Type": "application/json"
          }
      })
          .then(r => r.json())
          .then(data => {
              console.log(data)
          })
  }


  //-------------------------
  function simpleGetAxios() {
      axios.get("http://127.0.0.1:8000/api/ajax/get")
          .then(data => {
              console.log(data)
          })
  }

  function getJSONAxios() {
      axios.get("http://127.0.0.1:8000/api/ajax/getJSON")
          .then(data => {
              console.log(data)
          })
  }

  function errorCheckAxios() {
      axios.get("http://127.0.0.1:8000/api/ajax/getData/2")
          .then(data => {
              console.log(data)
          })
          .catch(err => {
              console.log(err.response.data)
          })
  }

  function sendHeaderAxios() {
      axios.get('http://127.0.0.1:8000/api/ajax/getHeader', {
          headers: {
              CustomHeader: '123'
          }
      })
          .then(data => {
              console.log(data)
          })
  }

  function postRequestAxios() {
      axios.post('http://127.0.0.1:8000/api/ajax/post', { name: 'John Doe' })
          .then(data => {
              console.log(data)
          })
  }

  function putRequestAxios() {
      axios.put('http://127.0.0.1:8000/api/ajax/put/1', { name: 'John Doe' })
          .then(data => {
              console.log(data)
          })
  }

  function patchRequestAxios() {
      axios.patch('http://127.0.0.1:8000/api/ajax/patch/1', { name: 'John Doe' })
          .then(data => {
              console.log(data)
          })
  }

  function deleteRequestAxios() {
      axios.delete('http://127.0.0.1:8000/api/ajax/delete/1')
          .then(data => {
              console.log(data)
          })
  }

  // document.getElementById('submit-button').addEventListener('click', 
  // function handleForm(event) {
  //     event.preventDefault()
  //     const form = document.getElementById('form');
      
  //     console.log(Object.fromEntries(new FormData(form)));

  //     const formdata = Object.fromEntries(new FormData(form))
  //     axios.post('http://127.0.0.1:8000/api/ajax/post', formdata)
  //         .then(data => {
  //             console.log(data)
  //         })

  // })


  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="student">Student</Link></li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto p-10">
        <div className="space-y-5 ">
          <button onClick={ () => simpleGet() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Simple GET (Fetch)
          </button>
          <br/>
          <button onClick={ () => getJSON() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            GET JSON (Fetch)
          </button>
          <br/>
          <button onClick={ () => errorCheck() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Status Check (Fetch)
          </button>
          <br/>
          <button onClick={ () => sendHeader() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Send Header (Fetch)
          </button>
          <br/>
          <button onClick={ () => postRequest() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Post (Fetch)
          </button>
          <br/>
          <button onClick={ () => putRequest() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Put (Fetch)
          </button>
          <br/>
          <button onClick={ () => deleteRequest() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Delete (Fetch)
          </button>
          <hr/>
          <br/>
          <button onClick={ () => simpleGetAxios() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Simple GET (Axios)
          </button>
          <br/>
          <button onClick={ () => getJSONAxios() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            GET JSON (Axios)
          </button>
          <br/>
          <button onClick={ () => errorCheckAxios() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Status Check (Axios)
          </button>
          <br/>
          <button onClick={ () => sendHeaderAxios() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Send Header (Axios)
          </button>
          <br/>
          <button onClick={ () => postRequestAxios() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Post (Axios)
          </button>
          <br/>
          <button onClick={ () => putRequestAxios() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Put (Axios)
          </button>
          <br/>
          <button onClick={ () => patchRequestAxios() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Patch (Axios)
          </button>
          <br/>
          <button onClick={ () => deleteRequestAxios() } className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Delete (Axios)
          </button>
          
          <form action="#" id="form" method="POST">
            <label htmlFor="name">Name:
              <input type="text" name="name" id="name" ></input>
            </label>
            <label htmlFor="lastname">Last Name:
              <input type="text" name="lastname" id="lastname"></input>
            </label>
          </form>
          <button id="submit-button" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Submit</button>
        </div>
      </div>
    </div>
  )
}

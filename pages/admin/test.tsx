import React from 'react'
import axios from 'axios'
const test = () => {
       const api = "http://localhost:8000/api/invoice/all"
       axios.get(api, {
              headers: {
                     Accept: "application/json",
                     "Content-Type": "application/json"
              }
       }).then(response => console.log(response)).catch(err => console.log(err)
       )
       return (
              <>
                     <h1>Test</h1>
              </>
       )
}

export default test

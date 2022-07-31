import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../context/api/context';
import NetworkItem from './components/NetworkItem';
import './Network.scss'


const Network = () => {


  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("")

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_URL}/profiles`)
      .then(response => response.json())
      .then(data => {
        setProfiles(data);
        // console.log(data)
      })
      .finally(() => {
        setLoading(false);
      })

  }, []);

  const filteredNetworks = profiles.filter((filteredData) => {
    return filteredData.name.toLowerCase().includes(search)
  })

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }


  return (
    <div>
      {loading && <p>is loading</p>}
        <input type="text" onChange={handleSearch} />

      <div className="networkContainer">
        {filteredNetworks.map((network) =>
          <NetworkItem key={network._id} networkItem={network}></NetworkItem>
        )}
       
      </div>
    </div>
  )
}

export default Network
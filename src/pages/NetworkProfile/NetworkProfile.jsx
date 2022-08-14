import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../context/api/context';
import './NetworkProfile.scss'


const NetworkProfile = () => {

    const { _id } = useParams();

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        fetch(`${BASE_URL}/profiles/${_id}`)
            .then(response => response.json())
            .then(data => {
                setProfile(data);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [_id]);

    const { name, image } = profile

    return (
        <div>
            {loading && <p>loading...</p>}
            {name}
            <img src={image} alt="" />
        </div>
    )
}

export default NetworkProfile
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    const { tourId } = useParams();

    const [tour, setTour] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/manage/${tourId}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, []);
    // const handleDelete = id => {
    //     const url = `http://localhost:5000/services/${id}`;
    //     fetch(url, {
    //         method: 'DELETE'

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount) {
    //                 const remaining = tour.filter(one => one._id !== id);
    //                 setTour(remaining);
    //                 alert('Deleted Successfully.');
    //             }

    //         })
    // }
    return (
        <div>
            <h2>manage: {tourId}</h2>
            <h3>name: {tour?.name}</h3>
            {/* <Link to={`/manage/${tour._id}`}>
                <button onClick={() => handleDelete(tour._id)} className="btn btn-info">delete</button>
            </Link> */}
            <button className="btn btn-info">delete</button>
        </div>
    );
};

export default ManageOrders;
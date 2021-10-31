import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully!!');
                }
            })
    };
    return (
        <div className="">
            <h3 className="text-center p-4">Add a Service</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
                <input className="w-50 mb-2" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea className="w-50 mb-2" {...register("description")} placeholder="Description" />
                <input className="w-50 mb-2" {...register("img")} placeholder="ImageUrl" />
                <input className="w-50 mb-2" type="number" {...register("price")} placeholder="price" />
                <input className="w-50 mb-2" type="submit" />
            </form>
        </div>
    );
};

export default AddService;
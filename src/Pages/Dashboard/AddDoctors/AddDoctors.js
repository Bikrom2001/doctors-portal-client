import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Share/Loading/Loading';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imgHostingKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }

    })

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    // save doctor information to the database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/managedoctors')
                        })

                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h1 className='text-4xl'>Add a Doctor</h1>
            <form className='space-y-6' onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block dark:text-black">Name</label>
                    <input type='text' {...register("name", { required: "Name is required" })} placeholder="Name" className="w-full border px-4 py-3 rounded-md dark:border-gray-700  dark:text-black focus:dark:border-violet-400" />
                    <div className="text-xs dark:text-red-500">
                        {errors.name && <p role="alert">{errors.name?.message}</p>}
                    </div>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-black">Email</label>
                    <input type='email' {...register("email", { required: "Email Address is required" })} placeholder="Email" className="w-full border px-4 py-3 rounded-md dark:border-gray-700  dark:text-black focus:dark:border-violet-400" />
                    <div className="text-xs dark:text-red-500">
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                    </div>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-black">Specialty</label>
                    <select
                        {...register("specialty")}
                        className="select select-bordered w-full max-w-xs">
                        {
                            specialties?.map(specialty => <option key={specialty._id}>{specialty?.name}</option>)
                        }
                    </select>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block dark:text-black">Photos</label>
                    <input type='file' {...register("image", { required: "Image is required" })} placeholder="Name" className="w-full border px-4 py-3 rounded-md dark:border-gray-700  dark:text-black focus:dark:border-violet-400" />
                    <div className="text-xs dark:text-red-500">
                        {errors.img && <p role="alert">{errors.img?.message}</p>}
                    </div>
                </div>
                <div className="text-xs dark:text-red-500">
                </div>
                <input type="submit" value='Add Doctor' className="block cursor-pointer w-full p-3 text-center rounded-md text-white bg-gradient-to-r from-primary to-secondary" />
            </form>
        </div>
    );
};

export default AddDoctors;
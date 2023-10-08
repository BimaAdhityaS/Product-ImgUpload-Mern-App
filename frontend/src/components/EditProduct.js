import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [preview, setPreview] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = async () => {
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        setTitle(res.data.name);
        setDescription(res.data.description);
        setFile(res.data.image);
        setPreview(res.data.url);
    }

    const loadImage = (e) => {
        const image = e.target.files[0]
        setFile(image)
        setPreview(URL.createObjectURL(image))
    }

    const updateProduct = async (e) => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('file', file)
        try {
            await axios.patch(`http://localhost:5000/products/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate('/');
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className='flex justify-center'>
            <div className="modal-box">
                <h3 className="font-bold text-lg text-center">Edit Product</h3>
                <form method='dialog' onSubmit={updateProduct}>
                    <div className=' text-center'>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered input-sm w-full max-w-xs mt-2"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            placeholder="Note"
                            className="textarea textarea-bordered textarea-md w-full max-w-xs mt-2"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <input
                            type="file"
                            className="file-input file-input-bordered file-input-xs w-full max-w-xs"
                            onChange={loadImage}
                        />

                        {preview ? (
                            <div className='flex justify-center mt-2'>
                                <figure>
                                    <img src={preview} alt="preview iamge" className="rounded-xl" />
                                </figure>
                            </div>
                        ) : ("")}

                    </div>
                    <br></br><button type='submit' className="btn w-full">Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditProduct
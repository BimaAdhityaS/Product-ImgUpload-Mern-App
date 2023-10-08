import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [preview, setPreview] = useState('');

    const loadImage = (e) => {
        const image = e.target.files[0]
        setFile(image)
        setPreview(URL.createObjectURL(image))
    }

    const saveProduct = async (e) => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('file', file)
        try{
            await axios.post("http://localhost:5000/products", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const modal = document.getElementById('my_modal_1');
            modal.close();
            window.location.reload();
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="text-center mt-2">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn w-full bg-green-500 text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Product</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-gray-400">
                    <h3 className="font-bold text-lg text-center text-white">ADD PRODUCT</h3>
                    <form method='dialog' onSubmit={saveProduct}>
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
                        <br></br><button type='submit' className="btn w-full">Save</button>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default AddProduct
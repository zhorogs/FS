import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteBooks() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDeleteBook = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/books/${id}`);
            .then(() => {
                setLoading(false);
                navigate('/');
            })
        .catch((error) => {
            setLoading(false);
            alert('An error happened. Please check console.');
            console.log(error);
        });
}
return (
    <div>DeleteBooks</div>
)


export default DeleteBooks
import React from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBooks() {
    const [title, setTitle] = useState('');
    const [author, setAutor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    return (
        <div>CreateBooks</div>
    )
}

export default CreateBooks
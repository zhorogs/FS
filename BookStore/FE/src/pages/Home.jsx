import React, { useEffect, useState } from 'react';
import axios from 'axios';
import spinner from '../components/spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5555/books")
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);
    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Books List</h1>
                <Link to="/books/create">
                    <MdOutlineAddBox className="text-sky-800 text-4xl" />
                </Link>
                {loading ? (
                    <Spinner />
                ) : (
                    <table className="w-full border-separate border-spacing-2">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 rounded-md">
                                    No
                                </th>
                                <th className="border border-slate-600 rounded-md">
                                    Title
                                </th>
                                <th className="border border-slate-600 rounded-md max-md:hidden">
                                    Author
                                </th>
                                <th className="border border-slate-600 rounded-md">
                                    Publisher Year
                                </th>
                                <th className="border border-slate-600 rounded-md max-md:hidden">
                                    Operations
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
};


export default Home
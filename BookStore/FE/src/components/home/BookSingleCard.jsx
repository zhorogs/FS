import { Link } from 'react-router-dom';
import { BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';


const BookSingleCard = ({ book }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <BiShow className=' text-3xl text-blue-800 hover:text-black cursor-pointer' onClick={() => setShowModal(true)} />
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                </Link>
            </div>
            {
                showModal && (
                    <BookModal book={book} onClose={() => setShowModal(false)} />
                )
            }
        </div>
    )
}

export default BookSingleCard
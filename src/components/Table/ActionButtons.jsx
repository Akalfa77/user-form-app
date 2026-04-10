import React from 'react'

export default function ActionButtons({ onEdit, onDelete }) {
    return (
        <div className='action-button'>
            <button
                onClick={onEdit}
                className='btn btn-edit'
            >
                Edit
            </button>
            <button
                onClick={onDelete}
                className='btn btn-delete'
            >
                Delete
            </button>
        </div>
    )
}

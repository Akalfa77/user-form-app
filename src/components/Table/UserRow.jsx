import React from 'react'
import ActionButtons from './ActionButtons'

function UserRow({ user, onDelete, onEdit }) {
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.gender}</td>
            <td>{user.car}</td>
            <td>{user.cgpa}</td>
            <td>{'*'.repeat(8)}</td>
            <td>
                <ActionButtons
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            </td>
        </tr>
    )
}

export default React.memo(UserRow)
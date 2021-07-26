import React from 'react'
import { BsTrash } from "react-icons/bs";


function Contacts({ name, email, handleDelete, id }) {
	return (
		<li className='list-group-item list-item'>
			<div className='left-column'>
				<div className="image rounded-circle position-relative">
					<img
						src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
						alt=""
						className='position-absolute'
					/>
				</div>
				<div className="text-content">
					<h2>{name}</h2>
					<span>{email}</span>
				</div>
			</div>
			<button className='btn-delete' onClick={() => handleDelete(id)}>
				<BsTrash />
			</button>
		</li >
	)
}

export default Contacts

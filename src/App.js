import Header from './containers/Header'
import Contacts from './containers/Contacts'
import { useState, useEffect } from 'react'

function App() {
	const [nameField, setNameField] = useState("");
	const [emailField, setEmailField] = useState("");
	const [contacts, setContacts] = useState([])

	useEffect(() => {
		let storageContacts = JSON.parse(localStorage.getItem('contacts'));
		if (storageContacts === null) {
			localStorage.setItem('contacts', JSON.stringify([]));
		} else {
			setContacts(storageContacts);
		}
	}, []);

	const handleName = (e) => {
		setNameField(e.target.value);
	}

	const handleEmail = (e) => {
		setEmailField(e.target.value);
	}

	const addContact = (e) => {
		e.preventDefault();
		const id = new Date();
		let storageContacts = JSON.parse(localStorage.getItem('contacts'));
		console.log(storageContacts);
		const contact = { id: id, name: nameField, email: emailField };
		storageContacts.push(contact);
		localStorage.setItem("contacts", JSON.stringify(storageContacts));
		setContacts([...contacts, { id: id, name: nameField, email: emailField }])
		setNameField('');
		setEmailField('');
	}

	const handleDelete = (id) => {
		let newContacts = contacts.filter(contact => contact.id !== id);
		setContacts(newContacts);
		localStorage.setItem('contacts', JSON.stringify(newContacts));
	}

	return (
		<div className="App">
			<Header />
			<div className="container mt-4">
				<div className="card p-3-sm bg-light">
					<div className="card-body row justify-content-center">
						<div className="col-lg-6">
							<h3 className='mb-4'>Add Contact</h3>
							<form onSubmit={addContact}>
								<div className="form-group mb-3">
									<label htmlFor="name">Name</label>
									<input
										type="text"
										className="form-control"
										id="name"
										placeholder="Enter name"
										value={nameField}
										onChange={handleName}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										className="form-control"
										id="email"
										placeholder="Enter email"
										value={emailField}
										onChange={handleEmail}
										required
									/>
								</div>
								<button
									type="submit"
									className="btn mt-2 btn-primary">Add</button>
							</form>
							<ul className='list-group mt-3'>
								{contacts.map((contact, idx) => (
									<Contacts
										key={idx}
										name={contact.name}
										email={contact.email}
										id={contact.id}
										handleDelete={handleDelete}
									/>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

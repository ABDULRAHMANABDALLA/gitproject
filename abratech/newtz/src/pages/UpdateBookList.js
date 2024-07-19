// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function UpdateBookingList() {
//     const [customers, setCustomers] = useState([]);
//     const navigate = useNavigate();

//     // Fetch all customers on component mount
//     useEffect(() => {
//         fetchCustomers();
//     }, []);

//     // Function to fetch all customers
//     const fetchCustomers = () => {
//         axios.get('http://localhost:8080/api/v1/customer/customer')
//            .then(response => {
//                 setCustomers(response.data);
//             })
//            .catch(error => {
//                 console.error('Error when listing customers:', error);
//             });
//     }

//     // Function to handle updating a customer
//     const handleUpdate = (customerId) => {
//         console.log('Update customer with ID:', customerId);
//         // Add your logic to update a customer here
//         axios.put(`http://localhost:8080/api/v1/customer/customer/${customerId}`)
//            .then(response => {
//                 fetchCustomers(); // refetch customers after update
//                 navigate('/updated', { replace: true }); // navigate to /updated route
//             })
//            .catch(error => {
//                 console.error('Error when updating customer:', error);
//             });
//     }

//     // Function to handle deleting a customer
//     const handleDelete = (customerId) => {
//         console.log('Delete customer with ID:', customerId);
//         // Add your logic to delete a customer here
//         axios.delete(`http://localhost:8080/api/v1/customer/${customerId}`)
//            .then(response => {
//                 fetchCustomers(); // refetch customers after delete
//                 navigate('/deleted', { replace: true }); // navigate to /deleted route
//             })
//            .catch(error => {
//                 console.error('Error when deleting customer:', error);
//             });
//     }

//     return (
//         <div className="booking-list-container">
//             <h2>Booked Tours</h2>
//             <table className="booking-list">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone Number</th>
//                         <th>Tour</th>
//                         <th>Date</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {customers.map((customer) => (
//                         <tr key={customer.id}>
//                             <td>{customer.customerName}</td>
//                             <td>{customer.customerEmail}</td>
//                             <td>{customer.phoneNumber}</td>
//                             <td>{customer.tour}</td>
//                             <td>{customer.date}</td>
//                             <td>
//                                 <button onClick={() => handleUpdate(customer.id)}>Update</button>
//                                 <button onClick={() => handleDelete(customer.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default UpdateBookingList;
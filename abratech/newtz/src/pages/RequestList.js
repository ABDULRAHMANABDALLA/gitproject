// // src/Pages/RequestList.js
// import React, { useState } from 'react';
// import './RequestList.css';

// const RequestList = () => {
//   const [requests, setRequests] = useState([
//     {
//       id: 1,
//       fullName: 'John Doe',
//       email: 'john@example.com',
//       orderDate: '2024-06-28',
//       orderTime: '10:00 AM',
//       fullAddress: 'Math 101',
//       campusName: 'Main Campus',
//       requestPurpose: 'Consultation',
//       status: 'Pending'
//     },
//     {
//       id: 2,
//       fullName: 'Jane Smith',
//       email: 'jane@example.com',
//       orderDate: '2024-06-29',
//       orderTime: '2:00 PM',
//       fullAddress: 'Physics 201',
//       campusName: 'West Campus',
//       requestPurpose: 'Lab Access',
//       status: 'Approved'
//     },
//     {
//       id: 3,
//       fullName: 'Bilal Khamis Haji',
//       email: 'bilalkhamis@gmail.com',
//       orderDate: '2024-06-29',
//       orderTime: '2:00 PM',
//       fullAddress: 'BITAM 2',
//       campusName: 'Tunguu',
//       requestPurpose: 'Education Issue',
//       status: 'Approved'
//     }
//   ]);

//   const handleCancelRequest = (id) => {
//     setRequests(requests.filter(order => order.id !== id));
//   };

//   return (
//     <div className="order-list-container">
//       <h2>Order List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Full Name</th>
//             <th>Email</th>
//             <th>Order Date</th>
//             <th>Order Time</th>
//             <th>Full Address</th>
//             <th>Order Details</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {requests.map(order => (
//             <tr key={order.id}>
//               <td>{order.fullName}</td>
//               <td>{order.email}</td>
//               <td>{order.orderDate}</td>
//               <td>{order.orderTime}</td>
//               <td>{order.fullAddress}</td>
//               <td>{order.orderDetails}</td>
//               <td>
//                 <button className='cancel-button' onClick={() => handleCancelRequest(order.id)}>Cancel</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RequestList;

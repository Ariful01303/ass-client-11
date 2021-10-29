import React, { useEffect, useState } from 'react';
import useAuth from '../Firebase/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/addBooking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user.email]);

  console.log(bookings);

    return (
        <div>
            <h2>my orders{bookings.length}</h2>
            {
              bookings.map(book=><div className="d-flex m-auto">
                  <p>{book.email}</p>
                  <p>{book.title}</p>
                  <button className="btn btn-primary">Remove</button>
              </div>)
            }
        </div>
    );
};

export default MyOrders;
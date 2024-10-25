import React, { useState } from 'react';
import Card from './Card'; // Import the Card component

const TablePage = () => {
  const [entries, setEntries] = useState([
    {
      name: 'Deyanira Juliet',
      account: 'SECURITY NEXTGEN',
      title: 'Founder',
      createdBy: 'Jeremy',
      date: '03/05/2021',
      status: 'In Progress',
    },
    {
      name: 'Cliff Majersik',
      account: 'Institute for Marketing',
      title: 'Director of Marketing',
      createdBy: 'Jeremy',
      date: '11/10/2020',
      status: 'Not Interested',
    },
    {
      name: 'Shyla Raghav',
      account: 'Conservation Movement',
      title: 'Vice President',
      createdBy: 'Jeremy',
      date: '09/18/2020',
      status: 'Not Interested',
    },
  ]);

  const handleEdit = (entry) => {
    const newStatus = prompt('Update Status:', entry.status);
    if (newStatus) {
      setEntries((prevEntries) =>
        prevEntries.map((e) =>
          e.name === entry.name ? { ...e, status: newStatus } : e
        )
      );
    }
  };

  const handleDelete = (entry) => {
    if (window.confirm(`Are you sure you want to delete ${entry.name}?`)) {
      setEntries((prevEntries) =>
        prevEntries.filter((e) => e.name !== entry.name)
      );
    }
  };

  const handleComment = (entry) => {
    const comment = prompt(`Add a comment for ${entry.name}:`);
    if (comment) {
      console.log(`Comment on ${entry.name}: ${comment}`);
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Targets</h1>
      {entries.length > 0 ? (
        entries.map((entry, index) => (
          <Card
            key={index}
            entry={entry}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onComment={handleComment}
          />
        ))
      ) : (
        <p className="text-gray-500">No entries available</p>
      )}
    </div>
  );
};

export default TablePage;

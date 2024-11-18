import React from 'react'
import './Board.css'

function Board() {
    const boardMembers = [
        { title: 'President', name: 'Herr Muhammad Azaan Idrees' },
        { title: 'Vice President', name: 'Herr Akhilesh Giddaluri' },
        { title: 'Treasurer', name: 'Herr Zahid Mehmood' },
        { title: 'Member', name: 'Herr Muhammad Salman' },
        { title: 'Member', name: 'Herr Hassan Jamil' },
        { title: 'Member', name: 'Herr Muhammad Adnan Khalid' },
        { title: 'Member', name: 'Herr Muhammad Saqib Ahmed' },
      ];
      return (
        <div className="board-section">
          <h1 className="section-title">Executive Board</h1>
          <p className="section-description">
            The Executive Board of TANAZUR Islamic Center consists of committed individuals dedicated to ensuring the smooth functioning and growth of the center.
          </p>
    
          <div className="board-container">
            {boardMembers.map((member, index) => (
              <div 
                key={index} 
                className={`card ${member.name === 'Herr Muhammad Saqib Ahmed' ? 'centered-card' : ''}`}
              >
                <h3>{member.title}</h3>
                <p>{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Board
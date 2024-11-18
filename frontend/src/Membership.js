import React from 'react';
import './Membership.css'; // CSS file for styling

const membershipData = [
  {
    title: 'Associate Membership',
    contribution: '40 EUR (for Executive Associate Members)',
    privileges: [
      'Full voting rights in the general assembly meetings',
      'Priority access to special events, workshops, and lectures',
      'Exclusive access to members-only educational resources and programs',
      'Opportunity to participate in decision-making processes for center development',
      'Discounts on paid seminars, courses, and events',
      'Recognition in the annual report as an Executive Associate Member',
    ],
  },
  {
    title: 'Non-Associate Membership',
    contribution: '30 EUR (for Executive Non-Associate Members)',
    privileges: [
      'Limited voting rights in general assembly meetings',
      'Participation in members-only events',
      'Access to educational programs and community services',
      'Discounts on selected seminars and activities',
      'Eligible to apply for volunteer and committee roles',
    ],
  },
  {
    title: 'Honorary Membership',
    contribution: '20 EUR (for employed persons), 10 EUR (for students)',
    privileges: [
      'Invitation to attend general assembly meetings (without voting rights)',
      'Free or discounted entry to selected workshops, lectures, and community events',
      'Access to selected educational materials and online resources',
      'Priority registration for youth programs, sisters’ events, and health awareness sessions',
      'Special recognition for student members and discounted fees for educational courses',
    ],
  },
];

const Membership = () => {
  return (
    <div className="membership-page">
      <h2 className="membership-title">Membership</h2>
      <p className="membership-description">
        At TANAZUR Islamic Center, we offer various membership categories to foster active involvement and community engagement. Each membership type provides distinct privileges and benefits. Join us in supporting the growth of our center and gaining access to valuable services, educational programs, and community events.
      </p>

      <div className="membership-cards">
        {membershipData.map((member, index) => (
          <div key={index} className="membership-card">
            <h3>{member.title}</h3>
            <p><strong>Contribution:</strong> {member.contribution}</p>
            <h4>Privileges:</h4>
            <ul>
              {member.privileges.map((privilege, i) => (
                <li key={i}>{privilege}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="membership-footer">
        <h3>How to Join</h3>
        <p>
          Becoming a member is easy! Simply fill out the membership application form and submit the required documents along with the membership fee. For more information on how to join, please contact us at [email address] or visit our center in Bochum.
        </p>

        <h3>Support and Get Involved</h3>
        <p>
          By becoming a member of TANAZUR Islamic Center, you are contributing to the growth and enrichment of our community. Your membership helps sustain our educational, spiritual, and social initiatives, ensuring that we can continue to serve Muslims in Bochum and beyond.
        </p>
      </div>
    </div>
  );
};

export default Membership;

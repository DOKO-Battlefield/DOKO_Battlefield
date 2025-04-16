// src/pages/Membership.js
import MembershipCard from '../components/MembershipCard'
import '../styles/Membership.css';

const membershipPlans = [
{
name: 'Bronze Scout',
price: '$49/mo',
perks: [
'2 activity room credits/month',
'1 free media download/month',
'Queue skip for 1 room per visit',
'5% off food & drinks',
'10% off merch & gear'
]
},
{
name: 'Silver Warrior',
price: '$89/mo',
perks: [
'4 activity room credits/month',
'2 media downloads/month',
'Priority queue all day',
'10% off food, drinks, and merch',
'Access to member-only events & early booking'
]
},
{
name: 'Gold Elite',
price: '$149/mo',
perks: [
'Unlimited weekday access',
'4 media downloads/month',
'1 Bronze-level guest pass/month',
'20% off food, drinks, and gear',
'Exclusive Gold-tier merch + digital badge',
'Front-of-line access for all rooms'
]
}
]

export default function Membership() {
  return (
    <div className="membership-page">
      <h1 className="membership-title">Membership Tiers</h1>
      <p className="membership-subtext">
      Whether you're just stepping into the dojo or dominating the leaderboard — there's a plan built for your path.
      </p>
      <div className="membership-grid">
        {membershipPlans.map(plan => (
          <MembershipCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );}


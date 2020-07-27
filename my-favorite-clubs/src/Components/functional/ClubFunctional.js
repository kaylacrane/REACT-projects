import React from 'react';

function ClubFunctional(props) {
  const clubData = props.club;
  // console.log(props.club);
  // the constant below is a map that runs through all the members for one club, and returns a li with a value for each member name. The data for the members list comes from props. We create a key from the index so that react will be happy
  const members = clubData.members.map((member, index) => {
    return <li key={index}>{member}</li>;
  });
  // below is how we build the HTML for each club card/item. The data comes from props. We can create a variable for props.club so we don't have to repeat that part if we want. Our variable is above (clubData)
  return (
    <article className="clubCard">
      <i className={`${clubData.fa} clubIcon`}></i>
      <div className="clubDescription">
        <h2 className="clubName">{clubData.name}</h2>
        <span className="members">Members:</span>
        {/* {members} does not come from props. This data comes from the constant we created above */}
        <ul className="memberList">{members}</ul>
      </div>
    </article>
  );
}

export default ClubFunctional;

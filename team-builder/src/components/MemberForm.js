import React, { useState } from 'react';

const MemberForm = props => {
    console.log(props);

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = e => {
        console.log(member);
    }










    return (
    []
 );
}

export default MemberForm;
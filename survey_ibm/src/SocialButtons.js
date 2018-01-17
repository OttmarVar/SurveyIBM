import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class SocialButtons extends React.Component {
    render() {
        return(
            <div className='row mb-3'>
                <div className='col text-center'> 
                    <a href="https://www.facebook.com/ibm.mexico/"><FontAwesome name='facebook' className='s-icon'/></a>
                </div>
                <div className='col text-center'> 
                    <a href="https://twitter.com/ibm_mx"><FontAwesome name='twitter' className='s-icon'/></a>
                </div>
                <div className='col text-center'>
                    <a href="https://www.linkedin.com/company/ibm_mexico"><FontAwesome name='linkedin' className='s-icon'/></a>
                </div>
            </div>
        );
    }
}
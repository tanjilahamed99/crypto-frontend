import { ConnectWallet } from '@thirdweb-dev/react';
import React from 'react';

const RegistrationFunction = () => {
    return (
        <div>
            <ConnectWallet btnTitle="Connect" hideBuyButton />
        </div>
    );
};

export default RegistrationFunction;
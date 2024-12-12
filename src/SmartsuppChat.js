import  { useEffect } from 'react';

const SmartsuppChat = () => {
    useEffect(() => {
        // Dynamically add the Smartsupp script
        const script = document.createElement('script');
        script.src = 'https://www.smartsuppchat.com/loader.js?';
        script.async = true;

        // Initialize the _smartsupp object
        script.onload = () => {
            window._smartsupp = window._smartsupp || {};
            window._smartsupp.key = 'd2b235c63089f9b58dc0ea2f9f79a2d43210039d';
        };

        // Append the script to the body
        document.body.appendChild(script);

        return () => {
            // Cleanup: Remove the script when the component is unmounted
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default SmartsuppChat;
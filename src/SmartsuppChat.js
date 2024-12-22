import  { useEffect } from 'react';
import toast from 'react-hot-toast';

const SmartsuppChat = () => {
    useEffect(() => {
        try{
        // Dynamically add the Smartsupp script
        const script = document.createElement('script');
        script.src = 'https://www.smartsuppchat.com/loader.js?';
        script.async = true;

        // Initialize the _smartsupp object
        script.onload = () => {
            window._smartsupp = window._smartsupp || {};
            window._smartsupp.key = 'db32f3102c717d17f9bf69b8f90dda6bf59ef8ba';
        };

        // Append the script to the body
        document.body.appendChild(script);

        return () => {
            // Cleanup: Remove the script when the component is unmounted
            document.body.removeChild(script);
        };
    }catch(e){
        toast.error(e.message);
    }
    }, []);

    return null;
};

export default SmartsuppChat;
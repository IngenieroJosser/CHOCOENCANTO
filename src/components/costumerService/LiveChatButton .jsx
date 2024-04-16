import WhatsApp from 'react-whatsapp';

const LiveChatButton = () => {
    return (
        <WhatsApp
        phoneNumber="573232842193" // replace with your WhatsApp number
        accountName="ChocóEncanto" // replace with your name or company name
        message="Hola, como puedo ayudarte?..." // replace with your default message
        showPopup
        popupDelay={2000}
        // popupText="Necesitas ayuda? Chatea con nosotros en WhatsApp!"
        />
    );
};

export default LiveChatButton;
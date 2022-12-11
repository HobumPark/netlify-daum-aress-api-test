import ReactDom from 'react-dom';
 
const PopUpDom = ({ children }) => {
    const el = document.getElementById('PopUpDom');
    return ReactDom.createPortal(children, el);
};
 
export default PopUpDom;
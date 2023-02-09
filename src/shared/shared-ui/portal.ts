import ReactDOM from 'react-dom';

export function Portal(props: any) {
    console.log(props.elementId);
    return ReactDOM.createPortal(props.children, document.getElementById(props.elementId) as any);
}

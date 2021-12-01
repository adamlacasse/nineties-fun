export default function(elementId) {
    const el = document.getElementById(elementId);
    const windowHeader = el.getChildElement

    el.addEventListener('mousedown', handleMouseDown);

    function handleMouseDown(e) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    
        let prevX = e.clientX;
        let prevY = e.clientY;
    
        function handleMouseMove(e) {
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;
    
            const rect = el.getBoundingClientRect();
            el.style.left = rect.left - newX + 'px';
            el.style.top = rect.top - newY + 'px';
    
            prevX = e.clientX;
            prevY = e.clientY;
        }
        
        function handleMouseUp() {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }    
};

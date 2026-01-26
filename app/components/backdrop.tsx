interface BackdropProps{
    onClick: () => void
}

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
    return ( 
        <div 
        onClick={onClick}
        className="
        opacity-50
        bg-textPrimary
        w-screen
        h-screen
        fixed
        top-0
        left-0
        z-20
        "
        >

        </div>
     );
}
 
export default Backdrop;
import "./../app/stardust.css";

export default function StardustBackground() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden', background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)' }}>
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
        </div>
    );
}

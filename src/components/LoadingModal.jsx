import { LoadingIndicator } from 'react95';
import './LoadingModal.scss';

export default function LoadingModal({ topText, bottomText, zIndex }) {

    return (
        <div className="loading-modal-container" style={{ zIndex }}>
            <section className="loading-modal">
                <p id="loader-text-top">{topText}</p>
                <LoadingIndicator isLoading />
                {bottomText}
            </section>
        </div>
    );
};

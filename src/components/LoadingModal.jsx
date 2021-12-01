import { LoadingIndicator } from 'react95';
import './LoadingModal.scss';

export default function LoadingModal({ topText, bottomText }) {

    return (
        <div id="loading-modal-container">
            <section id="loading-modal">
                <p id="loader-text-top">{topText}</p>
                <LoadingIndicator isLoading />
                {bottomText}
            </section>
        </div>
    );
};

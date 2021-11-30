import { LoadingIndicator } from 'react95';
import './LoadingModal.scss';

export default function LoadingModal({ bottomText }) {

    return (
        <div id="loading-modal-container">
            <section id="loading-modal">
                <p id="loader-text-top">Loading...</p>
                <LoadingIndicator isLoading />
                {bottomText}
            </section>
        </div>
    );
};

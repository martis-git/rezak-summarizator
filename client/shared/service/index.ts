// import PersistedStore from '../store'
import { log } from '../../popup/chrome-tools'

const BackgroundService: IBackgroundService = {
    pushState(nextState: IUserSettingsState) {
        chrome.runtime.sendMessage({
            type: 'UPDATE_USER_SETTINGS',
            payload: nextState,
        });
    }
}

export default BackgroundService
/**
 * Здесь расположены все скрипты, имеющие доступ к контенту страницы
 */
import messenger from './messengers/content-messenger'
import BLService from '../../shared/service';
import { userSettingsState as initialConfig } from '../../shared/store/user-settings'
import './content.css'

let firedElement: Element = null;

/**
 * Обработчик вызова пункта контекстоного меню `Сократить`
 * @handler CONTEXT_ACTION_CLICK
 */
messenger.registerHandler('CONTEXT_ACTION_CLICK', (data) => {
    console.log('[REACT-CONTENT] clickedElement ', firedElement);
    if (firedElement) return data;
});

/**
 * Покраска текста с вызовом модалки
 * @handler HIGHLIGHT
 */
messenger.registerHandler('HIGHLIGHT', (props: HiglightProps) => {
    if (!firedElement) return 'fail';

    const { text_sentences, total_selection } = props
    /** get config */
    chrome.storage.sync.get("rezak-user-settings", (item) => {
        const config: IUserSettingsState = { ...initialConfig, ...item['rezak-user-settings'] }
        console.log('[REZAK:CONTENT] Config:', config)
        const maxWeight = Math.max(...total_selection)
        /** get colors */
        const { color, ratio, isColorMode, isSummarizeMode } = config;
        const colors = BLService.getPalette(color, maxWeight, isColorMode)
        const threshold = ratio * maxWeight;
        /** reducing */
        const sentences: ISentence[] = text_sentences.map((s, i) => ({ content: s, weight: total_selection[i] }))
        const reducedSentences = BLService.reduceSentences(sentences, threshold, isSummarizeMode)
        /** highlighting */
        console.log('[REACT-CONTENT] to be highlighted', text_sentences);
        const html = reducedSentences.map(({ content, weight }) =>
        `<span style="color: ${colors[weight]}">${content}</span>`
        ).join('\n');
        /** generate modal */
        // @ts-ignore
        let modal = createModalElement(html, firedElement);
        firedElement.appendChild(modal);
        return "completed"
    });
    return "fail"
});

document.addEventListener('contextmenu', (event) => {
    firedElement = getSelection();
});

/**
 * Получение текущего выделения
 * @data selection
 */
function getSelection(): Element | null {
    return window.getSelection().anchorNode?.parentElement
}

/**
 * Отрисовка модального окна
 * @component Modal
 */
function createModalElement(innerHTML: string, containerEl: Element): Element {
    const modal = document.createElement('div');
    modal.className = 'rezak-modal';
    modal.style.width = `${containerEl.clientWidth}px`;
    // @ts-ignore
    modal.style.top = `${containerEl.offsetTop}px`;
    modal.innerHTML = innerHTML;
    modal.appendChild(createModalCloseButton(() => modal.style.visibility = 'hidden'));
    return modal;
}

/**
 * Отрисовка кнопки закрытия для модалки
 * @component ModalCloseBtn
 */
function createModalCloseButton(close: () => void): Element {
    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '&#10006;';
    closeBtn.className = 'rezak-modal-close';
    closeBtn.title = 'Close';
    closeBtn.onclick = close;
    return closeBtn;
}

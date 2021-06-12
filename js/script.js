import tabs from './module/tabs';

document.addEventListener('DOMContentLoaded', () => {
	tabs({
		buttonSelector: '.menu__item',
		parentButtonSelector: '.menu__items',
		contentSelector: '.tabs__block',
		activeClasses: ['show', 'fade'],
		activeButClasses: ['menu__item-active', 'fade'],
		hideClasses: ['hide']
	});
});
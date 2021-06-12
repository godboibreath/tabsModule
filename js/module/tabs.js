function tabs({
	buttonSelector,
	contentSelector,
	parentButtonSelector,
	activeClasses: [...active] = [],
	activeButClasses: [...activeBut],
	hideClasses: [...hides] = []
} = {}) {
	const tabs = document.body.querySelectorAll(buttonSelector),
		tabsContent = document.querySelectorAll(contentSelector),
		tabsParent = document.querySelector(parentButtonSelector);

	function hideTabContet() {
		tabsContent.forEach(item => {
			if (hides.length != 0) {
				hides.forEach(hide => {
					item.classList.add(hide);
				});
			}
			if (active.length != 0) {
				active.forEach(act => {
					item.classList.remove(act);
				});
			}
		});
		tabs.forEach(item => {
			activeBut.forEach(actb => {
				item.classList.remove(actb);
			});
		});
	}

	function showTabContent(i = 0) {
		hides.forEach(hide => {
			tabsContent[i].classList.remove(hide);
		});
		active.forEach(act => {
			tabsContent[i].classList.add(act);
		});
		activeBut.forEach(actb => {
			tabs[i].classList.add(actb);
		});
	}
	hideTabContet();
	showTabContent();

	tabsParent.addEventListener('click', e => {
		if (e.target && e.target.classList.contains(buttonSelector.replace(/\W/g, ''))) {
			activeBut.forEach(actb => {
				e.target.classList.contains(actb);
				tabs.forEach((item, i) => {
					if (e.target == item) {
						hideTabContet();
						showTabContent(i);
					}
				});
			});
		}
	});

}

export default tabs;
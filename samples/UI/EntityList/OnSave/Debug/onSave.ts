﻿/// <reference path="JSBridge.d.ts"/>

/**
 * Validate 'Text-Edit' kind property 'fax' on edited entities during on save event.
 * @param register if 'true' handler is bound.
 */
function validateFaxPropertyOnSave(register: boolean) {
	MobileCRM.UI.EntityList.onSave(entityList => {
		let editedEntities = entityList.context.entities;
	}, register, null);
}
/** Register onSave event handler when page is loaded. */
window.onload = () => {
	validateFaxPropertyOnSave(true);
}
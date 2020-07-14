
import { Polymer, html } from '@polymer/polymer/polymer-legacy.js';

import '../@polymer/iron-validator-behavior/iron-validator-behavior.js'

/* Validates that the value has a certain minimal length

The validator ignores if the value is empty. This prevents
showing a warning message before the user started to enter
any content.
See Material Design specification:
"Show error text only after user interaction with a field. If the user inputs incorrect data, helper text may transform into error text."
@see https://material.io/guidelines/patterns/errors.html#errors-user-input-errors */

const template= html`
`;

	Polymer({
		is: 'min-length-validator',
		_template:template,
		properties: {
			/**
			 * Minimal length
			 */
			minLength: Number
		},
		behaviors: [
			Polymer.IronValidatorBehavior
		],

		validate: function(value) {
			// Don't trigger warning if no value was entered
			return !value || value.length >= this.minLength;
		}
	});

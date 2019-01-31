import { Polymer, html } from '@polymer/polymer/polymer-legacy.js';


import "../polymer/polymer.html";
import "../iron-icons/iron-icons.html";
import "../paper-input/paper-input.html";
import "../paper-icon-button/paper-icon-button.html";
import "../paper-styles/default-theme.html"



/* A Material Design input field to enter passwords

@demo demo/index.html */

const template= html`
		<style>
			.visibility-icon {
				color: var(--disabled-text-color);
				/** Bottom align visibility button with input box */
				height: 32px;
				width: 32px;
				padding: 0 4px;
				margin-top: -6px;
			}
		</style>

		<paper-input
			id="input"
			type="[[_getType(visible)]]"
			value="{{value}}"
			label="[[label]]"
			name="[[name]]"
			maxlength="[[maxlength]]"
			disabled="[[disabled]]"
			readonly="[[readonly]]"
			required="[[required]]"
			autofocus="[[autofocus]]"
			auto-validate="[[autoValidate]]"
			allowed-pattern="[[allowedPattern]]"
			invalid="{{invalid}}"
			validator="[[validator]]"
			error-message="[[errorMessage]]"
			char-counter="[[charCounter]]">
			<paper-icon-button
				slot="suffix"
				icon="[[_getIcon(visible)]]"
				on-tap="_toggleVisible"
				class="visibility-icon"
				tabindex="-1"
				alt="[[alt]]"
			></paper-icon-button>
		</paper-input>

		`;

	Polymer({
        is: 'paper-password-input',
        _template:template,
		properties: {
			/**
			 * True if the content of the password field is visible
			 */
			visible: {
				type: Boolean,
				value: false
			},

			value: {
				type: String,
				notify: true
			},
			invalid: {
				type: Boolean,
				notify: true
			},
			label: String,
			name: String,
			disabled: Boolean,
			required: Boolean,
			readonly: Boolean,
			autofocus: Boolean,
			autoValidate: Boolean,
			validator: String,
			errorMessage: String,
			charCounter: Boolean,
			maxlength: Number,
			allowedPattern: String,
			alt: String,
		},

		validate: function() {
			return this.$.input.validate();
		},

		_getIcon: function(visible) {
			return visible ? 'icons:visibility' : 'icons:visibility-off';
		},
		_getType: function(visible) {
			return visible ? '' : 'password';
		},
		_toggleVisible: function() {
			this.visible = !this.visible;
		},
	});


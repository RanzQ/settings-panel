/**
 * @module prama/theme/control
 *
 * Control-panel replica
 */
const px = require('add-px-to-style');
const fonts = require('google-fonts');
const color = require('tinycolor2');
const scopeCss = require('scope-css');
const lerp = require('interpolation-arrays');
const none = require('./none');

module.exports = control;


control.palette = ['#292929', '#e7e7e7'];

control.fontSize = '12px';
control.fontFamily = '"Space Mono", monospace';
control.labelWidth = '33.3%';
control.inputHeight = 1.66666;

fonts.add({
	'Space Mono': true
});


function control (opts) {
	opts = opts || {};
	let fs = opts.fontSize || control.fontSize;
	let font = opts.fontFamily || control.fontFamily;
	let h = opts.inputHeight || control.inputHeight;
	let labelWidth = opts.labelWidth || none.labelWidth;

	let palette = (opts.palette || control.palette).map(v => color(v).toRgb());
	let pick = lerp(palette);
	let white = color(pick(0)).toString();
	let light = color(pick(.1)).toString();
	let gray = color(pick(.55)).toString();
	let dark = color(pick(.75)).toString();
	let black = color(pick(1)).toString();

	//none theme defines sizes, the rest (ours) is up to style
	return none({
		fontSize: fs,
		fontFamily: font,
		inputHeight: h,
		labelWidth: labelWidth,
	}) + `
	:host {
		background: ${white};
		font-family: ${font};
		font-size: ${px('font-size',fs)};
		color: ${gray};
	}

	.settings-panel-title {
		text-transform: uppercase;
		font-size: 1.25em;
		letter-spacing: .15ex;
	}

	.settings-panel-label {
		color: ${black};
	}

	/** Text */
	.settings-panel-text,
	.settings-panel-textarea {
		padding-left: ${h/4}em;
		border: none;
		font-family: inherit;
		background: ${light};
		color: inherit;
		border-radius: 0;
	}
	.settings-panel-text:focus,
	.settings-panel-textarea:focus {
		outline: none;
		color: ${dark};
	}


	/** Range */
	.settings-panel-range {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background: ${light};
		width: 80%;
		border-radius: 0;
	}
	.settings-panel-range:focus {
		outline: none;
	}
	.settings-panel-range::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: ${h}em;
		width: ${h/2}em;
		background: ${gray};
		border: 0;
		margin-top: 0px;
	}
	.settings-panel-range::-moz-range-track {
		-moz-appearance: none;
		background: none;
	}
	.settings-panel-range::-moz-range-thumb {
		-moz-appearance: none;
		background: ${gray};
		border: none;
		border-radius: 0px;
		height: ${h}em;
		width: ${h/2}em;
	}
	.settings-panel-range::-ms-track {
		background: none;
		border: none;
		outline: none;
		color: transparent;
	}
	.settings-panel-range::-ms-fill-lower {
		background: none;
	}
	.settings-panel-range::-ms-fill-upper {
		background: none;
	}
	.settings-panel-range::-ms-thumb {
		border-radius: 0px;
		border: 0;
		background: ${gray};
		width: ${h/2}em;
		height: ${h}em;
	}
	.settings-panel-range:focus::-ms-fill-lower {
		background: none;
		outline: none;
	}
	.settings-panel-range:focus::-ms-fill-upper {
		background: none;
		outline: none;
	}


	/** Interval */
	.settings-panel-interval-handle {
		background: ${gray};
	}
	.settings-panel-interval {
		background: ${light};
		position: relative;
		width: 60%;
	}

	/** Values */
	.settings-panel-value {
		background: ${light};
		margin-left: ${h/4}em;
		width: calc(20% - ${h/4}em);
		padding-left: ${h/4}em;
	}
	.settings-panel-value:first-child {
		margin-left: 0;
		margin-right: ${h/4}em;
	}
	.settings-panel-value:focus {
		color: ${dark};
	}


	/** Select */
	.settings-panel-select {
		font-family: inherit;
		background: ${light};
		color: inherit;
		padding-left: ${h/4}em;
		border-radius: 0;
		outline: none;
		border: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		-o-appearance:none;
		appearance:none;
	}
	.settings-panel-select:focus {
		color: ${dark};
	}
	.settings-panel-select::-ms-expand {
		display: none;
	}
	.settings-panel-select-triangle {
		display: block;
	}


	/** Checkbox */
	.settings-panel-checkbox {
		display: none;
	}
	.settings-panel-checkbox-label {
		position: relative;
		display: block;
		margin-top: ${h*.075}em;
		width: ${h*.85}em;
		height: ${h*.85}em;
		margin-bottom: ${h*.075}em;
		background: ${light};
	}
	.settings-panel-checkbox:checked + .settings-panel-checkbox-label {
		background: ${gray};
		box-shadow: inset 0 0 0 ${h*.2}em ${light};
	}


	/** Color */
	.settings-panel-color {
		width: calc(20% - ${h/4}em);
		margin-right: ${h/4}em;
	}
	.settings-panel-color-value {
		border: none;
		padding-left: ${h/4}em;
		width: 80%;
		margin-left: 20%;
		font-family: inherit;
		background: ${light};
		color: inherit;
		border-radius: 0;
	}
	.settings-panel-color-value:focus {
		outline: none;
		color: ${dark};
	}


	/** Button */
	.settings-panel-button {
		color: ${black};
		background: ${light};
		text-align: center;
		border: none;
	}
	.settings-panel-button:focus {
		outline: none;
	}
	.settings-panel-button:hover {
		background: ${gray};
	}
	.settings-panel-button:active {
		background: ${dark};
	}


	/** Switch style */
	.settings-panel-switch {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: none;
		margin: 0;
		border-radius: 0;
		padding: 0;
		height: auto;
		background: none;
		vertical-align: top;
		border: none;
		position: relative;
	}
	.settings-panel-switch-input {
		display: none;
	}
	.settings-panel-switch-label {
		position: relative;
		padding: 0 ${h/2}em;
		margin: 0;
		z-index: 2;
		float: left;
		text-align: center;
	}
	.settings-panel-switch-input:checked + .settings-panel-switch-label {
		background: ${light};
		color: ${black};
	}

	/** Decorations */
	::-webkit-input-placeholder {
		color: ${gray};
	}
	::-moz-placeholder {
		color: ${gray};
	}
	:-ms-input-placeholder {
		color: ${gray};
	}
	:-moz-placeholder {
		color: ${gray};
	}
	::-moz-selection {
		color: ${white};
		background: ${dark};
	}
	::selection {
		color: ${black};
		background: ${white};
	}
	:host hr {
		margin: ${h/4}em ${h/8}em;
		color: ${light}
	}
`};
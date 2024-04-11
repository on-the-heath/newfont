

function applyFontStyle($target, style) {
	const { fontSize, fontWeight, lineHeight, letterSpacing, color } = style;
	console.log(color);
	const isBig = parseInt(fontSize) > 40;
	const family = isBig ? 'KakaoBig' : 'KakaoSmall';
	let calculatedWeight = 400;
	let fontColor = '#fff';
	let backgroundColor = '#000';

	switch (fontWeight) {
		case 'lighter':
			calculatedWeight = isBig ? 400 : 300;
			break;
		case 'bolder':
			calculatedWeight = isBig ? 800 : 700;
			break;
		default:
			calculatedWeight = isBig ? 700 : 400;
	}
	if (color === 'white') {
		fontColor = '#000';
		backgroundColor = '#fff';
	}
	$target.style.fontFamily = family;
	$target.style.fontSize = fontSize;
	$target.style.fontWeight = calculatedWeight;
	$target.style.lineHeight = lineHeight;
	$target.style.letterSpacing = letterSpacing;
	$target.style.color = fontColor;
	$target.style.backgroundColor = backgroundColor;
}

function initFontStyleApplyEvent($target, $fontSize, $fontWeight, $lineHeight, $letterSpacing, $color) {
	$fontSize.addEventListener('change', event => {
		editorStyle.fontSize = event.currentTarget.value;
		applyFontStyle($target, editorStyle);
	});
	$fontWeight.addEventListener('change', event => {
		editorStyle.fontWeight = event.currentTarget.value;
		applyFontStyle($target, editorStyle);
	});
	$lineHeight.addEventListener('change', event => {
		editorStyle.lineHeight = event.currentTarget.value;
		applyFontStyle($target, editorStyle);
	});
	$letterSpacing.addEventListener('change', event => {
		editorStyle.letterSpacing = event.currentTarget.value;
		applyFontStyle($target, editorStyle);
	});
	$color.addEventListener('change', event => {
		editorStyle.color = event.currentTarget.value;
		applyFontStyle($target, editorStyle);
	});
}

const $editorText = document.querySelector('#editorText');
const $fontSize = document.querySelector('#editorFontSize');
const $fontWeight = document.querySelector('#editorFontWeight');
const $lineHeight = document.querySelector('#editorLineHeight');
const $letterSpacing = document.querySelector('#editorLetterSpacing');
const $color = document.querySelector('#editorColor');

let editorStyle = {
	fontSize: $fontSize.value ?? '36px',
	fontWeight: $fontWeight.value ?? 2,
	lineHeight: $lineHeight.value ?? 1,
	letterSpacing: $letterSpacing.value ?? 0,
	color: $color.value ?? 'black',
};

initFontStyleApplyEvent($editorText, $fontSize, $fontWeight, $lineHeight, $letterSpacing, $color);

applyFontStyle($editorText, editorStyle);

<script>
  import katex from 'katex';
  import { onMount } from 'svelte';

  export let displayMode = false;

  let wrapper;
  let content = '';

  onMount(() => {
    content = wrapper.textContent;
  });
</script>

<style global>
  @font-face {
    font-family: 'KaTeX_Main';
    src:
      url(https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/fonts/KaTeX_Main-Regular.woff2) format('woff2'),
      url(https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/fonts/KaTeX_Main-Regular.woff) format('woff'),
      url(https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/fonts/KaTeX_Main-Regular.ttf) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'KaTeX_Math';
    src:
      url(https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/fonts/KaTeX_Math-Italic.woff2) format('woff2'),
      url(https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/fonts/KaTeX_Math-Italic.woff) format('woff'),
      url(https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/fonts/KaTeX_Math-Italic.ttf) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  .katex {
	font: normal 1.21em KaTeX_Main, Times New Roman, serif;
	line-height: 1.2;
	text-indent: 0;
	text-rendering: auto;
	border-color: currentColor;
	* {
		-ms-high-contrast-adjust: none !important;
	}
	.katex-mathml {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		padding: 0;
		border: 0;
		height: 1px;
		width: 1px;
		overflow: hidden;
	}
	.katex-html {
		>.newline {
			display: block;
		}
	}
	.base {
		position: relative;
		display: inline-block;
		white-space: nowrap;
		width: min-content;
	}
	.strut {
		display: inline-block;
	}
	.textbf {
		font-weight: bold;
	}
	.textit {
		font-style: italic;
	}
	.textrm {
		font-family: KaTeX_Main;
	}
	.mathnormal {
		font-family: KaTeX_Math;
		font-style: italic;
	}
	.mathit {
		font-family: KaTeX_Main;
		font-style: italic;
	}
	.mathrm {
		font-style: normal;
	}
	.mathbf {
		font-family: KaTeX_Main;
		font-weight: bold;
	}
	.boldsymbol {
		font-family: KaTeX_Math;
		font-weight: bold;
		font-style: italic;
	}
	.mainrm {
		font-family: KaTeX_Main;
		font-style: normal;
	}
	.vlist-t {
		display: inline-table;
		table-layout: fixed;
		border-collapse: collapse;
	}
	.vlist-r {
		display: table-row;
	}
	.vlist {
		display: table-cell;
		vertical-align: bottom;
		position: relative;
		>span {
			display: block;
			height: 0;
			position: relative;
			>span {
				display: inline-block;
			}
			>.pstrut {
				overflow: hidden;
				width: 0;
			}
		}
	}
	.vlist-t2 {
		margin-right: -2px;
	}
	.vlist-s {
		display: table-cell;
		vertical-align: bottom;
		font-size: 1px;
		width: 2px;
		min-width: 2px;
	}
	.vbox {
		display: -ms-inline-flexbox;
		display: inline-flex;
		-ms-flex-direction: column;
		flex-direction: column;
		align-items: baseline;
	}
	.hbox {
		display: -ms-inline-flexbox;
		display: inline-flex;
		-ms-flex-direction: row;
		flex-direction: row;
		width: 100%;
	}
	.thinbox {
		display: inline-flex;
		flex-direction: row;
		width: 0;
		max-width: 0;
	}
	.msupsub {
		text-align: left;
	}
	.mfrac {
		>span {
			>span {
				text-align: center;
			}
		}
		.frac-line {
			display: inline-block;
			width: 100%;
			border-bottom-style: solid;
			min-height: 1px;
		}
	}
	.overline {
		.overline-line {
			min-height: 1px;
			display: inline-block;
			width: 100%;
			border-bottom-style: solid;
		}
	}
	.underline {
		.underline-line {
			min-height: 1px;
			display: inline-block;
			width: 100%;
			border-bottom-style: solid;
		}
	}
	.hline {
		min-height: 1px;
		display: inline-block;
		width: 100%;
		border-bottom-style: solid;
	}
	.hdashline {
		min-height: 1px;
		display: inline-block;
		width: 100%;
		border-bottom-style: dashed;
	}
	.rule {
		min-height: 1px;
		display: inline-block;
		border: solid 0;
		position: relative;
	}
	.mspace {
		display: inline-block;
	}
	.llap {
		width: 0;
		position: relative;
		>.inner {
			position: absolute;
			right: 0;
		}
		>.fix {
			display: inline-block;
		}
	}
	.rlap {
		width: 0;
		position: relative;
		>.inner {
			position: absolute;
			left: 0;
		}
		>.fix {
			display: inline-block;
		}
	}
	.clap {
		width: 0;
		position: relative;
		>.inner {
			position: absolute;
			left: 0;
			>span {
				margin-left: -50%;
				margin-right: 50%;
			}
		}
		>.fix {
			display: inline-block;
		}
	}
	.sqrt {
		>.root {
			margin-left: 0.27777778em;
			margin-right: -0.55555556em;
		}
	}
	.sizing.reset-size1.size1 {
		font-size: 1em;
	}
	.fontsize-ensurer.reset-size1.size1 {
		font-size: 1em;
	}
	.sizing.reset-size1.size2 {
		font-size: 1.2em;
	}
	.fontsize-ensurer.reset-size1.size2 {
		font-size: 1.2em;
	}
	.sizing.reset-size1.size3 {
		font-size: 1.4em;
	}
	.fontsize-ensurer.reset-size1.size3 {
		font-size: 1.4em;
	}
	.sizing.reset-size1.size4 {
		font-size: 1.6em;
	}
	.fontsize-ensurer.reset-size1.size4 {
		font-size: 1.6em;
	}
	.sizing.reset-size1.size5 {
		font-size: 1.8em;
	}
	.fontsize-ensurer.reset-size1.size5 {
		font-size: 1.8em;
	}
	.sizing.reset-size1.size6 {
		font-size: 2em;
	}
	.fontsize-ensurer.reset-size1.size6 {
		font-size: 2em;
	}
	.sizing.reset-size1.size7 {
		font-size: 2.4em;
	}
	.fontsize-ensurer.reset-size1.size7 {
		font-size: 2.4em;
	}
	.sizing.reset-size1.size8 {
		font-size: 2.88em;
	}
	.fontsize-ensurer.reset-size1.size8 {
		font-size: 2.88em;
	}
	.sizing.reset-size1.size9 {
		font-size: 3.456em;
	}
	.fontsize-ensurer.reset-size1.size9 {
		font-size: 3.456em;
	}
	.sizing.reset-size1.size10 {
		font-size: 4.148em;
	}
	.fontsize-ensurer.reset-size1.size10 {
		font-size: 4.148em;
	}
	.sizing.reset-size1.size11 {
		font-size: 4.976em;
	}
	.fontsize-ensurer.reset-size1.size11 {
		font-size: 4.976em;
	}
	.sizing.reset-size2.size1 {
		font-size: 0.83333333em;
	}
	.fontsize-ensurer.reset-size2.size1 {
		font-size: 0.83333333em;
	}
	.sizing.reset-size2.size2 {
		font-size: 1em;
	}
	.fontsize-ensurer.reset-size2.size2 {
		font-size: 1em;
	}
	.sizing.reset-size2.size3 {
		font-size: 1.16666667em;
	}
	.fontsize-ensurer.reset-size2.size3 {
		font-size: 1.16666667em;
	}
	.sizing.reset-size2.size4 {
		font-size: 1.33333333em;
	}
	.fontsize-ensurer.reset-size2.size4 {
		font-size: 1.33333333em;
	}
	.sizing.reset-size2.size5 {
		font-size: 1.5em;
	}
	.fontsize-ensurer.reset-size2.size5 {
		font-size: 1.5em;
	}
	.sizing.reset-size2.size6 {
		font-size: 1.66666667em;
	}
	.fontsize-ensurer.reset-size2.size6 {
		font-size: 1.66666667em;
	}
	.sizing.reset-size2.size7 {
		font-size: 2em;
	}
	.fontsize-ensurer.reset-size2.size7 {
		font-size: 2em;
	}
	.sizing.reset-size2.size8 {
		font-size: 2.4em;
	}
	.fontsize-ensurer.reset-size2.size8 {
		font-size: 2.4em;
	}
	.sizing.reset-size2.size9 {
		font-size: 2.88em;
	}
	.fontsize-ensurer.reset-size2.size9 {
		font-size: 2.88em;
	}
	.sizing.reset-size2.size10 {
		font-size: 3.45666667em;
	}
	.fontsize-ensurer.reset-size2.size10 {
		font-size: 3.45666667em;
	}
	.sizing.reset-size2.size11 {
		font-size: 4.14666667em;
	}
	.fontsize-ensurer.reset-size2.size11 {
		font-size: 4.14666667em;
	}
	.sizing.reset-size3.size1 {
		font-size: 0.71428571em;
	}
	.fontsize-ensurer.reset-size3.size1 {
		font-size: 0.71428571em;
	}
	.sizing.reset-size3.size2 {
		font-size: 0.85714286em;
	}
	.fontsize-ensurer.reset-size3.size2 {
		font-size: 0.85714286em;
	}
	.sizing.reset-size3.size3 {
		font-size: 1em;
	}
	.fontsize-ensurer.reset-size3.size3 {
		font-size: 1em;
	}
	.sizing.reset-size3.size4 {
		font-size: 1.14285714em;
	}
	.fontsize-ensurer.reset-size3.size4 {
		font-size: 1.14285714em;
	}
	.sizing.reset-size3.size5 {
		font-size: 1.28571429em;
	}
	.fontsize-ensurer.reset-size3.size5 {
		font-size: 1.28571429em;
	}
	.sizing.reset-size3.size6 {
		font-size: 1.42857143em;
	}
	.fontsize-ensurer.reset-size3.size6 {
		font-size: 1.42857143em;
	}
	.sizing.reset-size3.size7 {
		font-size: 1.71428571em;
	}
	.fontsize-ensurer.reset-size3.size7 {
		font-size: 1.71428571em;
	}
	.sizing.reset-size3.size8 {
		font-size: 2.05714286em;
	}
	.fontsize-ensurer.reset-size3.size8 {
		font-size: 2.05714286em;
	}
	.sizing.reset-size3.size9 {
		font-size: 2.46857143em;
	}
	.fontsize-ensurer.reset-size3.size9 {
		font-size: 2.46857143em;
	}
	.sizing.reset-size3.size10 {
		font-size: 2.96285714em;
	}
	.fontsize-ensurer.reset-size3.size10 {
		font-size: 2.96285714em;
	}
	.sizing.reset-size3.size11 {
		font-size: 3.55428571em;
	}
	.fontsize-ensurer.reset-size3.size11 {
		font-size: 3.55428571em;
	}
	.sizing.reset-size4.size1 {
		font-size: 0.625em;
	}
	.fontsize-ensurer.reset-size4.size1 {
		font-size: 0.625em;
	}
	.sizing.reset-size4.size2 {
		font-size: 0.75em;
	}
	.fontsize-ensurer.reset-size4.size2 {
		font-size: 0.75em;
	}
	.sizing.reset-size4.size3 {
		font-size: 0.875em;
	}
	.fontsize-ensurer.reset-size4.size3 {
		font-size: 0.875em;
	}
	.sizing.reset-size4.size4 {
		font-size: 1em;
	}
	.fontsize-ensurer.reset-size4.size4 {
		font-size: 1em;
	}
	.sizing.reset-size4.size5 {
		font-size: 1.125em;
	}
	.fontsize-ensurer.reset-size4.size5 {
		font-size: 1.125em;
	}
	.sizing.reset-size4.size6 {
		font-size: 1.25em;
	}
	.fontsize-ensurer.reset-size4.size6 {
		font-size: 1.25em;
	}
	.sizing.reset-size4.size7 {
		font-size: 1.5em;
	}
	.fontsize-ensurer.reset-size4.size7 {
		font-size: 1.5em;
	}
	.sizing.reset-size4.size8 {
		font-size: 1.8em;
	}
	.fontsize-ensurer.reset-size4.size8 {
		font-size: 1.8em;
	}
	.sizing.reset-size4.size9 {
		font-size: 2.16em;
	}
	.fontsize-ensurer.reset-size4.size9 {
		font-size: 2.16em;
	}
	.sizing.reset-size4.size10 {
		font-size: 2.5925em;
	}
	.fontsize-ensurer.reset-size4.size10 {
		font-size: 2.5925em;
	}
	.sizing.reset-size4.size11 {
		font-size: 3.11em;
	}
	.fontsize-ensurer.reset-size4.size11 {
		font-size: 3.11em;
	}
	.sizing.reset-size5.size1 {
		font-size: 0.55555556em;
	}
	.fontsize-ensurer.reset-size5.size1 {
		font-size: 0.55555556em;
	}
	.sizing.reset-size5.size2 {
		font-size: 0.66666667em;
	}
	.fontsize-ensurer.reset-size5.size2 {
		font-size: 0.66666667em;
	}
	.sizing.reset-size5.size3 {
		font-size: 0.77777778em;
	}
	.fontsize-ensurer.reset-size5.size3 {
		font-size: 0.77777778em;
	}
	.sizing.reset-size5.size4 {
		font-size: 0.88888889em;
	}
	.fontsize-ensurer.reset-size5.size4 {
		font-size: 0.88888889em;
	}
	.sizing.reset-size5.size5 {
		font-size: 1em;
	}
	.fontsize-ensurer.reset-size5.size5 {
		font-size: 1em;
	}
	.sizing.reset-size5.size6 {
		font-size: 1.11111111em;
	}
	.fontsize-ensurer.reset-size5.size6 {
		font-size: 1.11111111em;
	}
	.sizing.reset-size5.size7 {
		font-size: 1.33333333em;
	}
	.fontsize-ensurer.reset-size5.size7 {
		font-size: 1.33333333em;
	}
	.sizing.reset-size5.size8 {
		font-size: 1.6em;
	}
	.fontsize-ensurer.reset-size5.size8 {
		font-size: 1.6em;
	}
	.sizing.reset-size5.size9 {
		font-size: 1.92em;
	}
	.fontsize-ensurer.reset-size5.size9 {
		font-size: 1.92em;
	}
	.sizing.reset-size5.size10 {
		font-size: 2.30444444em;
	}
	.fontsize-ensurer.reset-size5.size10 {
		font-size: 2.30444444em;
	}
	.sizing.reset-size5.size11 {
		font-size: 2.76444444em;
	}
	.fontsize-ensurer.reset-size5.size11 {
		font-size: 2.76444444em;
	}
	.sizing.reset-size6.size1 {
		font-size: 0.5em;
	}
	.fontsize-ensurer.reset-size6.size1 {
		font-size: 0.5em;
	}
	.sizing.reset-size6.size2 {
		font-size: 0.6em;
	}
	.fontsize-ensurer.reset-size6.size2 {
		font-size: 0.6em;
	}
	.sizing.reset-size6.size3 {
		font-size: 0.7em;
	}
	.fontsize-ensurer.reset-size6.size3 {
		font-size: 0.7em;
	}
	.sizing.reset-size6.size4 {
		font-size: 0.8em;
	}
	.fontsize-ensurer.reset-size6.size4 {
		font-size: 0.8em;
	}
	.sizing.reset-size6.size5 {
		font-size: 0.9em;
	}
	.fontsize-ensurer.reset-size6.size5 {
		font-size: 0.9em;
	}
	.sizing.reset-size6.size6 {
		font-size: 1em;
	}
	.fontsize-ensurer.reset-size6.size6 {
		font-size: 1em;
	}
	.sizing.reset-size6.size7 {
		font-size: 1.2em;
	}
	.fontsize-ensurer.reset-size6.size7 {
		font-size: 1.2em;
	}
	.sizing.reset-size6.size8 {
		font-size: 1.44em;
	}
	.fontsize-ensurer.reset-size6.size8 {
		font-size: 1.44em;
	}
	.sizing.reset-size6.size9 {
		font-size: 1.728em;
	}
	.fontsize-ensurer.reset-size6.size9 {
		font-size: 1.728em;
	}
	.sizing.reset-size6.size10 {
		font-size: 2.074em;
	}
	.fontsize-ensurer.reset-size6.size10 {
		font-size: 2.074em;
	}
	.sizing.reset-size6.size11 {
		font-size: 2.488em;
	}
	.fontsize-ensurer.reset-size6.size11 {
		font-size: 2.488em;
	}
	.sizing.reset-size7.size1 {
		font-size: 0.41666667em;
	}
	.fontsize-ensurer.reset-size7.size1 {
		font-size: 0.41666667em;
	}
	.sizing.reset-size7.size2 {
		font-size: 0.5em;
	}
	.fontsize-ensurer.reset-size7.size2 {
		font-size: 0.5em;
	}
	.sizing.reset-size7.size3 {
		font-size: 0.58333333em;
	}
	.fontsize-ensurer.reset-size7.size3 {
		font-size: 0.58333333em;
	}
	.sizing.reset-size7.size4 {
		font-size: 0.66666667em;
	}
	.fontsize-ensurer.reset-size7.size4 {
		font-size: 0.66666667em;
	}
	.sizing.reset-size7.size5 {
		font-size: 0.75em;
	}
	.fontsize-ensurer.reset-size7.size5 {
		font-size: 0.75em;
	}
	.sizing.reset-size7.size6 {
		font-size: 0.83333333em;
	}
	.fontsize-ensurer.reset-size7.size6 {
		font-size: 0.83333333em;
	}
	.sizing.reset-size7.size7 {
		font-size: 1em;
	}
	.fontsize-ensurer.reset-size7.size7 {
		font-size: 1em;
	}
	.sizing.reset-size7.size8 {
		font-size: 1.2em;
	}
	.fontsize-ensurer.reset-size7.size8 {
		font-size: 1.2em;
	}
	.sizing.reset-size7.size9 {
		font-size: 1.44em;
	}
	.fontsize-ensurer.reset-size7.size9 {
		font-size: 1.44em;
	}
	.sizing.reset-size7.size10 {
		font-size: 1.72833333em;
	}
	.fontsize-ensurer.reset-size7.size10 {
		font-size: 1.72833333em;
	}
	.sizing.reset-size7.size11 {
		font-size: 2.07333333em;
	}
	.fontsize-ensurer.reset-size7.size11 {
		font-size: 2.07333333em;
	}
	.sizing.reset-size8.size1 {
		font-size: 0.34722222em;
	}
	.fontsize-ensurer.reset-size8.size1 {
		font-size: 0.34722222em;
	}
	.sizing.reset-size8.size2 {
		font-size: 0.41666667em;
	}
	.fontsize-ensurer.reset-size8.size2 {
		font-size: 0.41666667em;
	}
	.sizing.reset-size8.size3 {
		font-size: 0.48611111em;
	}
	.fontsize-ensurer.reset-size8.size3 {
		font-size: 0.48611111em;
	}
	.sizing.reset-size8.size4 {
		font-size: 0.55555556em;
	}
	.fontsize-ensurer.reset-size8.size4 {
		font-size: 0.55555556em;
	}
	.sizing.reset-size8.size5 {
		font-size: 0.625em;
	}
	.fontsize-ensurer.reset-size8.size5 {
		font-size: 0.625em;
	}
	.sizing.reset-size8.size6 {
		font-size: 0.69444444em;
	}
	.fontsize-ensurer.reset-size8.size6 {
		font-size: 0.69444444em;
	}
	.sizing.reset-size8.size7 {
		font-size: 0.83333333em;
	}
	.fontsize-ensurer.reset-size8.size7 {
		font-size: 0.83333333em;
	}
	.sizing.reset-size8.size8 {
		font-size: 1em;
	}
	.fontsize-ensurer.reset-size8.size8 {
		font-size: 1em;
	}
	.sizing.reset-size8.size9 {
		font-size: 1.2em;
	}
	.fontsize-ensurer.reset-size8.size9 {
		font-size: 1.2em;
	}
	.sizing.reset-size8.size10 {
		font-size: 1.44027778em;
	}
	.fontsize-ensurer.reset-size8.size10 {
		font-size: 1.44027778em;
	}
	.sizing.reset-size8.size11 {
		font-size: 1.72777778em;
	}
	.fontsize-ensurer.reset-size8.size11 {
		font-size: 1.72777778em;
	}
	.sizing.reset-size9.size1 {
		font-size: 0.28935185em;
	}
	.fontsize-ensurer.reset-size9.size1 {
		font-size: 0.28935185em;
	}
	.sizing.reset-size9.size2 {
		font-size: 0.34722222em;
	}
	.fontsize-ensurer.reset-size9.size2 {
		font-size: 0.34722222em;
	}
	.sizing.reset-size9.size3 {
		font-size: 0.40509259em;
	}
	.fontsize-ensurer.reset-size9.size3 {
		font-size: 0.40509259em;
	}
	.sizing.reset-size9.size4 {
		font-size: 0.46296296em;
	}
	.fontsize-ensurer.reset-size9.size4 {
		font-size: 0.46296296em;
	}
	.sizing.reset-size9.size5 {
		font-size: 0.52083333em;
	}
	.fontsize-ensurer.reset-size9.size5 {
		font-size: 0.52083333em;
	}
	.sizing.reset-size9.size6 {
		font-size: 0.5787037em;
	}
	.fontsize-ensurer.reset-size9.size6 {
		font-size: 0.5787037em;
	}
	.sizing.reset-size9.size7 {
		font-size: 0.69444444em;
	}
	.fontsize-ensurer.reset-size9.size7 {
		font-size: 0.69444444em;
	}
	.sizing.reset-size9.size8 {
		font-size: 0.83333333em;
	}
	.fontsize-ensurer.reset-size9.size8 {
		font-size: 0.83333333em;
	}
	.sizing.reset-size9.size9 {
		font-size: 1em;
	}
	.fontsize-ensurer.reset-size9.size9 {
		font-size: 1em;
	}
	.sizing.reset-size9.size10 {
		font-size: 1.20023148em;
	}
	.fontsize-ensurer.reset-size9.size10 {
		font-size: 1.20023148em;
	}
	.sizing.reset-size9.size11 {
		font-size: 1.43981481em;
	}
	.fontsize-ensurer.reset-size9.size11 {
		font-size: 1.43981481em;
	}
	.sizing.reset-size10.size1 {
		font-size: 0.24108004em;
	}
	.fontsize-ensurer.reset-size10.size1 {
		font-size: 0.24108004em;
	}
	.sizing.reset-size10.size2 {
		font-size: 0.28929605em;
	}
	.fontsize-ensurer.reset-size10.size2 {
		font-size: 0.28929605em;
	}
	.sizing.reset-size10.size3 {
		font-size: 0.33751205em;
	}
	.fontsize-ensurer.reset-size10.size3 {
		font-size: 0.33751205em;
	}
	.sizing.reset-size10.size4 {
		font-size: 0.38572806em;
	}
	.fontsize-ensurer.reset-size10.size4 {
		font-size: 0.38572806em;
	}
	.sizing.reset-size10.size5 {
		font-size: 0.43394407em;
	}
	.fontsize-ensurer.reset-size10.size5 {
		font-size: 0.43394407em;
	}
	.sizing.reset-size10.size6 {
		font-size: 0.48216008em;
	}
	.fontsize-ensurer.reset-size10.size6 {
		font-size: 0.48216008em;
	}
	.sizing.reset-size10.size7 {
		font-size: 0.57859209em;
	}
	.fontsize-ensurer.reset-size10.size7 {
		font-size: 0.57859209em;
	}
	.sizing.reset-size10.size8 {
		font-size: 0.69431051em;
	}
	.fontsize-ensurer.reset-size10.size8 {
		font-size: 0.69431051em;
	}
	.sizing.reset-size10.size9 {
		font-size: 0.83317261em;
	}
	.fontsize-ensurer.reset-size10.size9 {
		font-size: 0.83317261em;
	}
	.sizing.reset-size10.size10 {
		font-size: 1em;
	}
	.fontsize-ensurer.reset-size10.size10 {
		font-size: 1em;
	}
	.sizing.reset-size10.size11 {
		font-size: 1.19961427em;
	}
	.fontsize-ensurer.reset-size10.size11 {
		font-size: 1.19961427em;
	}
	.sizing.reset-size11.size1 {
		font-size: 0.20096463em;
	}
	.fontsize-ensurer.reset-size11.size1 {
		font-size: 0.20096463em;
	}
	.sizing.reset-size11.size2 {
		font-size: 0.24115756em;
	}
	.fontsize-ensurer.reset-size11.size2 {
		font-size: 0.24115756em;
	}
	.sizing.reset-size11.size3 {
		font-size: 0.28135048em;
	}
	.fontsize-ensurer.reset-size11.size3 {
		font-size: 0.28135048em;
	}
	.sizing.reset-size11.size4 {
		font-size: 0.32154341em;
	}
	.fontsize-ensurer.reset-size11.size4 {
		font-size: 0.32154341em;
	}
	.sizing.reset-size11.size5 {
		font-size: 0.36173633em;
	}
	.fontsize-ensurer.reset-size11.size5 {
		font-size: 0.36173633em;
	}
	.sizing.reset-size11.size6 {
		font-size: 0.40192926em;
	}
	.fontsize-ensurer.reset-size11.size6 {
		font-size: 0.40192926em;
	}
	.sizing.reset-size11.size7 {
		font-size: 0.48231511em;
	}
	.fontsize-ensurer.reset-size11.size7 {
		font-size: 0.48231511em;
	}
	.sizing.reset-size11.size8 {
		font-size: 0.57877814em;
	}
	.fontsize-ensurer.reset-size11.size8 {
		font-size: 0.57877814em;
	}
	.sizing.reset-size11.size9 {
		font-size: 0.69453376em;
	}
	.fontsize-ensurer.reset-size11.size9 {
		font-size: 0.69453376em;
	}
	.sizing.reset-size11.size10 {
		font-size: 0.83360129em;
	}
	.fontsize-ensurer.reset-size11.size10 {
		font-size: 0.83360129em;
	}
	.sizing.reset-size11.size11 {
		font-size: 1em;
	}
	.fontsize-ensurer.reset-size11.size11 {
		font-size: 1em;
	}
	.nulldelimiter {
		display: inline-block;
		width: 0.12em;
	}
	.delimcenter {
		position: relative;
	}
	.op-symbol {
		position: relative;
	}
	.op-limits {
		>.vlist-t {
			text-align: center;
		}
	}
	.accent {
		>.vlist-t {
			text-align: center;
		}
		.accent-body {
			position: relative;
			&:not(.accent-full) {
				width: 0;
			}
		}
	}
	.overlay {
		display: block;
	}
	.mtable {
		.vertical-separator {
			display: inline-block;
			min-width: 1px;
		}
		.arraycolsep {
			display: inline-block;
		}
		.col-align-c {
			>.vlist-t {
				text-align: center;
			}
		}
		.col-align-l {
			>.vlist-t {
				text-align: left;
			}
		}
		.col-align-r {
			>.vlist-t {
				text-align: right;
			}
		}
	}
	.svg-align {
		text-align: left;
	}
	svg {
		display: block;
		position: absolute;
		width: 100%;
		height: inherit;
		fill: currentColor;
		stroke: currentColor;
		fill-rule: nonzero;
		fill-opacity: 1;
		stroke-width: 1;
		stroke-linecap: butt;
		stroke-linejoin: miter;
		stroke-miterlimit: 4;
		stroke-dasharray: none;
		stroke-dashoffset: 0;
		stroke-opacity: 1;
		path {
			stroke: none;
		}
	}
	img {
		border-style: none;
		min-width: 0;
		min-height: 0;
		max-width: none;
		max-height: none;
	}
	.stretchy {
		width: 100%;
		display: block;
		position: relative;
		overflow: hidden;
		&::before {
			content: "";
		}
		&::after {
			content: "";
		}
	}
	.hide-tail {
		width: 100%;
		position: relative;
		overflow: hidden;
	}
	.halfarrow-left {
		position: absolute;
		left: 0;
		width: 50.2%;
		overflow: hidden;
	}
	.halfarrow-right {
		position: absolute;
		right: 0;
		width: 50.2%;
		overflow: hidden;
	}
	.brace-left {
		position: absolute;
		left: 0;
		width: 25.1%;
		overflow: hidden;
	}
	.brace-center {
		position: absolute;
		left: 25%;
		width: 50%;
		overflow: hidden;
	}
	.brace-right {
		position: absolute;
		right: 0;
		width: 25.1%;
		overflow: hidden;
	}
	.x-arrow-pad {
		padding: 0 0.5em;
	}
	.x-arrow {
		text-align: center;
	}
	.mover {
		text-align: center;
	}
	.munder {
		text-align: center;
	}
	.boxpad {
		padding: 0 0.3em 0 0.3em;
	}
	.fbox {
		box-sizing: border-box;
		border: 0.04em solid;
	}
	.fcolorbox {
		box-sizing: border-box;
		border: 0.04em solid;
	}
	.cancel-pad {
		padding: 0 0.2em 0 0.2em;
	}
	.cancel-lap {
		margin-left: -0.2em;
		margin-right: -0.2em;
	}
	.sout {
		border-bottom-style: solid;
		border-bottom-width: 0.08em;
	}
  }
  .katex-display {
      display: block;
      margin: 1em 0;
      text-align: center;
      >.katex {
          display: block;
          text-align: center;
          white-space: nowrap;
          >.katex-html {
              display: block;
              position: relative;
              >.tag {
                  position: absolute;
                  right: 0;
              }
          }
      }
  }
  .katex-display.leqno {
      >.katex {
          >.katex-html {
              >.tag {
                  left: 0;
                  right: auto;
              }
          }
      }
  }
  .katex-display.fleqn {
      >.katex {
          text-align: left;
          padding-left: 2em;
      }
  }
</style>

<span bind:this={wrapper} hidden><slot /></span>

{@html katex.renderToString(content, { displayMode })}


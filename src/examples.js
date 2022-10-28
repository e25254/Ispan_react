import JsxValue from './ex-1026-1/JsxValue';
import Counter from './ex-1025-2/Counter';
import StudentList from './ex-1026-2/StudentList';
import Menu from './ex-1026-menu/Menu';
import Demo from './ex-1026-3/Demo';
import Parent from './ex-1027-1/Parent';
import Parent_PropTypes from './ex-1027-2/Parent';
import ParentFlow from './ex-1027-3/Parent';
import Parent_Flow_Practice from './ex-1027-3_practice/Parent_Flow_Practice';
import InputDemoBox from './ex-1028-1/InputDemoBox';
import Html5Form from './ex-1028-2/Html5Form';
import testArray from './testArray';
import BmiComputer from './HomeWork_1028/BmiComputer';

export const example = [
	{
		name: 'BmiComputer',
		path: './HomeWork_1028',
		component: BmiComputer,
	},
	{
		name: 'testArray',
		path: './',
		component: testArray,
	},
	{
		name: '1028-2 各種可控的表單元件',
		path: './ex-1028-2',
		component: Html5Form,
	},
	{
		name: '1028-1 可控與不可控表單元件',
		path: './ex-1028-1',
		component: InputDemoBox,
	},
	{
		name: '1027-3 Parent_Flow_Practice',
		path: './ex-1027-3_practice',
		component: Parent_Flow_Practice,
	},
	{
		name: '1027-3 三種資料流 ParentFlow',
		path: './ex-1027-3',
		component: ParentFlow,
	},
	{
		name: '1027-2 Paren_PropTypes',
		path: './ex-1027-2',
		component: Parent_PropTypes,
	},
	{
		name: '1027-1 Parent&Child',
		path: './ex-1027-1',
		component: Parent,
	},
	{
		name: '1026-3 Demo',
		path: './ex-1026-3/Demo',
		component: Demo,
	},
	{
		name: 'menu 選單項目點亮(active)特效',
		path: './ex-1026-menu/Menu',
		component: Menu,
	},
	{
		name: '1026-2 學生列表清單 (map-key)',
		path: './ex-1026-2/StudentList',
		component: StudentList,
	},
	{
		name: '1026-1 JSX中的值與表達式',
		path: './ex-1026-1/JsxValue',
		component: JsxValue,
	},
	{
		name: '1025-1 計數器',
		path: './ex-1025-2/Counter',
		component: Counter,
	},
];

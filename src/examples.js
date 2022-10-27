import JsxValue from './ex-1026-1/JsxValue';
import Counter from './ex-1025-2/Counter';
import StudentList from './ex-1026-2/StudentList';
import Menu from './ex-1026-menu/Menu_my';
import Demo from './ex-1026-3/Demo';

export const example = [
	{
		name: '1025-1 計數器',
		path: './ex-1025-2/Counter',
		component: Counter,
	},
	{
		name: '1026-1 JSX中的值與表達式',
		path: './ex-1026-1/JsxValue',
		component: JsxValue,
	},
	{
		name: '1026-2 學生列表清單 (map-key)',
		path: './ex-1026-2/StudentList',
		component: StudentList,
	},
	{
		name: 'menu 選單項目點亮(active)特效',
		path: './ex-1026-menu/Menu',
		component: Menu,
	},
	{
		name: '1026-3 Demo',
		path: './ex-1026-3/Demo',
		component: Demo,
	},
];

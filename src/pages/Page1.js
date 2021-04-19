import { Link, Switch, Redirect } from 'react-router-dom';
import RouteWithSubRoutes from '../utils/RouteWithSubRoutes';

const Page1 = ({ routes }) => {
	const menu = [
		{
			path: '/home/page1/subpage1',
			name: 'Subpage 1',
		},
		{
			path: '/home/page1/subpage2',
			name: 'Subpage 2',
		},
	];

	return (
		<div className='page-main'>
			<div className='navbar'>
				<ul>
					{menu.map((menuItem) => (
						<li key={menuItem.name}>
							<Link to={menuItem.path}>{menuItem.name}</Link>
						</li>
					))}
				</ul>
			</div>

			<Switch>
				<Redirect exact from='/home/page1' to="/home/page1/subpage1"/>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		</div>
	);
};

export default Page1;


import { Link, Switch, Redirect } from 'react-router-dom';
import RouteWithSubRoutes from '../utils/RouteWithSubRoutes';

const Page2 = ({ routes }) => {
	const menu = [
		{
			path: '/home/page2/mainpage1',
			name: 'Mainpage1',
		},
		{
			path: '/home/page2/mainpage2',
			name: 'Mainpage2',
		},
	];
	return 	<div className='page-main'>
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
				<Redirect exact from='/home/page2' to="/home/page2/mainpage1"/>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		</div>;
};

export default Page2;

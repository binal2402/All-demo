import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import NotFound from './pages/auth/NotFound';
import SignIn from './pages/auth/SignIn'
import CreateAccount from './pages/auth/CreateAccount'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import FilmInformation from './pages/auth/FilmInformation'
import Step1 from "./PAF/Components/Step1";
import Step2 from "./PAF/Components/Step2";
import Step3 from "./PAF/Components/Step3";
import Step4 from "./PAF/Components/Step4";
import Step5 from "./PAF/Components/Step5";
import Step6 from "./PAF/Components/Step6";
import Step7 from "./PAF/Components/Step7";
import Step8 from "./PAF/Components/Step8";
import Step9 from "./PAF/Components/Step9";


const Routers = () => {

	return (
		<Switch>
			<PublicRoute exact path={`/`} component={SignIn} />
			<PublicRoute exact path={`/create-account/:projectId?`} component={CreateAccount} />
			<PublicRoute exact path={`/forgot-password`} component={ForgotPassword} />
			<Route exact path={`/reset-password`} component={ResetPassword} />
			<PrivateRoute exact path={`/film-information`} component={FilmInformation} />
			<PrivateRoute exact path={`/step1`} component={Step1} />
			<PrivateRoute exact path={`/step2`} component={Step2} />
			<PrivateRoute exact path={`/step3`} component={Step3} />
			<PrivateRoute exact path={`/Step4`} component={Step4} />
			<PrivateRoute exact path={`/Step5`} component={Step5} />
			<PrivateRoute exact path={`/Step6`} component={Step6} />
			<PrivateRoute exact path={`/Step7`} component={Step7} />
			<PrivateRoute exact path={`/step8`} component={Step8} />
			<PrivateRoute exact path={`/step9`} component={Step9} />

			<Route path="*" component={NotFound} />
		</Switch>
	);

}

export default Routers;

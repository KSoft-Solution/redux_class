import { bindActionCreators } from "redux";
import * as productAction from "../pages/Products/redux/action";
import * as userAction from '../pages/Login/redux/action'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...productAction,
      ...userAction
    },
    dispatch
  );
}

export default mapDispatchToProps;

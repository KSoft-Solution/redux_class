import { bindActionCreators } from "redux";
import * as productAction from "../pages/Products/redux/action";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...productAction,
    },
    dispatch
  );
}

export default mapDispatchToProps;

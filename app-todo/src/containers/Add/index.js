import { connect } from 'react-redux';

import Add from '../../components/Add';
import { addTodo } from '../../store/actions';

const mapStateToDispatch = (dispatch) => {
    return {
        addTodo: (inputValue) => {
            dispatch(addTodo({name: inputValue, done: false}))
        }
    }
}

export default connect(null, mapStateToDispatch)(Add)
import { connect } from 'react-redux';

import Filter from '../../components/Filter';
import { filters, setFilter } from '../../store/actions';

const mapStateToDispatch = (dispatch) => {
    console.log(dispatch);
    return {
        manageClick: (e) => {
            if(e.target.id === 'all') {
                dispatch(setFilter(filters.SHOW_ALL))
            }
            else if(e.target.id === 'done') {
                dispatch(setFilter(filters.SHOW_DONE))
            }
            else {
                dispatch(setFilter(filters.SHOW_ACTIVE))
            }
        }
    }
}

export default connect(null, mapStateToDispatch)(Filter)
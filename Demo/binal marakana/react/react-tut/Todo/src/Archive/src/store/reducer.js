import { REHYDRATE } from 'redux-persist';

let initState = {
    token: '',
    User: '',
    ProjectInfo: {},
    projectGetDetail: {},
    currentPage:''
};

function sundanceReducer(state = initState, action) {
    switch (action.type) {
        case 'AUTHENTICATION': {
            return { ...state, ...action.payload.user, token: action.payload.token }
        }
        case 'USER': {
            return { ...state, User: action.payload }
        }
        case 'FORM_DATA': {
            return { ...state, ProjectInfo: action.payload }
        }
        case 'PROJECT_GET_DETAILS': {
            return { ...state, projectGetDetail: action.payload }
        }
        case 'SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.payload }
        }
        case REHYDRATE:
            return {
                ...state, User: action?.payload?.User ? action?.payload?.User : '',
                ProjectInfo: action?.payload?.ProjectInfo ? action?.payload?.ProjectInfo : '',
                projectGetDetail: action?.payload?.projectGetDetail ? action?.payload?.projectGetDetail : {},
                currentPage: action?.payload?.currentPage ? action?.payload?.currentPage : '',
            }
        default:
            return { ...state };
    }
}

export const reducer = sundanceReducer;

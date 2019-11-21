import { queryImg } from './../services/img';
const UserModel = {
    namespace: 'img',
    state: {
        currentUser: [],
    },
    effects: {
        *fetch(_, { call, put }) {
            const response = yield call(queryUsers);
            yield put({
                type: 'save',
                payload: response,
            });
        },

        *query(_, { call, put }) {
            const response = yield call(queryImg);
            yield put({
                type: 'saveCurrentUser',
                payload: response,
            });
        },
    },
    reducers: {
        saveCurrentUser(state, action) {
            return { ...state, currentUser: action.payload || {} };
        },

        changeNotifyCount(
            state = {
                currentUser: {},
            },
            action,
        ) {
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    notifyCount: action.payload.totalCount,
                    unreadCount: action.payload.unreadCount,
                },
            };
        },
    },
    subscriptions: {
        setup({ history, dispatch }) {
            history.listen(({ pathname, search }) => {
                if (pathname == '/special/member/lifecycle/comprehensive') {
                    dispatch({
                        type: "query"
                    })

                }
            });
        },
    },
};
export default UserModel;

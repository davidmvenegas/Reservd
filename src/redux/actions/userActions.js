export const login = ({payload}) => {
    return {
        type: 'USER_LOGIN',
        payload: payload
    };
};
export const logout = () => {
    return {
        type: 'USER_LOGOUT',
    };
};
export const loadingDispatch = () => {
    return {
        type: 'LOADING',
        payload: payload
    };
};

  // const dispatch = useDispatch();
  // const userId = useSelector((store) => store.user.userId);
  // const loading = useSelector((store) => store.user.loading);


  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(loadingDispatch(false))
  //   }, 1000);
  // }, []);

  // if (loading) {
  //   return <Splash />
  // }

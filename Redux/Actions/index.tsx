export const getUser = () => ({
    type: "GET",
})

export const addUser = (values: any) => ({
    type: "POST",
    payload: values
})

export const addUserSuccess = (response: any) => ({
    type: "ADD_USER_SUCCESS",
    payload: response
})

export const setLoading = (isLoading: boolean) => ({
    type: "LOADING",
    payload: isLoading,
});

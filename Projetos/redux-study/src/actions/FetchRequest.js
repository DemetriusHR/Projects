function FetchRequest() {
  console.log("0 seconds in");
  const FETCH_REQUEST = "FETCH_REQUEST";

  return dispatch => {
    const FETCH_REQUEST_OBJ = {
      type: FETCH_REQUEST,
      status: "loading"
    };

    dispatch(FETCH_REQUEST_OBJ);
  };
}

export default FetchRequest;

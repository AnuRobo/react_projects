const reducer = (state, action) => {
  // Clear Cart
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  //  Remove
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  // Increase
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  // Decrease
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTALS") {
    // cartItem represents each and every item that we are iterating over
    // cartTotal is what we are returning in this case object with two propertirs total and amount
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    /* The reduce() method executes a user-supplied “reducer” callback function on each element of 
    the array, in order, passing in the return value from the calculation on the preceding element. 
    The final result of running the reducer across all elements of the array is a single value.  */

    /* Eg : const array1 = [1, 2, 3, 4];
    const reducer = (previousValue, currentValue) => previousValue + currentValue; */
    // reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
    /* Parameters

        callbackFn

            A “reducer” function that takes four arguments:

                previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
                currentValue: the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
                currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
                array: the array to traverse.

        initialValue Optional

            A value to which previousValue is initialized the first time the callback is called. If initialValue is specified, that also causes currentValue to be initialized to the first value in the array. If initialValue is not specified, previousValue is initialized to the first value in the array, and currentValue is initialized to the second value in the array.

        Return value

        The value that results from running the “reducer” callback function to completion over the entire array. */
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    // toFixed() Returns A string representing the given number using fixed-point notation.)
    // The number of digits to appear after the decimal point
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }

  return state;
};

export default reducer;
